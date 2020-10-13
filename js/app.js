// Globals for UI Elements
const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');

// Dependant Globals for Game and Phrase
let game;
let phrase;

// Event listener for the start button
startBtn.addEventListener('click', (e) => {
	overlay.style.display = 'none';
	game = new Game();
	phrase = new Phrase('how are you');
	phrase.addPhraseToDisplay();
});

// for mouse clicks
keyboard.addEventListener('click', (e) => {
	handleInteraction(e.target.innerText);
});

// Listens for keyup events and runs the handle action
document.addEventListener('keyup', (e) => {
	let charValue = getKeyStroke(e);
	if (charValue) {
		handleInteraction(charValue);
	}
});

// function gets the key value pressed
const getKeyStroke = (e) => e.key;

// Main application functionality
const handleInteraction = (key) => {
	let hasLetter = phrase.phraseCheckLetter(key); // checks the value and will show if available
	if (hasLetter) {
		phrase.showMatchedLetter(key);
		// also disable the button?
	} else {
		// this is where the loose life occurs
	}
};
