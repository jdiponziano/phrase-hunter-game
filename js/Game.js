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

  startGame() {
    const phrase = this.getRandomPhrase;
    this.activePhrase = phrase;
    phrase.addToDisplay;
  }

  getRandomPhrase() {

  }

  handleInteraction() {

  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {

  }

}