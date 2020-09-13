function slajdy()
{
numer_slajdu++;
if(numer_slajdu==6)
	numer_slajdu=1;
document.getElementById("slider").innerHTML="<img src=\"images/slajd" + numer_slajdu + ".jpg\"/>";
$("#slider").fadeIn(500);
setTimeout("slajdy()",5000);
setTimeout("schowaj()",4500);
}
function schowaj() {
	$("#slider").fadeOut(500);
}