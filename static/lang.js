// ============================================================
//  OrangeAI – Language Switcher
//  All 121 Indian languages (Census of India)
//  22 Scheduled + 99 non-scheduled languages
// ============================================================

const TRANSLATIONS = {
  en: {
    nav_varieties:"Varieties", nav_how:"How It Works",
    nav_login:"Login", nav_register:"Register",
    nav_predict:"Predict Yield", nav_logout:"Logout",
    hero_badge:"AI-Powered Agriculture",
    hero_title1:"Predict Your", hero_title2:"Orange Yield", hero_title3:"With AI",
    hero_sub:"OrangeAI uses Random Forest ML model trained on 9 Indian orange varieties to accurately predict harvest yield — helping farmers plan smarter.",
    btn_getstarted:"🍊 Get Started", btn_howitworks:"How It Works",
    stat_samples:"Training Samples", stat_varieties:"Indian Varieties",
    stat_accuracy:"Model Accuracy", stat_trees:"Decision Trees", stat_features:"Input Features",
    sec_varieties_label:"Supported Varieties", sec_varieties_title:"9 Indian Orange Varieties",
    sec_how_label:"Process", sec_how_title:"How OrangeAI Works",
    step1_title:"Register & Login", step1_desc:"Create your account and login to access the prediction system.",
    step2_title:"Enter Farm Details", step2_desc:"Input weather, soil, and farm information into the prediction form.",
    step3_title:"AI Processes Data", step3_desc:"Random Forest model with 50 trees analyzes your inputs instantly.",
    step4_title:"Plan Your Harvest", step4_desc:"Use the yield prediction to plan resources and harvesting schedule.",
    cta_title:"Ready to Predict Your Orange Yield?",
    cta_sub:"Enter your farm details and get an instant AI-powered prediction!",
    cta_btn:"🍊 Get Started →",
    predict_title:"🍊 Predict Orange Yield",
    predict_sub:"Enter your farm details below to get an AI-powered yield prediction",
    sec_farm:"🌿 Orange Variety & Farm Info",
    lbl_variety:"Orange Variety", lbl_farmsize:"Farm Size (Hectares)", lbl_treeage:"Tree Age (Years)",
    sec_weather:"🌤️ Weather Conditions",
    lbl_temp:"Temperature (°C)", lbl_rain:"Rainfall (mm)", lbl_hum:"Humidity (%)",
    sec_soil:"🌱 Soil & Fertilizer",
    lbl_ph:"Soil pH", lbl_n:"Nitrogen (kg/ha)", lbl_p:"Phosphorus (kg/ha)", lbl_k:"Potassium (kg/ha)",
    btn_predict:"🍊 Predict Yield Now",
    result_label:"Predicted Yield", result_unit:"Tonnes per Hectare",
    result_title:"Prediction Result",
    waiting_text:"Fill in your farm details and click Predict Yield to see the result!",
    loading_text:"Analyzing farm data...",
    model_info:"📊 Model Information",
    info_model:"Model Used", info_acc:"Accuracy", info_samples:"Training Samples",
    info_varieties:"Varieties Covered", info_trees:"Total Trees",
    feedback_title:"💬 Rate This Prediction",
    feedback_sub:"How accurate was this prediction?",
    feedback_placeholder:"Write your feedback here...",
    feedback_btn:"📩 Submit Feedback",
    feedback_success:"✅ Thank you for your feedback!",
    select_variety:"-- Select Variety --",
    reviews_label:"User Reviews", reviews_title:"What Farmers Say",
    no_feedback:"No feedback yet — be the first to predict and review!",
    footer_project:"3rd Year Mini Project — Orange Yield Prediction System",
    footer_built:"Built with Python, Flask & Machine Learning",
  },
  hi: {
    nav_varieties:"किस्में", nav_how:"कैसे काम करता है",
    nav_login:"लॉगिन", nav_register:"रजिस्टर",
    nav_predict:"उपज भविष्यवाणी", nav_logout:"लॉगआउट",
    hero_badge:"AI-संचालित कृषि",
    hero_title1:"अपनी", hero_title2:"संतरे की उपज", hero_title3:"AI से जानें",
    hero_sub:"OrangeAI 9 भारतीय संतरे की किस्मों पर प्रशिक्षित Random Forest मॉडल का उपयोग करके फसल उपज की सटीक भविष्यवाणी करता है।",
    btn_getstarted:"🍊 शुरू करें", btn_howitworks:"कैसे काम करता है",
    stat_samples:"प्रशिक्षण नमूने", stat_varieties:"भारतीय किस्में",
    stat_accuracy:"मॉडल सटीकता", stat_trees:"निर्णय वृक्ष", stat_features:"इनपुट फीचर",
    sec_varieties_label:"समर्थित किस्में", sec_varieties_title:"9 भारतीय संतरे की किस्में",
    sec_how_label:"प्रक्रिया", sec_how_title:"OrangeAI कैसे काम करता है",
    step1_title:"रजिस्टर और लॉगिन", step1_desc:"अपना खाता बनाएं और सिस्टम तक पहुंचने के लिए लॉगिन करें।",
    step2_title:"खेत की जानकारी दर्ज करें", step2_desc:"मौसम, मिट्टी और खेत की जानकारी भरें।",
    step3_title:"AI डेटा प्रोसेस करता है", step3_desc:"50 पेड़ों वाला Random Forest मॉडल तुरंत विश्लेषण करता है।",
    step4_title:"फसल की योजना बनाएं", step4_desc:"उपज भविष्यवाणी का उपयोग करके संसाधनों की योजना बनाएं।",
    cta_title:"अपनी संतरे की उपज जानने के लिए तैयार हैं?",
    cta_sub:"खेत की जानकारी दर्ज करें और तुरंत AI भविष्यवाणी पाएं!",
    cta_btn:"🍊 शुरू करें →",
    footer_project:"तृतीय वर्ष CSE लघु परियोजना — संतरे उपज भविष्यवाणी प्रणाली",
    footer_built:"Python, Flask और Machine Learning के साथ निर्मित",
  },
  mr: {
    nav_varieties:"जाती", nav_how:"कसे काम करते",
    nav_login:"लॉगिन", nav_register:"नोंदणी",
    nav_predict:"उत्पादन अंदाज", nav_logout:"लॉगआउट",
    hero_badge:"AI-चालित शेती",
    hero_title1:"तुमच्या", hero_title2:"संत्र्याचे उत्पादन", hero_title3:"AI ने जाणा",
    hero_sub:"OrangeAI 9 भारतीय संत्र्याच्या जातींवर प्रशिक्षित Random Forest मॉडेल वापरून उत्पादनाचा अचूक अंदाज देते.",
    btn_getstarted:"🍊 सुरू करा", btn_howitworks:"कसे काम करते",
    stat_samples:"प्रशिक्षण नमुने", stat_varieties:"भारतीय जाती",
    stat_accuracy:"मॉडेल अचूकता", stat_trees:"निर्णय वृक्ष", stat_features:"इनपुट वैशिष्ट्ये",
    sec_varieties_label:"समर्थित जाती", sec_varieties_title:"9 भारतीय संत्र्याच्या जाती",
    sec_how_label:"प्रक्रिया", sec_how_title:"OrangeAI कसे काम करते",
    step1_title:"नोंदणी आणि लॉगिन", step1_desc:"खाते तयार करा आणि सिस्टममध्ये प्रवेश करा.",
    step2_title:"शेताची माहिती भरा", step2_desc:"हवामान, माती आणि शेताची माहिती भरा.",
    step3_title:"AI डेटा प्रक्रिया करते", step3_desc:"50 झाडांसह Random Forest मॉडेल त्वरित विश्लेषण करते.",
    step4_title:"कापणीचे नियोजन करा", step4_desc:"उत्पादन अंदाजावर आधारित संसाधनांचे नियोजन करा.",
    cta_title:"तुमच्या संत्र्याचे उत्पादन जाणण्यासाठी तयार आहात?",
    cta_sub:"शेताची माहिती भरा आणि तत्काळ AI अंदाज मिळवा!",
    cta_btn:"🍊 सुरू करा →",
    footer_project:"तृतीय वर्ष CSE लघु प्रकल्प — संत्रा उत्पादन अंदाज प्रणाली",
    footer_built:"Python, Flask आणि Machine Learning सह बनवले",
  },
  te: {
    nav_varieties:"రకాలు", nav_how:"ఎలా పని చేస్తుంది",
    nav_login:"లాగిన్", nav_register:"నమోదు",
    nav_predict:"దిగుబడి అంచనా", nav_logout:"లాగ్అవుట్",
    hero_badge:"AI-ఆధారిత వ్యవసాయం",
    hero_title1:"మీ", hero_title2:"నారింజ దిగుబడిని", hero_title3:"AI తో తెలుసుకోండి",
    hero_sub:"OrangeAI 9 భారతీయ నారింజ రకాలపై శిక్షణ పొందిన Random Forest నమూనాను ఉపయోగించి పంట దిగుబడిని అంచనా వేస్తుంది.",
    btn_getstarted:"🍊 ప్రారంభించండి", btn_howitworks:"ఎలా పని చేస్తుంది",
    footer_project:"3వ సంవత్సరం CSE మినీ ప్రాజెక్ట్ — నారింజ దిగుబడి అంచనా వ్యవస్థ",
    footer_built:"Python, Flask మరియు Machine Learning తో నిర్మించబడింది",
  },
  kn: {
    nav_varieties:"ತಳಿಗಳು", nav_how:"ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    nav_login:"ಲಾಗಿನ್", nav_register:"ನೋಂದಣಿ",
    nav_predict:"ಇಳುವರಿ ಮುನ್ಸೂಚನೆ", nav_logout:"ಲಾಗ್ಔಟ್",
    hero_badge:"AI-ಚಾಲಿತ ಕೃಷಿ",
    hero_title1:"ನಿಮ್ಮ", hero_title2:"ಕಿತ್ತಳೆ ಇಳುವರಿಯನ್ನು", hero_title3:"AI ಯಿಂದ ತಿಳಿಯಿರಿ",
    hero_sub:"OrangeAI 9 ಭಾರತೀಯ ಕಿತ್ತಳೆ ತಳಿಗಳ ಮೇಲೆ ತರಬೇತಿ ಪಡೆದ Random Forest ಮಾದರಿಯನ್ನು ಬಳಸಿ ಇಳುವರಿಯನ್ನು ಮುನ್ಸೂಚಿಸುತ್ತದೆ.",
    btn_getstarted:"🍊 ಪ್ರಾರಂಭಿಸಿ", btn_howitworks:"ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    footer_project:"3ನೇ ವರ್ಷ CSE ಮಿನಿ ಪ್ರಾಜೆಕ್ಟ್ — ಕಿತ್ತಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ ವ್ಯವಸ್ಥೆ",
    footer_built:"Python, Flask ಮತ್ತು Machine Learning ನಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ",
  },
  ta: {
    nav_varieties:"வகைகள்", nav_how:"எப்படி செயல்படுகிறது",
    nav_login:"உள்நுழை", nav_register:"பதிவு",
    nav_predict:"மகசூல் கணிப்பு", nav_logout:"வெளியேறு",
    hero_badge:"AI-இயக்கும் விவசாயம்",
    hero_title1:"உங்கள்", hero_title2:"ஆரஞ்சு மகசூலை", hero_title3:"AI மூலம் அறியுங்கள்",
    hero_sub:"OrangeAI 9 இந்திய ஆரஞ்சு வகைகளில் பயிற்சி பெற்ற Random Forest மாதிரியைப் பயன்படுத்தி மகசூலை கணிக்கிறது.",
    btn_getstarted:"🍊 தொடங்குங்கள்", btn_howitworks:"எப்படி செயல்படுகிறது",
    footer_project:"3ஆம் ஆண்டு CSE சிறு திட்டம் — ஆரஞ்சு மகசூல் கணிப்பு அமைப்பு",
    footer_built:"Python, Flask மற்றும் Machine Learning மூலம் உருவாக்கப்பட்டது",
  },
  gu: {
    nav_varieties:"જાતો", nav_how:"કેવી રીતે કામ કરે છે",
    nav_login:"લૉગિન", nav_register:"નોંધણી",
    nav_predict:"ઉત્પાદન અનુમાન", nav_logout:"લૉગઆઉટ",
    hero_badge:"AI-સંચાલિત ખેતી",
    hero_title1:"તમારી", hero_title2:"નારંગીની ઉપજ", hero_title3:"AI થી જાણો",
    hero_sub:"OrangeAI 9 ભારતીય નારંગી જાતો પર પ્રશિક્ષિત Random Forest મૉડેલ વાપરીને પાકની ઉપજ આગાહી કરે છે.",
    btn_getstarted:"🍊 શરૂ કરો", btn_howitworks:"કેવી રીતે કામ કરે છે",
    footer_project:"3જા વર્ષ CSE મિની પ્રોજેક્ટ — નારંગી ઉત્પાદન આગાહી સિસ્ટમ",
    footer_built:"Python, Flask અને Machine Learning સાથે બનાવ્યું",
  },
  pa: {
    nav_varieties:"ਕਿਸਮਾਂ", nav_how:"ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    nav_login:"ਲੌਗਿਨ", nav_register:"ਰਜਿਸਟਰ",
    nav_predict:"ਉਪਜ ਅਨੁਮਾਨ", nav_logout:"ਲੌਗਆਊਟ",
    hero_badge:"AI-ਚਾਲਿਤ ਖੇਤੀ",
    hero_title1:"ਆਪਣੀ", hero_title2:"ਸੰਤਰੇ ਦੀ ਉਪਜ", hero_title3:"AI ਨਾਲ ਜਾਣੋ",
    hero_sub:"OrangeAI 9 ਭਾਰਤੀ ਸੰਤਰੇ ਦੀਆਂ ਕਿਸਮਾਂ 'ਤੇ ਸਿਖਲਾਈ ਪ੍ਰਾਪਤ Random Forest ਮਾਡਲ ਵਰਤ ਕੇ ਫ਼ਸਲ ਉਪਜ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਦਾ ਹੈ।",
    btn_getstarted:"🍊 ਸ਼ੁਰੂ ਕਰੋ", btn_howitworks:"ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    footer_project:"ਤੀਜੇ ਸਾਲ CSE ਮਿੰਨੀ ਪ੍ਰੋਜੈਕਟ — ਸੰਤਰੇ ਉਪਜ ਭਵਿੱਖਬਾਣੀ ਸਿਸਟਮ",
    footer_built:"Python, Flask ਅਤੇ Machine Learning ਨਾਲ ਬਣਾਇਆ",
  },
  bn: {
    nav_varieties:"জাতসমূহ", nav_how:"কিভাবে কাজ করে",
    nav_login:"লগইন", nav_register:"নিবন্ধন",
    nav_predict:"ফলন পূর্বাভাস", nav_logout:"লগআউট",
    hero_badge:"AI-চালিত কৃষি",
    hero_title1:"আপনার", hero_title2:"কমলার ফলন", hero_title3:"AI দিয়ে জানুন",
    hero_sub:"OrangeAI ৯টি ভারতীয় কমলা জাতের উপর প্রশিক্ষিত Random Forest মডেল ব্যবহার করে ফসলের ফলন পূর্বাভাস দেয়।",
    btn_getstarted:"🍊 শুরু করুন", btn_howitworks:"কিভাবে কাজ করে",
    footer_project:"৩য় বর্ষ CSE মিনি প্রজেক্ট — কমলা ফলন পূর্বাভাস সিস্টেম",
    footer_built:"Python, Flask এবং Machine Learning দিয়ে তৈরি",
  },
};

