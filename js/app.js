/*
 * Phrase Hunter Game
 * app.js */

const game = new Game();
const startBtn = document.getElementById('btn__reset');
const keyboardBtns = document.querySelectorAll('.key');

startBtn.addEventListener('click', () => {
  game.startGame();
});

keyboardBtns.forEach((key) => {
  key.addEventListener('click', (evt) => {
    const letter = evt.target;
    game.handleInteraction(letter);
  })
});

document.addEventListener('keyup', (e) => {
  const key = e.key;
  console.log(e);
  keyboardBtns.forEach((btn) => {
    if (key === btn.textContent) {
      game.handleInteraction(btn);
    }
  });
});