class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.activePhrase = null;
  }

  startGame() {
    // hide the start screen overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    // get random phrase
    this.activePhrase = this.getRandomPhrase();
    // display phrase on board
    const phrase = new Phrase(this.activePhrase);
    phrase.addPhraseToDisplay();
  }

  // method to randomly retrieve one of phrases
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  // method to hande player game interaction
  handleInteraction(selectedLetter) {
    // get reference to all keys
    const allKeys = document.querySelectorAll('.key');
    // if key match selected letter, disable it and store the index
    let selectedKeyIndex;
    allKeys.forEach( (key,index) => {
      key.disabled = key.textContent === selectedLetter ? true : false;
      if(key.disabled) selectedKeyIndex = index;
    });

    //check if phrase contains letter
    const phraseContainsLetter = phrase.checkLetter(selectedLetter);
    if(!phraseContainsLetter) {
      // doesn't contain => add wrong css class to selected letter keyboard and remove life
      allKeys[selectedKeyIndex].classList.add('wrong');
      removeLife();
    } else {
      // contains => add chosen css class to selected letter keyboard
      allKeys[selectedKeyIndex].classList.add('chosen');
      phrase.showMatchedLetter(selectedLetter);

      // check if game won and call gameOver
      if(checkForWin()) {
        gameOver();
      }
    }
  }

  // method to remove life from scoreboard
  removeLife() {
    // get a reference to the scoreboard hearts
    const scoreboard = document.querySelectorAll('#scoreboard img');
    // reversed it so hearts are removed from right to left
    const indexReversed = (scoreboard.length - 1) - this.missed;
    // replace the full heart with lost heart and increment missed variable
    scoreboard[indexReversed].setAttribute('src', 'images/lostHeart.png');
    this.missed++;
  }

  // method to check if player revealed all letters in active phrase
  checkForWin() {
    // get reference to phrase li letter elements && check if all have 'show' class
    const phrasesLI = document.querySelectorAll('.letter');
    return [...phrasesLI].every(li => li.classList.contains('show'))
  }

  // method to display win/lose screen
  gameOver(isWon){
    // get reference to overlay div
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    // get reference to gameover message h1
    const gameOverMessageRef = document.getElementById('game-over-message');
    if(this.missed < 5) {
      // won message and screen
      gameOverMessageRef.textContent = "Congratulations you won! :)";
      overlay.classList.replace('start', 'win');
    }else{
      // lost message and screen
      gameOverMessageRef.textContent = "Unfortunately you lost :(";
      overlay.classList.replace('start', 'lose');
    }
  }
}