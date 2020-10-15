class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			'Posting is toasting',
			'Your limitation is your imagingation',
			'Go deep',
			'Dream it',
			'One step at a time',
		];
		this.activePhrase = this.getRandomPhrase();
	}

	startGame() {
		overlay.style.display = 'none';
	}

	getRandomPhrase() {
		let aRandomPhrase = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[aRandomPhrase];
	}

	getActivePhrase() {
		return this.activePhrase;
	}

	handleInteraction(e) {
		// if(e.type=="Mouse")
		let key = this.getKeyStroke(e);
		let hasLetter = phrase.phraseCheckLetter(key); // checks the value and will show if available

		if (hasLetter) {
			phrase.showMatchedLetter(key);
			this.changeKeyToCorrectSelected(key);
		} else {
			this.changeToIncorrectSelected(key);
			this.removeLife();
		}
	}

	// Handles returning the key from either a mouse click or keyboard action
	getKeyStroke(e) {
		let eventType = e.type;
		if (eventType == 'click') {
			return e.target.innerText;
		} else if (eventType == 'keyup') {
			return e.key;
		} else {
			return null;
		}
	}

	// Now disable the played keyboard item
	changeKeyToCorrectSelected(key) {
		for (let keyItem of [...allKeys]) {
			if (keyItem.innerText == key) {
				return keyItem.classList.add('chosen');
			}
		}
	}

	// change key to correct selection
	changeToIncorrectSelected(key) {
		for (let keyItem of [...allKeys]) {
			if (keyItem.innerText == key) {
				return keyItem.classList.add('wrong');
			}
		}
	}

	removeLife() {
		let livesImages = scoreboard.getElementsByTagName('img');
		if (this.missed == 4) {
			this.gameOver();
		} else {
			livesImages[this.missed].src = 'images/lostHeart.png';
			this.missed++;
		}
	}

	checkForWin() {
		for (let item of [...phraseBoard]) {
			if (item.classList.value.includes('hide')) {
				return false;
			}
		}
		return true;
	}

	gameOver() {
		let gameResult = this.checkForWin();
		if (gameResult) {
			overlay.style.display = '';
			overlay.classList.add('win');
			gameOverMessage.innerText = 'You won :)';
		} else {
			overlay.style.display = '';
			overlay.classList.add('lose');
			gameOverMessage.innerText = 'You lost :(';
		}

		gameOverMessage.style.visibility = 'visible';
		this.resetGame();
	}

	// Reset after complete added to each of the paths
	resetGame() {
		// Reset Scoreboard
		let livesImages = scoreboard.getElementsByTagName('img');
		for (let img of livesImages) {
			img.src = 'images/liveHeart.png';
		}

		// Reset the keyboard
		for (let keyItem of [...allKeys]) {
			if (keyItem.classList.value.includes('chosen')) {
				keyItem.classList.remove('chosen');
			} else if (keyItem.classList.value.includes('wrong')) {
				keyItem.classList.remove('wrong');
			}
		}
	}
}
