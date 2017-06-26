// ask a person to play psychic game
var confirmPlay = confirm ("Would you like to play Psychic Game?");

//create an array with all avaiable letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//record win, loss
var win = 0;
var loss = 0;


//when user press a key
document.onkeyup = function(event) {
	var userGuess = event.key;

// computerGuess random chose a letter in the array options
	var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
	
}