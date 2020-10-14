let board = [];
for(let i=0;i<=8;i++) board[i]=i;	 
let count = 0;
let mark = "X";

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
		$('#p'+i).attr("onclick",";");
		$('#p'+i).css("cursor","default");
	}
}

function checkIfWon() {
	let winner;
	if(mark == 'O') winner = 'krzyżyk';
	else if(mark == 'X') winner = 'kółko';

	if (board[0] == board[1] && board[1] == board[2] ||
		board[3] == board[4] && board[4] == board[5] ||
		board[6] == board[7] && board[7] == board[8] ||
		board[0] == board[4] && board[4] == board[8] ||
		board[2] == board[4] && board[4] == board[6] ||
		board[0] == board[3] && board[3] == board[6] ||
		board[1] == board[4] && board[4] == board[7] ||
		board[2] == board[5] && board[5] == board[8]) {
		$("#tttResult").html("Zwyciężył " + winner);
		stop();
		}
	else if(count==9) {
		$("#tttResult").html("Remis");
		stop();
	}
}

function nextRound() {
	if(mark=="X") {
		$("#tttResult").html("Tura kółka");
		mark="O";
		count++;
	}
	else {
		$("#tttResult").html("Tura krzyżyka");
		mark="X";
		count++;
	}
}

function typeSmth(smth) {
	$('#p'+smth).html(mark);
	board[smth]=mark;
	if(count < 9) nextRound();
	if(count >= 5) checkIfWon();
	$('#p'+smth).attr("onclick",";");
	$('#p'+smth).css("cursor","default");
}