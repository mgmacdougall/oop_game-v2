const phraseContainer = document.querySelector('#phrase ul');

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	// This is the phrase to display
	addPhraseToDisplay = () => {
		const splitPhrase = this.phrase.split('');
		splitPhrase.forEach((char) => {
			const letterContainer = document.createElement('li');
			if (char === ' ') {
				letterContainer.className = 'space';
				letterContainer.innerText = ' ';
			} else {
				letterContainer.className += 'hide';
				letterContainer.className += ' letter';
				letterContainer.className += ` ${char}`;
				letterContainer.innerText = char;
			}
			phraseContainer.appendChild(letterContainer);
		});
	};

	phraseCheckLetter(letter) {
		let letters = phraseContainer.getElementsByClassName(`${letter}`);
		if (letters.length > 0) {
			return true;
		}
		return false;
	}

	showMatchedLetter(letter) {
		let lettersInBoard = phraseContainer.getElementsByClassName(`${letter}`);
		for (let i = 0; i < lettersInBoard.length; i++) {
			lettersInBoard[i].classList.remove('hide');
			lettersInBoard[i].classList.add('show');
		}
	}
}
