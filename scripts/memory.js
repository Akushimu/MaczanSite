var cards =["alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg","alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg","opio.jpg","kaktus.jpg","opio.jpg","kaktus.jpg"];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(cards);

/*
	$( "#c0" ).click(function()	{revealCard(0);});
*/

for (let i=0;i<16;i++)
{
$( "#c"+i ).on( "click", function() {
  revealCard(i);
 });
}

var oneVisible = false;
var roundsCounter = 0;
var firstCard;
var lock = false;
var pairsLeft = 8;

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
		if(roundsCounter<=25)
		{
			$('.board').html('<h2>Wygrałeś w '+roundsCounter+` rund, jesteś prawdziwym ćpunem!</h2>
			<br> <img src="images/blant.png" alt="Blant"> <br>
			<h2>Blant jest z Ciebie dumny</h2>`
			)
		}
		else
		{
			$('.board').html('<h2>Wygrałeś w '+roundsCounter+' rund, wciąż masz wiele do poprawy</h2>')
		}
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