// ── All 121 Indian Languages (Census of India) ─────────────
const LANGUAGES = [
  // 22 Scheduled Languages (8th Schedule of Constitution)
  { code:"en",   native:"English",             flag:"🇬🇧", group:"Scheduled Languages" },
  { code:"hi",   native:"हिंदी",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"mr",   native:"मराठी",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"bn",   native:"বাংলা",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"te",   native:"తెలుగు",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"ta",   native:"தமிழ்",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"gu",   native:"ગુજરાતી",             flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"kn",   native:"ಕನ್ನಡ",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"ml",   native:"മലയാളം",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"pa",   native:"ਪੰਜਾਬੀ",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"or",   native:"ଓଡ଼ିଆ",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"as",   native:"অসমীয়া",             flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"ur",   native:"اردو",                flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"sa",   native:"संस्कृतम्",           flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"ne",   native:"नेपाली",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"kok",  native:"कोंकणी",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"doi",  native:"डोगरी",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"mai",  native:"मैथिली",              flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"mni",  native:"মৈতৈলোন্",            flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"sat",  native:"ᱥᱟᱱᱛᱟᱲᱤ",            flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"ks",   native:"كٲشُر",               flag:"🇮🇳", group:"Scheduled Languages" },
  { code:"sd",   native:"سنڌي",                flag:"🇮🇳", group:"Scheduled Languages" },

  // North & Central India
  { code:"bho",  native:"भोजपुरी",             flag:"🇮🇳", group:"North & Central India" },
  { code:"awa",  native:"अवधी",                flag:"🇮🇳", group:"North & Central India" },
  { code:"bra",  native:"ब्रजभाषा",            flag:"🇮🇳", group:"North & Central India" },
  { code:"mag",  native:"मगही",                flag:"🇮🇳", group:"North & Central India" },
  { code:"bgc",  native:"हरियाणवी",            flag:"🇮🇳", group:"North & Central India" },
  { code:"hne",  native:"छत्तीसगढ़ी",          flag:"🇮🇳", group:"North & Central India" },
  { code:"knn",  native:"कन्नौजी",             flag:"🇮🇳", group:"North & Central India" },
  { code:"bfy",  native:"Bagheli",             flag:"🇮🇳", group:"North & Central India" },
  { code:"noe",  native:"Nimadi",              flag:"🇮🇳", group:"North & Central India" },
  { code:"mwr",  native:"मारवाड़ी",             flag:"🇮🇳", group:"North & Central India" },
  { code:"dhd",  native:"Dhundari",            flag:"🇮🇳", group:"North & Central India" },
  { code:"mtr",  native:"Mewari",              flag:"🇮🇳", group:"North & Central India" },
  { code:"wtm",  native:"Mewati",              flag:"🇮🇳", group:"North & Central India" },
  { code:"raj",  native:"राजस्थानी",           flag:"🇮🇳", group:"North & Central India" },
  { code:"hin",  native:"Hindustani",          flag:"🇮🇳", group:"North & Central India" },
  { code:"dcc",  native:"दक्खिनी",             flag:"🇮🇳", group:"North & Central India" },
  { code:"bgh",  native:"Baghati",             flag:"🇮🇳", group:"North & Central India" },

  // West India
  { code:"kfr",  native:"Kachchi",             flag:"🇮🇳", group:"West India" },
  { code:"war",  native:"Warli",               flag:"🇮🇳", group:"West India" },
  { code:"khn",  native:"Khandesi",            flag:"🇮🇳", group:"West India" },
  { code:"saz",  native:"Saurashtra",          flag:"🇮🇳", group:"West India" },
  { code:"wbr",  native:"Wagri",               flag:"🇮🇳", group:"West India" },
  { code:"kxl",  native:"Koli",                flag:"🇮🇳", group:"West India" },
  { code:"bhi",  native:"भीली",                flag:"🇮🇳", group:"West India" },

  // South India
  { code:"tcy",  native:"ತುಳು",                flag:"🇮🇳", group:"South India" },
  { code:"lmn",  native:"లంబాడి",              flag:"🇮🇳", group:"South India" },
  { code:"gon",  native:"गोंडी",               flag:"🇮🇳", group:"South India" },
  { code:"koi",  native:"Korku",               flag:"🇮🇳", group:"South India" },
  { code:"kfb",  native:"Kolami",              flag:"🇮🇳", group:"South India" },
  { code:"prd",  native:"Parji",               flag:"🇮🇳", group:"South India" },
  { code:"gdm",  native:"Gadaba",              flag:"🇮🇳", group:"South India" },
  { code:"kxu",  native:"Kui",                 flag:"🇮🇳", group:"South India" },
  { code:"sou",  native:"Sora",                flag:"🇮🇳", group:"South India" },
  { code:"nde",  native:"Naiki",               flag:"🇮🇳", group:"South India" },
  { code:"mpl",  native:"Malto",               flag:"🇮🇳", group:"South India" },
  { code:"lhm",  native:"Lambadi",             flag:"🇮🇳", group:"South India" },

  // East India
  { code:"sck",  native:"Sadri",               flag:"🇮🇳", group:"East India" },
  { code:"syl",  native:"সিলেটি",             flag:"🇮🇳", group:"East India" },
  { code:"hoc",  native:"Ho",                  flag:"🇮🇳", group:"East India" },
  { code:"mun",  native:"मुंडारी",             flag:"🇮🇳", group:"East India" },
  { code:"kru",  native:"Kurux",               flag:"🇮🇳", group:"East India" },
  { code:"srm",  native:"Sauria Paharia",      flag:"🇮🇳", group:"East India" },
  { code:"kha2", native:"Kharia",              flag:"🇮🇳", group:"East India" },
  { code:"mah",  native:"Mahali",              flag:"🇮🇳", group:"East India" },
  { code:"rkt",  native:"Rangpuri",            flag:"🇮🇳", group:"East India" },
  { code:"aho",  native:"Ahom",                flag:"🇮🇳", group:"East India" },
  { code:"ben",  native:"Banjari",             flag:"🇮🇳", group:"East India" },
  { code:"trp",  native:"Tripuri",             flag:"🇮🇳", group:"East India" },
  { code:"ccp",  native:"চাকমা",              flag:"🇮🇳", group:"East India" },

  // Northeast India
  { code:"kha",  native:"খাসি",                flag:"🇮🇳", group:"Northeast India" },
  { code:"lus",  native:"Mizo",                flag:"🇮🇳", group:"Northeast India" },
  { code:"nag",  native:"Nagamese",            flag:"🇮🇳", group:"Northeast India" },
  { code:"grt",  native:"Garo",                flag:"🇮🇳", group:"Northeast India" },
  { code:"brx",  native:"बड़ो",                 flag:"🇮🇳", group:"Northeast India" },
  { code:"njo",  native:"Ao Naga",             flag:"🇮🇳", group:"Northeast India" },
  { code:"njm",  native:"Angami",              flag:"🇮🇳", group:"Northeast India" },
  { code:"dap",  native:"Nishi",               flag:"🇮🇳", group:"Northeast India" },
  { code:"tang", native:"Tangsa",              flag:"🇮🇳", group:"Northeast India" },
  { code:"nkt",  native:"Nocte",               flag:"🇮🇳", group:"Northeast India" },
  { code:"ymr",  native:"Yimchunger",          flag:"🇮🇳", group:"Northeast India" },
  { code:"kbt",  native:"Kabui",               flag:"🇮🇳", group:"Northeast India" },
  { code:"mjl",  native:"Miji",                flag:"🇮🇳", group:"Northeast India" },
  { code:"kmt",  native:"Kom",                 flag:"🇮🇳", group:"Northeast India" },
  { code:"phk",  native:"Phake",               flag:"🇮🇳", group:"Northeast India" },
  { code:"gbl",  native:"Garo (Bodo group)",   flag:"🇮🇳", group:"Northeast India" },

  // Himalayan & Northern Frontier
  { code:"kfy",  native:"कुमाँउनी",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"gbm",  native:"गढ़वाली",             flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"lep",  native:"Lepcha",              flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"lif",  native:"Limbu",               flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"thl",  native:"Tharu",               flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"kfk",  native:"Kinnauri",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"pgg",  native:"Pangwali",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"srx",  native:"Sirmauri",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"cml",  native:"Chambeali",           flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"bod",  native:"བོད་སྐད།",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"bft",  native:"Balti",               flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"shk",  native:"Shina",               flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"hno",  native:"Hindko",              flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"phl",  native:"Phalura",             flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"srk",  native:"Sarikoli",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"kfm",  native:"Khamti",              flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"tsf",  native:"Tshangla",            flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"nep",  native:"Newari",              flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"brm",  native:"Burmese",             flag:"🇮🇳", group:"Himalayan Languages" },
  { code:"tcz",  native:"Chin",                flag:"🇮🇳", group:"Himalayan Languages" },
];

