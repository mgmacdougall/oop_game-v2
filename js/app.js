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

// Event listener for the start button
startBtn.addEventListener('click', (e) => {
	game = new Game();
	game.startGame();
	phrase = game.getActivePhrase();

	phrase = new Phrase(phrase);
	phrase.addPhraseToDisplay();
});

// for mouse clicks
keyboard.addEventListener('click', (e) => {
	game.handleInteraction(e);
});

// Listens for keyup events and runs the handle action
document.addEventListener('keyup', (e) => {
	game.handleInteraction(e);
});
