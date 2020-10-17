let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = $('#guesses');
let lastResult = $('#lastResult');
let lowOrHi = $('#lowOrHi');

let guessSubmit = $('#guessSubmit');
let guessField = $('#guessField');

let guessCount = 1;
let resetButton = document.createElement('button');

guessSubmit.click(function(){
	checkGuess();
});

function checkGuess()
{
	let userGuess = Number(guessField.val())
	if (guessCount === 1) {
		guesses.text('Poprzednie próby: ');
	}		
	guesses.append(userGuess + ' ');
	
	if(userGuess === randomNumber) {
		lastResult.text('Gratulacje, wygrałeś!');
		lastResult.css('background-color','green');
		lowOrHi.text('');
		setGameOver();
		} 
	else if (guessCount === 10) {
		lastResult.text('Koniec gry');
		lowOrHi.text('');
		setGameOver();
	} 
	else {
		lastResult.text('Błędna liczba');
		lastResult.css('background-color','purple');
		if (userGuess < randomNumber) {
			lowOrHi.text('Liczba jest za mała');
		}
		else if (userGuess > randomNumber) {
			lowOrHi.text('Liczba jest za duża');
		}
	}
	guessCount++;
	guessField.val('');
	guessField.focus();
}

function setGameOver() {
	guessField.prop('disabled',true);
	guessSubmit.prop('disabled',true);
	resetButton.textContent = 'Zacznij nową grę';
	lowOrHi.html(resetButton);
	$(resetButton).on( "click", function() {
    resetGame();
    });
	
}

function resetGame() {
	guessCount = 1;
	
	guessField.prop('disabled',false);
	guessSubmit.prop('disabled',false);
	
	lowOrHi.html('');
	lastResult.text('');
	guesses.text('');
	guessField.focus();
	guessField.val('');
	
	randomNumber = Math.floor(Math.random() * 100) + 1;
}