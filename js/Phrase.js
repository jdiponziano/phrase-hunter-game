class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

/**
 * Creates <li> for each letter and appends it to the page
 */
  addPhraseToDisplay() {
    const phraseContainer = document.getElementById('phrase');
    const characters = this.phrase.split("");
    const list = '';
    characters.forEach(function(char) {
      console.log(char);
      if (char.match(/^[A-Za-z]+$/)) {
        list += '<li class="hide letter ' + char + '">' + char + '</li>';
      } else {
        list += '<li class="space">' + char + '</li>';
      }
    })

    phraseContainer.firstChild.appendChild(list);
  }

  checkLetter() {

  }

  showMatchedLetter() {

  }
}