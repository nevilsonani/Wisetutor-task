let currentStep = 0;
let currentLang = 'en';

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("rodSlider");
  const container = document.getElementById("blocksContainer");
  const instructionText = document.getElementById("instructionText");
  const stepProgress = document.getElementById("stepProgress");

  function updateBlocks(count) {
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const block = document.createElement("div");
      block.className = "block";
      block.textContent = "2";
      container.appendChild(block);
    }
    instructionText.textContent = `You've created ${count} x 2 = ${count * 2}`;
  }

  function updateStepText() {
    const steps = translations[currentLang].steps;
    instructionText.textContent = steps[currentStep];
    stepProgress.textContent = `Step ${currentStep + 1} of ${steps.length}`;
  }

  slider.addEventListener("input", (e) => {
    updateBlocks(e.target.value);
  });

  document.getElementById("nextBtn").onclick = () => {
    const steps = translations[currentLang].steps;
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStepText();
    } else {
      alert("🎉 Great job! You've completed the activity.");
    }
  };

  document.getElementById("prevBtn").onclick = () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepText();
    }
  };

  document.getElementById("speakBtn").onclick = () => {
    const msg = new SpeechSynthesisUtterance(instructionText.textContent);
    msg.lang = currentLang === 'id' ? 'id-ID' : currentLang === 'tl' ? 'tl-PH' : 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  };

  updateBlocks(slider.value);
});
