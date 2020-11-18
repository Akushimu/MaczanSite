let board = [];
for(let i=0;i<=8;i++) board.push(i); 
let count = 0;
let mark = "X";
let result = $("#tttResult");
let gameState = true;
let click = new Audio("sounds/click.wav");

function ticTacToe() {
	let fields="";
	for(i=0;i<=8;i++) {
		let elementId = "p" + i;
		fields += '<div class = "polekik" onclick= "typeSmth('+i+')" id= "'+elementId+'"></div>';
		if((i+1)%3==0)fields += '<br>';
	}
	$('#tictac').html(fields);
}


function stop() {
	for(let i=0;i<=8;i++) {
		let field = $('#p'+i);
		clearAttr(field);
	}
	gameState = false;
}

const whoWon = () => mark == 'O' ? 'kółka' : 'krzyżyka';

function checkWin() {
	if (board[0] == board[1] && board[1] == board[2] ||
		board[3] == board[4] && board[4] == board[5] ||
		board[6] == board[7] && board[7] == board[8] ||
		board[0] == board[4] && board[4] == board[8] ||
		board[2] == board[4] && board[4] == board[6] ||
		board[0] == board[3] && board[3] == board[6] ||
		board[1] == board[4] && board[4] == board[7] ||
		board[2] == board[5] && board[5] == board[8]) {
		result.html("Wygrana " + whoWon());
		stop();
		}
	else if(count==9) {
		result.html("Remis");
		stop();
	}
}

function nextRound() {
	mark == 'X' ? mark = 'O' : mark = 'X';
}

function typeSmth(num) {
	click.play();
	let field = $('#p'+num);
	field.html(mark);
	board[num]=mark;
	clearAttr(field);
	count++;
	if(count >= 5) checkWin();
	if(gameState) {
		nextRound();
		botTurn();
	}
}

function botTurn() {
	let ran = Math.floor(Math.random()*9);
	while(isNaN(board[ran])) {
		ran = Math.floor(Math.random()*9);
	}
	let field = $('#p' + ran);
	field.html(mark);
	board[ran]=mark;
	clearAttr(field);
	count++;
	if(count >= 6) checkWin();
	if(gameState) nextRound();
}

function clearAttr(field) {
	field.attr("onclick",";");
	field.css("cursor","default");
}