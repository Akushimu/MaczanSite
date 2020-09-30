var cards =["alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg","alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg"];


/*	$( "#c0" ).click(function() {
  revealCard(0);});

 $( "#c0" ).on( "click", function() {
  revealCard(0);
 });

for (i=0;i<11;i++)
{
document.getElementById('c'+i).addEventListener("click", function(){revealCard(i);});
}
*/

$( "#c0" ).on( "click", function() {
  revealCard(0);
});

$( "#c1" ).on( "click", function() {
  revealCard(1);
});

$( "#c2" ).on( "click", function() {
  revealCard(2);
});

$( "#c3" ).on( "click", function() {
  revealCard(3);
});

$( "#c4" ).on( "click", function() {
  revealCard(4);
});

$( "#c5" ).on( "click", function() {
  revealCard(5);
});

$( "#c6" ).on( "click", function() {
  revealCard(6);
});

$( "#c7" ).on( "click", function() {
  revealCard(7);
});

$( "#c8" ).on( "click", function() {
  revealCard(8);
});

$( "#c9" ).on( "click", function() {
  revealCard(9);
});

$( "#c10" ).on( "click", function() {
  revealCard(10);
});

$( "#c11" ).on( "click", function() {
  revealCard(11);
});

var oneVisible = false;
var roundsCounter = 0;
var firstCard;
var lock = false;
var pairsLeft = 6;

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	if(opacityValue != 0 && lock == false && firstCard != nr)
	{
		lock = true;
		var obraz = "url(images/"+cards[nr]+")";
		$('#c'+nr).css('background-image',obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');
		
		if(oneVisible == false)
		{
			oneVisible = true;
			firstCard = nr;
			lock = false;
		}
		else
		{
			if(cards[firstCard]==cards[nr])
			{
				setTimeout(function() {hideCards(firstCard, nr)}, 750);
			}
			else
			{
				setTimeout(function() {restoreCards(firstCard, nr)}, 750);
			}
			
			roundsCounter++;
			$('.rounds').html('Ilość rund: '+roundsCounter);
			oneVisible = false;
		}
	
	}
	
}

function hideCards(nr1,nr2)
{
	$('#c'+nr1).css('opacity','0');
	$('#c'+nr2).css('opacity','0');
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h1>Wygrałeś w '+roundsCounter+' rund</h1>')
	}
	
	lock = false;
}

function restoreCards(nr1,nr2)
{
		$('#c'+nr1).css('background-image','url(images/znakzapytania.png)');
		$('#c'+nr1).addClass('card');
		$('#c'+nr1).removeClass('cardA');
		
		$('#c'+nr2).css('background-image','url(images/znakzapytania.png)');
		$('#c'+nr2).addClass('card');
		$('#c'+nr2).removeClass('cardA');
		
		lock = false;
}
