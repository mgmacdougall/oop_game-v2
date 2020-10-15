// Globals for UI Elements
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const keyboard = document.getElementById('qwerty');
const allKeys = keyboard.getElementsByClassName('key');

const scoreboard = document.getElementById('scoreboard');
const phraseBoard = document.getElementsByClassName('letter');

// Dependant Globals for Game and Phrase
let game = new Game();
let phrase;

// Creates an event listenter for each of the values
function bindKeyboardKeys() {
	for (let i = 0; i < allKeys.length; i++) {
		allKeys[i].addEventListener('click', (e) => {
			game.handleInteraction(e);
		});
	}
}

// Event listener for the start button
startBtn.addEventListener('click', (e) => {
	game = new Game();
	this.bindKeyboardKeys();
	game.startGame();
	phrase = game.getActivePhrase();

	phrase = new Phrase(phrase);
	phrase.addPhraseToDisplay();
});

// Listens for keyup events and runs the handle action
document.addEventListener('keyup', (e) => {
	e.stopPropagation();
	game.handleInteraction(e);
});
