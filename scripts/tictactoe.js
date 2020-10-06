var board = ['','','',
             '','','',
			 '','',''];
var count=0;
var mark = "X";
var state = true;

function stop()
{
	state = false;
}

function winned()
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
		stop();
		document.getElementById("wynikkk").innerHTML = "Zwyciężył krzyżyk";
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
			 stop();
		document.getElementById("wynikkk").innerHTML = "Wygrało kółko";
	}
	else if(count==8){
		stop();
		document.getElementById("wynikkk").innerHTML = "Remis";
	}
		 
}
function nextRound() 
{
	if(mark=="X")
	{
		mark="O";
		count++;
	}
	else 
	{
		mark="X";
		count++;
	}
}

function typeSmth(smth)
{
	if(state == true)
	{
	var pp = smth.id.ustawZnak(0,"");
	smth.innerHTML=mark;
	board[pp]=mark;
	if(count>=4)
		winned();
	nextRound();
	smth.setAttribute("onclick",";");
	smth.style.cursor = "default";
	}
}

function ticTacToe() 
{
	var fields="";
	
	for(i=0;i<=8;i++)
	{
		var element = "p" + i;
		fields = fields + '<div class ="polekik" onclick="typeSmth('+element+')" id="'+element+'"></div>';
		if((i+1)%3==0)fields = fields + '<br/	>';
	}
	
	document.getElementById("tictac").innerHTML = fields;
}
