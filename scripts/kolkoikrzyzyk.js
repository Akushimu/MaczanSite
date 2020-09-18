function wpisz(gdzie,co)
{
	document.getElementById(gdzie).innerHTML=co;
}

function tictactoe() 
{
	var pola="";
	
	for(i=0;i<=8;i++)
	{
		var element = "p" + i;
		pola = pola + '<div class ="polekik" onclick="wpisz(`p0`,`x`)" id="'+element+'"></div>';
		if((i+1)%3==0)pola = pola + '<br>';
	}
	
	document.getElementById("tictac").innerHTML = pola;
}
