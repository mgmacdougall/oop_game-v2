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
			letterContainer.className = '';
			if (char === ' ') {
				letterContainer.className = 'space';
				letterContainer.innerText = ' ';
			} else {
				letterContainer.className += ' hide';
				letterContainer.className += ' letter';
				letterContainer.className += ` ${char}`;
				letterContainer.innerText = char;
			}
			phraseContainer.appendChild(letterContainer);
		});
	};
}
