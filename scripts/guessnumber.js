var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = $('#guesses');
var lastResult = $('#lastResult');
var lowOrHi = $('#lowOrHi');

var guessSubmit = $('#guessSubmit');
var guessField = $('#guessField');

var guessCount = 1;
var resetButton = document.createElement('button');

guessSubmit.click(function(){
	checkGuess();
});

function checkGuess()
{
	var userGuess = Number(guessField.val())
	if (guessCount === 1) {
		guesses.text('Poprzednie próby: ');
	}		
	guesses.append(userGuess + ' ');
	
	if(userGuess === randomNumber) {
		lastResult.text('Gratulacje, wygrałeś!');
		lastResult.css('background-color','pink');
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