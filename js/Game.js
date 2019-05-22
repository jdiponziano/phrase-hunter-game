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

  handleInteraction(letter) {

  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {

  }

}