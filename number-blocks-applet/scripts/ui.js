function highlightNextButton() {
  const btn = document.getElementById("nextBtn");
  btn.style.backgroundColor = "#ffd54f";
  setTimeout(() => (btn.style.backgroundColor = ""), 600);
}
