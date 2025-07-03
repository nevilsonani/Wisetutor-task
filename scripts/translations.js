const translations = {
  en: {
    steps: [
      "Welcome! Let's learn multiplication.",
      "This is 1 block.",
      "Now you have 2 blocks = 4.",
      "Add one more: 3 blocks = 6.",
      "Great job!"
    ]
  },
  id: {
    steps: [
      "Selamat datang! Mari belajar perkalian.",
      "Ini adalah 1 blok.",
      "Sekarang kamu punya 2 blok = 4.",
      "Tambahkan lagi: 3 blok = 6.",
      "Kerja bagus!"
    ]
  },
  tl: {
    steps: [
      "Maligayang pagdating! Matututo tayo ng multiplication.",
      "Ito ay 1 block.",
      "Ngayon ay may 2 blocks ka = 4.",
      "Magdagdag pa: 3 blocks = 6.",
      "Magaling!"
    ]
  }
};

function setLanguage(lang) {
  currentLang = lang;
  currentStep = 0;
  document.getElementById("instructionText").textContent = translations[lang].steps[0];
  document.getElementById("stepProgress").textContent = `Step 1 of ${translations[lang].steps.length}`;
}
