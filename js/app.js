// Globals for UI Elements
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const keyboard = document.getElementById('qwerty');
const allKeys = keyboard.getElementsByClassName('key');

const scoreboard = document.getElementById('scoreboard');
const phraseBoard = document.getElementsByClassName('letter');

// Dependant Globals for Game and Phrase
let game;

// Binds the click event for the mouse once the DOM is loaded
document.addEventListener('DOMContentLoaded', bindKeyboardKeys());

// Creates an event listenter for each of the values
function bindKeyboardKeys() {
	for (let i = 0; i < allKeys.length; i++) {
		allKeys[i].addEventListener('click', (e) => {
			const keyRegex = /^\w$/g; // Check for valid key
			if (keyRegex.test(e.target.innerText)) {
				game.handleInteraction(e.target.innerText);
			}
		});
	}
}

// Event listener for the start button
startBtn.addEventListener('click', (e) => {
	game = new Game();
	game.startGame();
});

// Listens for keyup events and runs the handle action
document.addEventListener('keyup', (e) => {
	if (overlay.style.display == 'none') {
		if (e.keycode < 65 || e.keycode > 90) {
			return;
		}
		game.handleInteraction(e.key);
	}
});
