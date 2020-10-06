var slideNumber=Math.floor(Math.random()*5)+1;

function slider()
{
slideNumber++;
if(slideNumber==6)
	slideNumber=1;
document.getElementById("slider").innerHTML="<img src=\"images/slajd" + slideNumber + ".jpg\" id=\"zslid\"/>";
$("#slider").fadeIn(500);
setTimeout("slider()",5000);
setTimeout("hide()",4500);
}
function hide() {
	$("#slider").fadeOut(500);
}