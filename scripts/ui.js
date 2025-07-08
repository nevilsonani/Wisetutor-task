function highlightNextButton() {
  const btn = document.getElementById("nextBtn");
  btn.style.backgroundColor = "#ffd54f";
  btn.style.transform = "scale(1.1)";
  btn.style.boxShadow = "0 0 12px 2px #ffd54f";
  setTimeout(() => {
    btn.style.backgroundColor = "";
    btn.style.transform = "";
    btn.style.boxShadow = "";
  }, 600);
}

function showCelebration() {
  const container = document.getElementById("blocksContainer");
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.innerHTML = "🎉";
  confetti.style.position = "absolute";
  confetti.style.left = "50%";
  confetti.style.top = "30%";
  confetti.style.fontSize = "4rem";
  confetti.style.transform = "translate(-50%, 0)";
  confetti.style.pointerEvents = "none";
  container.appendChild(confetti);
  setTimeout(() => {
    confetti.remove();
  }, 1500);
}
