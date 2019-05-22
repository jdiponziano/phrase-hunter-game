class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseContainer = document.getElementById('phrase');
    const characters = this.phrase.split("");

    characters.forEach(function (char) {
      let character = document.createElement('li');

      if (char.match(/^[A-Za-z]+$/)) {
        character.classList.add('hide', 'letter', char);
        character.innerHTML = char;
      } else {
        character.setAttribute('class', 'space');
        character.innerHTML = char;
      }

      phraseContainer.firstElementChild.appendChild(character);
    })
  }

  checkLetter() {

  }

  showMatchedLetter() {

  }
}