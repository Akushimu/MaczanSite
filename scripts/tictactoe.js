let board = [];
for(let i=0;i<=8;i++) board.push(i); 
let count = 0;
let mark = "X";
let result = $("#tttResult");

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
		if(field.attr('onclick') != ';') field.attr('onclick',';');
		if(field.css('cursor') != 'default') field.css('cursor','default');
	}
}

const whoWon = () => mark == 'O' ? 'krzyżyka' : 'kółka';

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
	if(mark=="X") {
		result.html("Tura kółka");
		mark="O";
		count++;
	}
	else {
		result.html("Tura krzyżyka");
		mark="X";
		count++;
	}
}

function typeSmth(num) {
	let field = $('#p'+num);
	field.html(mark);
	board[num]=mark;
	if(count < 9) nextRound();
	if(count >= 5) checkWin();
	field.attr("onclick",";");
	field.css("cursor","default");
}