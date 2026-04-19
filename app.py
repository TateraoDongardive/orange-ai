from flask import Flask, request, jsonify, render_template, session, redirect, url_for
from flask_cors import CORS
import joblib
import numpy as np
import sqlite3
import hashlib
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)
app.secret_key = "orangeai_secret_key_2026"

# ============================================================
# DATABASE SETUP
# ============================================================
def init_db():
    conn   = sqlite3.connect("users.db")
    cursor = conn.cursor()

    # Users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT    NOT NULL,
            email      TEXT    UNIQUE NOT NULL,
            password   TEXT    NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Predictions table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS predictions (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id      INTEGER NOT NULL,
            variety      TEXT,
            temperature  REAL,
            rainfall     REAL,
            humidity     REAL,
            soil_ph      REAL,
            nitrogen     REAL,
            phosphorus   REAL,
            potassium    REAL,
            tree_age     REAL,
            farm_size    REAL,
            result       REAL,
            created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    ''')

    # Feedback table 
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id    INTEGER NOT NULL,
            user_name  TEXT    NOT NULL,
            rating     INTEGER NOT NULL,
            message    TEXT    NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    ''')

    conn.commit()
    conn.close()
    print("✅ Database initialized!")

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def get_db():
    conn = sqlite3.connect("users.db")
    conn.row_factory = sqlite3.Row
    return conn

# ============================================================
# LOAD ML MODEL
# ============================================================
print("Loading OrangeAI models...")
rf_model   = joblib.load("models/model_rf.pkl")
scaler     = joblib.load("models/scaler.pkl")
le_variety = joblib.load("models/label_encoder.pkl")
print("✅ Models loaded!")

init_db()

# ── Home Page ─────────────────────────────────────────────────
@app.route('/')
def home():
    user_name = session.get('user_name', None)

    # R — READ feedbacks for homepage
    conn   = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        SELECT user_name, rating, message, created_at
        FROM feedback
        ORDER BY created_at DESC
        LIMIT 6
    ''')
    feedbacks = [dict(row) for row in cursor.fetchall()]
    conn.close()

    return render_template('index.html',
        user_name=user_name,
        feedbacks=feedbacks
    )

# ── Register ──────────────────────────────────────────────────
@app.route('/register')
def register_page():
    if 'user_id' in session:
        return redirect(url_for('predict_page'))
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register():
    try:
        data     = request.get_json()
        name     = data['name'].strip()
        email    = data['email'].strip().lower()
        password = data['password']

        conn   = get_db()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (name, email, password)
        )
        conn.commit()
        conn.close()
        return jsonify({'status': 'success', 'message': 'Account created!'})

    except sqlite3.IntegrityError:
        return jsonify({'status': 'error', 'message': 'Email already registered!'}), 400
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

# ── Login ─────────────────────────────────────────────────────
@app.route('/login')
def login_page():
    if 'user_id' in session:
        return redirect(url_for('predict_page'))
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    try:
        data     = request.get_json()
        email    = data['email'].strip().lower()
        password = data['password']

        conn   = get_db()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT id, name FROM users WHERE email=? AND password=?",
            (email, password)
        )
        user = cursor.fetchone()
        conn.close()

        if user:
            session['user_id']   = user['id']
            session['user_name'] = user['name']
            return jsonify({'status': 'success', 'message': f"Welcome {user['name']}!", 'name': user['name']})
        else:
            return jsonify({'status': 'error', 'message': 'Wrong email or password!'}), 401

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

# ── Logout ────────────────────────────────────────────────────
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))

# ── Predict Page ──────────────────────────────────────────────
@app.route('/predict')
def predict_page():
    if 'user_id' not in session:
        return redirect(url_for('login_page'))
    return render_template('predict.html', user_name=session.get('user_name', ''))

# ── Predict API ───────────────────────────────────────────────
@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'user_id' not in session:
            return jsonify({'status': 'error', 'message': 'Please login first!'}), 401

        data         = request.get_json()
        variety_name = data['orange_variety']
        temperature  = float(data['temperature'])
        rainfall     = float(data['rainfall'])
        humidity     = float(data['humidity'])
        soil_ph      = float(data['soil_ph'])
        nitrogen     = float(data['nitrogen'])
        phosphorus   = float(data['phosphorus'])
        potassium    = float(data['potassium'])
        tree_age     = float(data['tree_age'])
        farm_size    = float(data['farm_size'])

        variety_encoded = le_variety.transform([variety_name])[0]
        input_data      = np.array([[
            variety_encoded, temperature, rainfall,
            humidity, soil_ph, nitrogen, phosphorus,
            potassium, tree_age, farm_size
        ]])
        input_scaled  = scaler.transform(input_data)
        rf_prediction = rf_model.predict(input_scaled)[0]
        result        = round(float(rf_prediction), 2)

        # Save prediction to DB
        conn   = get_db()
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO predictions
            (user_id, variety, temperature, rainfall, humidity,
             soil_ph, nitrogen, phosphorus, potassium, tree_age, farm_size, result)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (session['user_id'], variety_name, temperature, rainfall,
              humidity, soil_ph, nitrogen, phosphorus, potassium,
              tree_age, farm_size, result))
        conn.commit()
        conn.close()

        return jsonify({
            'status'       : 'success',
            'variety'      : variety_name,
            'dt_prediction': result,
            'unit'         : 'Tonnes per Hectare'
        })

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

# ── Feedback API ──────────────────────────────────────────────
@app.route('/feedback', methods=['POST'])
def feedback():
    try:
        if 'user_id' not in session:
            return jsonify({'status': 'error', 'message': 'Please login first!'}), 401

        data    = request.get_json()
        rating  = int(data['rating'])
        message = data['message'].strip()

        if not message:
            return jsonify({'status': 'error', 'message': 'Please write a message!'}), 400
        if rating < 1 or rating > 5:
            return jsonify({'status': 'error', 'message': 'Rating must be 1-5!'}), 400

        # C — SAVE feedback to database
        conn   = get_db()
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO feedback (user_id, user_name, rating, message)
            VALUES (?, ?, ?, ?)
        ''', (session['user_id'], session['user_name'], rating, message))
        conn.commit()
        conn.close()

        return jsonify({'status': 'success', 'message': 'Thank you for your feedback!'})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 400

# ── Get Feedbacks API ─────────────────────────────────────────
@app.route('/get_feedbacks')
def get_feedbacks():
    conn   = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        SELECT user_name, rating, message, created_at
        FROM feedback
        ORDER BY created_at DESC
        LIMIT 6
    ''')
    feedbacks = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify({'status': 'success', 'feedbacks': feedbacks})

# ============================================================
# RUN
# ============================================================
if __name__ == '__main__':
    print("\n" + "=" * 45)
    print("   🍊 OrangeAI Server Starting...")
    print("=" * 45)
    print("   Open browser → http://127.0.0.1:5000")
    print("=" * 45 + "\n")
    app.run(debug=True, port=5000)