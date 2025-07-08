let currentStep = 0;
let currentLang = 'en';

// Load steps from steps.js
// If using modules, import; otherwise, ensure steps.js is loaded before this script
// For browser, steps should be global

function getStepData(stepIdx) {
  return steps[stepIdx];
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("rodSlider");
  const container = document.getElementById("blocksContainer");
  const instructionText = document.getElementById("instructionText");
  const stepProgress = document.getElementById("stepProgress");
  const speakBtn = document.getElementById("speakBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function renderBlocksAndRods(step, sliderValue) {
    container.innerHTML = "";
    // Render unit squares
    if (step.blocks && step.blocks.length > 0) {
      step.blocks.forEach(() => {
        const block = document.createElement("div");
        block.className = "block";
        block.textContent = "1";
        container.appendChild(block);
      });
    }
    // Render rods (multiples of 2)
    if (step.rods && step.rods.length > 0) {
      let rodCount = step.rods.length;
      // If slider is enabled, use slider value
      if (step.slider && step.slider.enabled) {
        rodCount = sliderValue || step.slider.value;
      }
      for (let i = 0; i < rodCount; i++) {
        const rod = document.createElement("div");
        rod.className = "block";
        rod.textContent = "2";
        rod.style.background = "#81c784";
        rod.style.borderColor = "#388e3c";
        container.appendChild(rod);
      }
      // Show math representation
      if (rodCount > 0) {
        const math = document.createElement("div");
        math.style.marginTop = "12px";
        math.style.fontWeight = "bold";
        math.textContent = `You've created ${rodCount} x 2 = ${rodCount * 2}`;
        container.appendChild(math);
      }
    }
  }

  function updateStepUI() {
    const step = getStepData(currentStep);
    // Update mascot image
    const mascot = document.getElementById("mascotImg");
    if (mascot && step.mascotImg) {
      mascot.src = `assets/images/${step.mascotImg}`;
    }
    // Update instruction
    instructionText.textContent = step.instruction[currentLang];
    // Update progress
    stepProgress.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    // Update slider
    if (step.slider && step.slider.enabled) {
      slider.style.display = "inline-block";
      slider.min = step.slider.min;
      slider.max = step.slider.max;
      slider.value = step.slider.value;
      slider.disabled = false;
    } else {
      slider.style.display = "none";
      slider.disabled = true;
    }
    // Render blocks/rods
    renderBlocksAndRods(step, step.slider && step.slider.enabled ? slider.value : undefined);
    // Play narration audio if available
    playNarration(step);
    // Highlight next button if last step or actionable
    if (currentStep === steps.length - 1) {
      nextBtn.textContent = "Finish";
    } else {
      nextBtn.textContent = "Next ➡";
      if (typeof highlightNextButton === 'function') highlightNextButton();
    }
  }

  let currentAudio = null;
  function playNarration(step) {
    // Stop any current speech
    window.speechSynthesis.cancel();
    // Stop previous audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    // Play audio file if available
    if (step.narration && step.narration[currentLang]) {
      currentAudio = new Audio(step.narration[currentLang]);
      currentAudio.play();
    }
  }

  function animateMascot() {
    const mascot = document.getElementById("mascotImg");
    if (!mascot) return;
    mascot.classList.remove("mascot-animate");
    // Force reflow to restart animation
    void mascot.offsetWidth;
    mascot.classList.add("mascot-animate");
    setTimeout(() => mascot.classList.remove("mascot-animate"), 700);
  }

  slider.addEventListener("input", (e) => {
    const step = getStepData(currentStep);
    renderBlocksAndRods(step, e.target.value);
  });

  nextBtn.onclick = () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStepUI();
      animateMascot();
    } else {
      if (typeof showCelebration === 'function') showCelebration();
      if (typeof playClickSound === 'function') playClickSound();
      animateMascot();
      alert("🎉 Great job! You've completed the activity.");
    }
  };

  prevBtn.onclick = () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepUI();
    }
  };

  speakBtn.onclick = () => {
    const step = getStepData(currentStep);
    const msg = new SpeechSynthesisUtterance(step.instruction[currentLang]);
    msg.lang = currentLang === 'id' ? 'id-ID' : currentLang === 'tl' ? 'tl-PH' : 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
    animateMascot();
  };

  // Language switching
  window.setLanguage = function(lang) {
    currentLang = lang;
    currentStep = 0;
    updateStepUI();
  };

  // Initial UI
  updateStepUI();
});
