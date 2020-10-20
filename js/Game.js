class Game {
	phraseClass;

	constructor() {
		this.missed = 0;
		this.phrases = ['Posting is toasting', 'Keep Dry', 'Go deep', 'Dream it', 'One step at a time'];
		this.activePhrase = null;
	}

	startGame() {
		overlay.style.display = 'none';
		let currentPhrase = this.getActivePhrase();
		this.phraseClass = new Phrase(currentPhrase);
		this.phraseClass.addPhraseToDisplay();
	}

	getRandomPhrase() {
		let aRandomPhrase = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[aRandomPhrase];
	}

	getActivePhrase() {
		this.activePhrase = this.getRandomPhrase();
		return this.activePhrase;
	}

	handleInteraction(key) {
		let hasLetter = this.phraseClass.checkLetter(key); // checks the value and will show if available

		if (hasLetter) {
			this.phraseClass.showMatchedLetter(key);
			this.changeKeyToCorrectSelected(key);

			// need here to check that there might be a win here
			if (this.checkForWin()) {
				this.gameOver();
			}
		} else {
			this.changeToIncorrectSelected(key);
			this.removeLife();
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

	// remove a life if the user makes incorrect guess
	removeLife() {
		let livesImages = scoreboard.getElementsByTagName('img');
		if (this.missed == 4) {
			this.gameOver();
		} else {
			livesImages[this.missed].src = 'images/lostHeart.png';
			this.missed++;
		}
	}

	// checks for a game win
	checkForWin() {
		for (let item of [...phraseBoard]) {
			if (item.classList.value.includes('hide')) {
				return false;
			}
		}
		return true;
	}

	// checks if the game is over
	gameOver() {
		let gameResult = this.checkForWin();
		if (gameResult) {
			overlay.style.display = '';
			overlay.classList.add('win');
			gameOverMessage.innerText = 'You won :)';
			this.resetGame();
		} else {
			overlay.style.display = '';
			overlay.classList.add('lose');
			gameOverMessage.innerText = 'You lost :(';
			this.resetGame();
		}
		gameOverMessage.style.visibility = 'visible';
		this.displayAnimation();
	}

	// Now add a div to the below the btn__reset and then another div
	// with the aninmation to scroll across the page
	displayAnimation() {
		let mainElement = document.getElementById('winlose');
		if (!mainElement) {
			let animationContainer = document.createElement('p');
			animationContainer.id = 'winlose';
			animationContainer.innerText = 'Press Start Game to  play again';
			overlay.appendChild(animationContainer);
		}
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

		// Reset game board resets all the showing class elements to hide
		let shownLetters = phraseContainer.getElementsByClassName('letter');
		for (let letterItem of [...shownLetters]) {
			letterItem.remove();
		}
	}
}
