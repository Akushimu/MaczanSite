function slider() {
	let slideNumber=Math.floor(Math.random()*5)+1;	
	slideNumber++;
	if(slideNumber==6) slideNumber=1;
	$('#slider').html('<img src="images/slajd' + slideNumber + '.jpg" id="zslid">');
	$("#slider").fadeIn(500);
	setTimeout(slider,5000);
	setTimeout(hide,4500);
	}
	function hide() {
		$("#slider").fadeOut(500);
}