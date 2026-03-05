const translations = {
  en: {
    heroTitle: "You're Not Alone.",
    heroSubtitle: "A safe, comfort space for emotional support.",
    ReadingArticles: "Reading Articles",
    EmotionalOutlets: "Emotional Outlets",
    footer: "💚 Remember: You're not alone. Help is always available.",
    feelingrightnow:"Feeling overwhelmed right now?",
    quickExercise:"Try one of these quick exercises",
    breathingexercise:"Breathing Exercise",
    Grounding5:"5-4-3-2-1 Grounding",
    MuscleRelaxation:"Muscle Relaxation",
    CognitiveQ:"Cognitive Reset Question",
    Nurture:"🌿Nurture Your Mind",
    healthywaysyoucanfind:"Discovering healthy ways to process feelings and cultivate inner peace",
    pathways:"Pathways to Peace of mind",
    Emergency:"Emergency Help",
    dangertext:"If you're in immediate danger: ",
    dangertext2:"Please contact emergency services or a crisis helpline.",
    dangerTextfooter:"You matter. Help is available. 💙"

  },
  my: {
    heroTitle: "မင်းတယောက်တည်းမဟုတ်ပါဘူး",
    heroSubtitle: "စိတ်ခံစားမှုဆိုင်ရာ အထောက်အပံ့အတွက် ဘေးကင်းပြီး သက်တောင့်သက်သာရှိသော နေရာတစ်ခု။",
    ReadingArticles: "ဆောင်းပါးများဖတ်ရန်",
    EmotionalOutlets: "စိတ်ခံစားမှုဆိုင်ရာ ထွက်ပေါက်များ",
    footer:"💚 သတိရပါ- သင်တစ်ယောက်တည်း မဟုတ်ပါဘူး။ အကူအညီ အမြဲရရှိနိုင်ပါတယ်။",
    feelingrightnow : "စိတ်ရှုပ်ထွေးနေသလို ခံစားရလား?",
    quickExercise:"ဒီလေ့ကျင့်ခန်းသေးသေးလေးတွေကို စမ်းကြည့်ပါနော်",
    breathingexercise:"အသက်ရှုလေ့ကျင့်ခန်း",
    Grounding5:"၅-၄-၃-၂-၁ လက်ရှိအခြေအနေ သတိပြု",
    MuscleRelaxation:"ကြွက်သားပြေလျော့စေခြင်း",
    CognitiveQ:"အတွေးအမြင် ပြန်လည်ညှိနှိုင်း မေးခွန်းများ",
    Nurture:"🌿စိတ်ကို ပြုစုပျိုးထောင်ပါ",
    healthywaysyoucanfind:"ခံစားချက်တွေကို ကျန်းမာတဲ့နည်းလမ်းတွေနဲ့ ကိုင်တွယ်ပြီး စိတ်အေးချမ်းမှုကို တည်ဆောက်ပါ",
    pathways:"စိတ်ငြိမ်းချမ်းမှုဆီသို့ လမ်းကြောင်းများ",
    Emergency:"အရေးပေါ်အကူအညီ",
    dangertext:"အရေးပေါ်အန္တရာယ်ကျရောက်နေပါက- ",
    dangertext2:"အရေးပေါ်ဝန်ဆောင်မှု သို့မဟုတ် အရေးပေါ်အကူအညီပေးရေးဌာနသို့ ဆက်သွယ်ပါ။",
    dangerTextfooter:"မင်းကအရေးပါတယ်။ အကူအညီရရှိနိုင်ပါသည်။ 💙"
  }
};

document.addEventListener("DOMContentLoaded", () => {

  let currentLang = localStorage.getItem("language") || "en";
  const langToggle = document.getElementById("langToggle");

  function updateLanguage() {
    document.querySelectorAll("[data-key]").forEach(element => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[currentLang][key];
    });

    langToggle.textContent = currentLang === "en" ? "မြန်မာ" : "English";
  }

  updateLanguage(); // Apply saved language on load

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "my" : "en";
    localStorage.setItem("language", currentLang);
    updateLanguage();
  });

});
// Get elements
const breathingCard = document.getElementById("BreathingCard");
const groundingCard = document.getElementById("GroundingCard");
const relaxationCard = document.getElementById("RelaxationCard");
const resetQCard = document.getElementById("ResetQCard");
const EmergencyCard = document.getElementById("EmergencyCard");

const breathingModal = document.getElementById("breathingModal");
const groundingModal = document.getElementById("groundingModal");
const relaxationModal = document.getElementById("relaxationModal");
const resetQModal = document.getElementById("resetQModal");
const EmergencyModal = document.getElementById("EmergencyModal");

const breathingCloseBtn = document.querySelector("#breathingModal .close");
const groundingCloseBtn = document.querySelector("#groundingModal .close");
const relaxationCloseBtn = document.querySelector("#relaxationModal .close");
const resetQCloseBtn = document.querySelector("#resetQModal .close");
const EmergencyCloseBtn =document.querySelector("#EmergencyModal .close");

// Open modals
breathingCard.addEventListener("click", () => {
    breathingModal.style.display = "block";
});

groundingCard.addEventListener("click", () => {
    groundingModal.style.display = "block";
});

relaxationCard.addEventListener("click", ()=> {
  relaxationModal.style.display="block";
});

resetQCard.addEventListener("click", ()=>{
  resetQModal.style.display="block";
})
EmergencyCard.addEventListener("click", ()=>{
  EmergencyModal.style.display="block";
})

// Close modals when X clicked
breathingCloseBtn.addEventListener("click", () => {
    breathingModal.style.display = "none";
});

groundingCloseBtn.addEventListener("click", () => {
    groundingModal.style.display = "none";
});

relaxationCloseBtn.addEventListener("click", ()=>{
   relaxationModal.style.display ="none";
});

resetQCloseBtn.addEventListener("click", ()=>{
   resetQModal.style.display="none";
});

EmergencyCloseBtn.addEventListener("click",()=>{
  EmergencyModal.style.display="none";
});

// Close when clicking outside modal
window.addEventListener("click", (event) => {
    if (event.target === breathingModal) {
        breathingModal.style.display = "none";
    }
    if (event.target === groundingModal) {
        groundingModal.style.display = "none";
    }
    if (event.target === relaxationModal) {
      relaxationModal.style.display = "none";
    }
    if (event.target === resetQModal) {
      resetQModal.style.display ="none";
    }
    if (event.target === EmergencyModal) {
      EmergencyModal.style.display ="none";
    }
});