let board = ['','','',
             '','','',
			 '','',''];
let count=0;
let mark = "X";

function ticTacToe() 
{
	let fields="";
	
	for(i=0;i<=8;i++)
	{
		let elementId = "p" + i;
		fields += '<div class = "polekik" onclick= "typeSmth('+i+')" id= "'+elementId+'"></div>';
		if((i+1)%3==0)fields += '<br>';
	}
	
	$('#tictac').html(fields);
}


function stop()
{
	for(let i=0;i<=8;i++) {
		$('#p'+i).attr("onclick",";");
		$('#p'+i).css("cursor","default");
	}
}

function checkIfWon()
{
	if(board[0]=="X" && board[1]=="X" && board[2]=="X"
	|| board[3]=="X" && board[4]=="X" && board[5]=="X"
	|| board[6]=="X" && board[7]=="X" && board[8]=="X"
	|| board[0]=="X" && board[4]=="X" && board[8]=="X"
	|| board[2]=="X" && board[4]=="X" && board[6]=="X"
	|| board[0]=="X" && board[3]=="X" && board[6]=="X"
	|| board[1]=="X" && board[4]=="X" && board[7]=="X"
	|| board[2]=="X" && board[5]=="X" && board[8]=="X") 
	{
		$("#wynikkk").html("Zwyciężył krzyżyk");
		stop();
	}
	else if(board[0]=="O" && board[1]=="O" && board[2]=="O"
		 || board[3]=="O" && board[4]=="O" && board[5]=="O"
		 || board[6]=="O" && board[7]=="O" && board[8]=="O"
		 || board[0]=="O" && board[4]=="O" && board[8]=="O"
		 || board[2]=="O" && board[4]=="O" && board[6]=="O"
		 || board[0]=="O" && board[3]=="O" && board[6]=="O"
		 || board[1]=="O" && board[4]=="O" && board[7]=="O"
		 || board[2]=="O" && board[5]=="O" && board[8]=="O")
		{
			for(let i=0;i<=8;i++) {
				$('#p'+i).attr("onclick",";");
				$('#p'+i).css("cursor","default");
	
			}
			 $("#wynikkk").html("Wygrało kółko");
			 stop();
		}
	else if(count==9){
		$("#wynikkk").html("Remis");
		stop();
	}
		 
}
function nextRound() 
{
	if(mark=="X")
	{
		$("#wynikkk").html("Tura kółka");
		mark="O";
		count++;
	}
	else 
	{
		$("#wynikkk").html("Tura krzyżyka");
		mark="X";
		count++;
	}
}

function typeSmth(smth) {
	$('#p'+smth).html(mark);
	board[smth]=mark;
	nextRound();
	if(count >= 5) checkIfWon();
	$('#p'+smth).attr("onclick",";");
	$('#p'+smth).css("cursor","default");
}