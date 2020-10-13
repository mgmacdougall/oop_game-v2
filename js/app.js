const startBtn = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');

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
keyboard.addEventListener('click', (e) => {});

// for keyboard input events
document.addEventListener('keyup', (e) => {
	let charValue = getKeyStroke(e);
	if (charValue) {
		console.log(`The phrase is - ${phrase.phrase}`);
	}
});

// function to get the keycode of the item pressed with keyboard
// accepts the event + whether the event has fired
const getKeyStroke = (e) => e.key;
