const translations = {
  en: {
    heroTitle: "You're Not Alone.",
    heroSubtitle: "A safe, comfort space for emotional support.",
    ReadingArticles: "Reading Articles",
    EmotionalOutlets: "Emotional Outlets",
    footer: "💚 Remember: You're not alone. Help is always available.",
    feelingrightnow:"Feeling overwhelmed right now?",
    quickExercise:"Try one of these quick exercises",
  },
  my: {
    heroTitle: "မင်းတယောက်တည်းမဟုတ်ပါဘူး",
    heroSubtitle: "စိတ်ခံစားမှုဆိုင်ရာ အထောက်အပံ့အတွက် ဘေးကင်းပြီး သက်တောင့်သက်သာရှိသော နေရာတစ်ခု။",
    ReadingArticles: "ဆောင်းပါးများဖတ်ရန်",
    EmotionalOutlets: "စိတ်ခံစားမှုဆိုင်ရာ ထွက်ပေါက်များ",
    footer:"💚 သတိရပါ- သင်တစ်ယောက်တည်း မဟုတ်ပါဘူး။ အကူအညီ အမြဲရရှိနိုင်ပါတယ်။",
    feelingrightnow : "စိတ်ရှုပ်ထွေးနေသလို ခံစားရလား?",
    quickExercise:"ဒီလေ့ကျင့်ခန်းသေးသေးလေးတွေကို စမ်းကြည့်ပါနော်",

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

const breathingCard = document.getElementById("breathingCard");
const breathingModal = document.getElementById("breathingModal");
const breathingcloseBtn = document.getElementById("closeModal");

// Open modal
breathingCard.onclick = function() {
    breathingModal.style.display = "block";
}

// Close modal when X clicked
breathingcloseBtn.onclick = function() {
    breathingModal.style.display = "none";
}

// Close when clicking outside box
window.onclick = function(event) {
    if (event.target == breathingModal) {
        breathingModal.style.display = "none";
    }
}

const groundingCard = document.getElementById("groundingCard");
const groundingModal = document.getElementById("groundingModal");
const groundingcloseBtn = document.getElementById("closeModal");

// Open modal
groundingCard.onclick = function() {
    groundingModal.style.display = "block";
}

// Close modal when X clicked
groundingcloseBtn.onclick = function() {
    groundingModal.style.display = "none";
}

// Close when clicking outside box
window.onclick = function(event) {
    if (event.target == groundingModal) {
        groundingModal.style.display = "none";
    }
}