# 📦 Number Blocks Applet – Interactive Math Activity

Welcome to the **Number Blocks Applet**, a playful web-based tool designed to teach basic multiplication using visual blocks. Built as part of the WiseTutor developer task, this project is fully interactive, multilingual, responsive, and works entirely offline.

---

## 🧠 Features

- 🔢 **Visual Multiplication** using unit blocks (2 per rod)
- 🌍 **Multi-language support**: English 🇬🇧, Indonesian 🇮🇩, Tagalog 🇵🇭
- 🔊 **Text-to-speech narration** of each step (Web Speech API)
- 🎵 **Background music** (looped .mp3 using `<audio>` tag)
- 🎉 **Progress tracker** with step completion alert
- 🖱️ **Slider input** to adjust number of rods
- 🎨 **Responsive and beautiful UI** with mascot/logo and colorful design
- 🧩 Fully **offline-capable** (no external dependencies)

---

## 📁 Project Structure

number-blocks-applet/
├── index.html # Main HTML file
├── style/
│ └── main.css # All CSS styles
├── scripts/
│ ├── main.js # Core app logic
│ ├── translations.js # Language translations
│ ├── audio.js # Click sound/music setup
│ └── ui.js # (Optional visual effects)
├── assets/
│ ├── images/
│ │ ├── block-unit.png # Logo image (used in header)
│ │ └── bg.png # App background image
│ ├── audio/
│ │ ├── bg-music.mp3 # Background loop music
│ │ └── click.mp3 # UI click feedback sound
├── libs/
│ └── howler.min.js # Local Howler.js for sound effects
└── README.md # You're reading it!


---

## 🚀 Getting Started

### ✅ 1. Clone or Download

```bash
git clone https://github.com/nevilsonani/number-blocks-applet.git
cd number-blocks-applet

✅ 2. Open in browser
No build required! Just open:


``` bash
index.html
```