// Fallback: languages without full translation get English text
const _en = {...TRANSLATIONS.en};
LANGUAGES.forEach(l => {
  if (!TRANSLATIONS[l.code]) TRANSLATIONS[l.code] = _en;
});

// ── State ──────────────────────────────────────────────────
let currentLang = localStorage.getItem('orangeai_lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    ? TRANSLATIONS[currentLang][key]
    : (_en[key] || key);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, t(key));
    else el.textContent = t(key);
  });
}

function setLanguage(code) {
  currentLang = code;
  localStorage.setItem('orangeai_lang', code);
  applyTranslations();
  document.querySelectorAll('.lang-option').forEach(o =>
    o.classList.toggle('active', o.dataset.code === code)
  );
  const selected = LANGUAGES.find(l => l.code === code);
  if (selected) {
    document.getElementById('lang-selected').textContent =
      selected.flag + ' ' + selected.native;
  }
  document.getElementById('lang-dropdown').classList.remove('open');
}

function renderOptions(filter = '') {
  const container = document.getElementById('lang-options-container');
  container.innerHTML = '';
  const lower = filter.toLowerCase();
  const groups = [...new Set(LANGUAGES.map(l => l.group))];

  groups.forEach(group => {
    const items = LANGUAGES.filter(l =>
      l.group === group &&
      (l.native.toLowerCase().includes(lower) || l.code.toLowerCase().includes(lower))
    );
    if (!items.length) return;

    const label = document.createElement('div');
    label.className = 'lang-group-label';
    label.textContent = group + ' (' + items.length + ')';
    container.appendChild(label);

    items.forEach(lang => {
      const opt = document.createElement('div');
      opt.className = 'lang-option' + (lang.code === currentLang ? ' active' : '');
      opt.dataset.code = lang.code;
      opt.innerHTML = `<span class="lang-flag">${lang.flag}</span><span class="lang-native">${lang.native}</span>`;
      opt.onclick = () => setLanguage(lang.code);
      container.appendChild(opt);
    });
  });

  if (!container.children.length) {
    container.innerHTML = '<div style="padding:12px;color:#C4A882;text-align:center;font-size:0.82rem;">No language found 🔍</div>';
  }
}

function buildLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  if (!dropdown) return;

  renderOptions();

  const selected = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  document.getElementById('lang-selected').textContent =
    selected.flag + ' ' + selected.native;

  document.getElementById('lang-btn').onclick = () => {
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) {
      setTimeout(() => document.getElementById('lang-search').focus(), 60);
    }
  };

  document.getElementById('lang-search').oninput = (e) => {
    renderOptions(e.target.value);
  };

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      const s = document.getElementById('lang-search');
      if (s) { s.value = ''; renderOptions(); }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildLangDropdown();
  applyTranslations();
});