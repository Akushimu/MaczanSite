let slideId = $('#slider');
function slider() {
	let slideNumber=Math.floor(Math.random()*5)+1;	
	slideNumber++;
	if(slideNumber==6) slideNumber=1;
	slideId.html('<img src="images/slajd' + slideNumber + '.jpg" id="zslid">');
	slideId.fadeIn(500);
	setTimeout(slider,5000);
	setTimeout(hide,4500);
}

function hide() {
	slideId.fadeOut(500);
}