const clickSound = new Howl({
  src: ["assets/audio/click.mp3"]
});

function playClickSound() {
  clickSound.play();
}
