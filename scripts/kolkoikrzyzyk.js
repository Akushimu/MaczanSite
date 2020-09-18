function tictactoe() 
{
	var pola="";
	
	for(i=0;i<=8;i++)
	{
		var elementk = "pk" + i;
		pola = pola + `<div class ="polekik" onclick="" id="`+elementk+`"></div>`;
		if((i+1)%3==0)pola = pola + '<div style="clear:both;"</div>'
	}
	
	document.getElementById("tictac").innerHTML = pola;
}