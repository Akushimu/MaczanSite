var plansza = ['','','',
               '','','',
			   '','',''];
var count=0;
var znak = "X";
var stan = true;

function stop()
{
	stan = false;
}

function wygrana()
{
	if(plansza[0]=="X" && plansza[1]=="X" && plansza[2]=="X"
	|| plansza[3]=="X" && plansza[4]=="X" && plansza[5]=="X"
	|| plansza[6]=="X" && plansza[7]=="X" && plansza[8]=="X"
	|| plansza[0]=="X" && plansza[4]=="X" && plansza[8]=="X"
	|| plansza[2]=="X" && plansza[4]=="X" && plansza[6]=="X"
	|| plansza[0]=="X" && plansza[3]=="X" && plansza[6]=="X"
	|| plansza[1]=="X" && plansza[4]=="X" && plansza[7]=="X"
	|| plansza[2]=="X" && plansza[5]=="X" && plansza[8]=="X") 
	{
		stop();
		document.getElementById("wynikkk").innerHTML = "Zwyciężył krzyżyk";
	}
	else if(plansza[0]=="O" && plansza[1]=="O" && plansza[2]=="O"
		 || plansza[3]=="O" && plansza[4]=="O" && plansza[5]=="O"
		 || plansza[6]=="O" && plansza[7]=="O" && plansza[8]=="O"
		 || plansza[0]=="O" && plansza[4]=="O" && plansza[8]=="O"
		 || plansza[2]=="O" && plansza[4]=="O" && plansza[6]=="O"
		 || plansza[0]=="O" && plansza[3]=="O" && plansza[6]=="O"
		 || plansza[1]=="O" && plansza[4]=="O" && plansza[7]=="O"
		 || plansza[2]=="O" && plansza[5]=="O" && plansza[8]=="O")
		 {
			 stop();
		document.getElementById("wynikkk").innerHTML = "Wygrało kółko";
	}
	else if(count==8){
		stop();
		document.getElementById("wynikkk").innerHTML = "Remis";
	}
		 
}
function nextTura() 
{
	if(znak=="X")
	{
		znak="O";
		count++;
	}
	else 
	{
		znak="X";
		count++;
	}
}
function wpisz(gdzie)
{
	if(stan == true)
	{
	var pp = gdzie.id.ustawZnak(0,"");
	gdzie.innerHTML=znak;
	plansza[pp]=znak;
	if(count>=4)
		wygrana();
	nextTura();
	gdzie.setAttribute("onclick",";");
	gdzie.style.cursor = "default";
	}
}

function tictactoe() 
{
	var pola="";
	
	for(i=0;i<=8;i++)
	{
		var element = "p" + i;
		pola = pola + '<div class ="polekik" onclick="wpisz('+element+')" id="'+element+'"></div>';
		if((i+1)%3==0)pola = pola + '<br/	>';
	}
	
	document.getElementById("tictac").innerHTML = pola;
}
