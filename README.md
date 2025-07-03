# 📚 Number Blocks Applet – Interactive Learning Tool

This is a fun and educational web application built to visually teach children the concept of multiplication using interactive blocks. Designed for WiseTutor as part of their HTML/CSS/JS developer task, the app demonstrates core web development skills, interactivity, and multilingual support.

---

## ✨ Features

- 🔢 **Visual Multiplication** using animated 2-unit blocks
- 🎛️ **Slider Input** to control number of rods (each rod = 2 units)
- 💬 **Step-by-step instructions** with dynamic narration
- 🔊 **Voice narration** using Web Speech API
- 🎵 **Background music** (looped via `<audio>`)
- 🌐 **Multilingual support**: English 🇬🇧, Indonesian 🇮🇩, Tagalog 🇵🇭
- 📊 **Step progress tracker** with real-time updates
- 🎉 **Final step alert** with celebration popup
- 🎨 **Responsive, colorful, accessible design**
- 📦 **Fully offline-compatible** (no internet required after loading)

---

## 📁 Folder Structure

number-blocks-applet/
├── index.html # Main HTML file
├── style/
│ └── main.css # All global and component styles
├── scripts/
│ ├── main.js # Core app logic
│ ├── translations.js # Language translations
│ ├── audio.js # Music and sound effects
│ └── ui.js # Optional helpers (e.g., highlight)
├── assets/
│ ├── images/
│ │ ├── block-unit.png # Logo / visual block image
│ │ └── bg.png # Background visual
│ └── audio/
│ ├── bg-music.mp3 # Loopable background music
│ └── click.mp3 # UI click sound effect
├── libs/
│ └── howler.min.js # Howler.js (local version)
└── README.md # This documentation


---

## 🚀 How to Run

### ✅ Offline Use:
1. Download or clone the repository.
2. Open the `index.html` file in any modern browser.
3. That’s it! It works fully offline — no internet or build tools required.


## 👨‍💻 Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Web Speech API (for narration)

---

## 🔗 Live Preview

Example: [View Live](https://number-blocks-demo.netlify.app)

---

## 📸 Screenshots
 
Example:
- Logo: `assets/images/block-unit.png`  
- Background: `assets/images/bg.png`


## ✅ Submission Notes (WiseTutor)

- Follows 100% of instructions from the official PDF brief.
- Functional replication of slide-based UI as per the Google Slides reference.
- Includes additional enhancements:
  - Voice narration
  - Background music
  - Multilingual UI
  - Step progress and completion logic
- Works offline, is mobile-friendly, and has modular code structure.
