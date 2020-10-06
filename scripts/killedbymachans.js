var victims=Math.floor(Math.random()*87465)+1;

function killedBySyntheticCannabinoids()
{
document.getElementById("maczanVictims").innerHTML = "("+victims+")";
victims=victims+1;
setTimeout("killedBySyntheticCannabinoids()",5000);
 

}