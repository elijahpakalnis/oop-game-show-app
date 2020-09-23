let game;

// start button reference
const startButton = document.getElementById('btn__reset');
// click event event listener on button to start game
startButton.addEventListener('click', e => {
  game = new Game();
  game.resetGame();
  game.startGame()
});

// click event listener for all key buttons
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
    game.handleInteraction(e.target.textContent);
  }
});

// keyup listener so keyboard can be used
document.addEventListener('keyup', e => {
  game.handleInteraction(e.key);
});