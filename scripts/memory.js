let cards =["alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg","alkohol.jpg","grzyby.jpg","lsd.jpg","tabsy.jpg","ziolo.jpg","maczan.jpg","opio.jpg","kaktus.jpg","opio.jpg","kaktus.jpg"];

function shuffle(a) {
    let j, x, i;
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

let oneVisible = false;
let roundsCounter = 0;
let firstCard;
let lock = false;
let pairsLeft = 8;

function revealCard(nr)
{
	let opacityValue = $('#c'+nr).css('opacity');
	
	if(opacityValue != 0 && lock == false && firstCard != nr)
	{
		lock = true;
		let obraz = "url(images/"+cards[nr]+")";
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
		if(roundsCounter<=20)
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
	num1 = $('#c'+nr1);
	num2 = $('#c'+nr2);

	num1.css('background-image','url(images/znakzapytania.png)');
	num1.addClass('card');
	num1.removeClass('cardA');
		
	num2.css('background-image','url(images/znakzapytania.png)');
	num2.addClass('card');
	num2.removeClass('cardA');
		
	lock = false;
}
