class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases() {
    const phrases = [];

    phrases.push(new Phrase('Sooner Not Later'));
    phrases.push(new Phrase('A Dime a Dozen'));
    phrases.push(new Phrase('Piece of Cake'));
    phrases.push(new Phrase('An arm and a leg'));
    phrases.push(new Phrase('Beating around the push'));

    return phrases;
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    const overlay = document.getElementById('overlay');
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay();
    overlay.style.display = "none";
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const num = Math.floor(Math.random() * Math.floor(4));

    return this.phrases[num];
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    const letter = button.textContent;
    button.setAttribute('disabled', '');
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
      button.classList.add('chosen');
      this.checkForWin();
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    const lives = document.querySelectorAll('.tries');
    lives[this.missed].querySelector('img').src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) {
      game.gameOver(false);
    }
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length > 0) {
      return false;
    } else {
      game.gameOver(true);
    }
  }

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    const letters = document.querySelectorAll('#phrase li');
    const keys = document.querySelectorAll('.key');
    const lives = document.querySelectorAll('.tries');
    overlay.style.display = "flex";
    overlay.classList = '';

    if (gameWon) {
      overlay.classList.add('win');
      message.innerHTML = 'Congrats! You Won!';
    } else {
      overlay.classList.add('lose');
      message.innerHTML = 'Aw shucks you lost, maybe next time! Play again?';
    }

    this.missed = 0;

    letters.forEach(function (letter) {
      letter.remove();
    });

    keys.forEach(function (key) {
      key.classList = 'key';
      key.removeAttribute('disabled');
    });

    lives.forEach(function (life) {
      life.querySelector('img').src = 'images/liveHeart.png'
    })
  }
}