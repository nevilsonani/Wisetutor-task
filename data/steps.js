const steps = [
  {
    id: 0,
    blocks: [1, 1], // two unit squares
    rods: [],
    instruction: {
      en: "Start with two unit squares.",
      id: "Mulai dengan dua kotak satuan.",
      tl: "Magsimula sa dalawang unit square."
    },
    narration: {
      en: "assets/audio/narration/en/intro.mp3",
      id: "assets/audio/narration/id/intro.mp3",
      tl: "assets/audio/narration/tl/intro.mp3"
    },
    slider: { enabled: false, min: 1, max: 1, value: 1 },
    mascotImg: "cartoon.webp"
  },
  {
    id: 1,
    blocks: [],
    rods: [2], // one rod of 2
    instruction: {
      en: "Join the two unit squares to make a rod of 2.",
      id: "Gabungkan dua kotak satuan untuk membuat batang bernilai 2.",
      tl: "Pagsamahin ang dalawang unit square para makabuo ng rod na 2."
    },
    narration: {
      en: "assets/audio/narration/en/intro.mp3",
      id: "assets/audio/narration/id/intro.mp3",
      tl: "assets/audio/narration/tl/intro.mp3"
    },
    slider: { enabled: false, min: 1, max: 1, value: 1 },
    mascotImg: "cartoon.webp"
  },
  {
    id: 2,
    blocks: [],
    rods: [2, 2], // two rods of 2
    instruction: {
      en: "Now join two rods: 2 + 2 = 4.",
      id: "Sekarang gabungkan dua batang: 2 + 2 = 4.",
      tl: "Ngayon pagsamahin ang dalawang rod: 2 + 2 = 4."
    },
    narration: {
      en: "assets/audio/narration/en/intro.mp3",
      id: "assets/audio/narration/id/intro.mp3",
      tl: "assets/audio/narration/tl/intro.mp3"
    },
    slider: { enabled: true, min: 1, max: 5, value: 2 },
    mascotImg: "cartoon.webp"
  },
  {
    id: 3,
    blocks: [],
    rods: [2, 2, 2], // three rods of 2
    instruction: {
      en: "You’ve created a number block of 6! Try more multiples.",
      id: "Kamu telah membuat blok angka 6! Coba kelipatan lainnya.",
      tl: "Nakapagbuo ka ng number block na 6! Subukan pa ang ibang multiples."
    },
    narration: {
      en: "assets/audio/narration/en/intro.mp3",
      id: "assets/audio/narration/id/intro.mp3",
      tl: "assets/audio/narration/tl/intro.mp3"
    },
    slider: { enabled: true, min: 1, max: 5, value: 3 },
    mascotImg: "cartoon.webp"
  }
];

if (typeof module !== 'undefined') {
  module.exports = steps;
} 