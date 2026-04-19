import pandas as pd
import numpy as np
import joblib
import os
import warnings
warnings.filterwarnings('ignore')

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import mean_absolute_error, r2_score

print("=" * 55)
print("        OrangeAI - MODEL TRAINING STARTED")
print("=" * 55)

print("\n[1] Loading dataset...")
df = pd.read_excel("indian_orange_yield_dataset.xlsx")
print(f"    ✅ Dataset loaded: {df.shape[0]} rows, {df.shape[1]} columns")

print("\n[2] Preparing data...")

# Drop columns not needed for prediction
df = df.drop(columns=['ID', 'Year', 'Region', 'Season'], errors='ignore')

# Encode variety
le_variety = LabelEncoder()
df['Orange_Variety'] = le_variety.fit_transform(df['Orange_Variety'])
print(f"    Varieties encoded: {list(le_variety.classes_)}")

os.makedirs("models", exist_ok=True)
joblib.dump(le_variety, "models/label_encoder.pkl")

# Features and target
X = df.drop(columns=['Yield_Tonnes_per_Hectare'])
y = df['Yield_Tonnes_per_Hectare']

# Save feature names
joblib.dump(list(X.columns), "models/feature_names.pkl")

print(f"    Input features ({len(X.columns)}): {list(X.columns)}")
print(f"    Target: Yield_Tonnes_per_Hectare")

# Scale
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
joblib.dump(scaler, "models/scaler.pkl")

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)
print(f"    Train size : {len(X_train)} rows")
print(f"    Test size  : {len(X_test)} rows")
print(f"    ✅ Data preparation done!")

print("\n[3] Training Random Forest model...")
print("    Building 50 trees — please wait...")

rf_model = RandomForestRegressor(
    n_estimators=50,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    n_jobs=-1,
    random_state=42
)
rf_model.fit(X_train, y_train)
rf_predictions = rf_model.predict(X_test)

rf_mae = mean_absolute_error(y_test, rf_predictions)
rf_r2  = r2_score(y_test, rf_predictions)
rf_acc = round(rf_r2 * 100, 2)

joblib.dump(rf_model, "models/model_rf.pkl")

feat_imp = pd.Series(rf_model.feature_importances_, index=X.columns)
feat_imp = feat_imp.sort_values(ascending=False)

print(f"    ✅ Random Forest trained!")
print(f"    Accuracy (R2 Score) : {rf_acc}%")
print(f"    Mean Absolute Error : {round(rf_mae, 4)} tonnes/hectare")
print(f"    Saved to            : models/model_rf.pkl")
print(f"\n    Top 5 Important Features:")
for feat, imp in feat_imp.head(5).items():
    print(f"      {feat:25s} → {round(imp*100, 2)}%")

print("\n" + "=" * 55)
print("         OrangeAI - FINAL RESULTS")
print("=" * 55)
print(f"  Random Forest Accuracy : {rf_acc}%")
print("=" * 55)
print(f"\n  Files saved in models/ folder:")
print(f"  ✅ models/model_rf.pkl      - Random Forest")
print(f"  ✅ models/scaler.pkl        - Data Scaler")
print(f"  ✅ models/label_encoder.pkl - Variety Encoder")
print(f"  ✅ models/feature_names.pkl - Feature Names")
print("\n  Next Step: Run app.py to start OrangeAI website!")
print("=" * 55)