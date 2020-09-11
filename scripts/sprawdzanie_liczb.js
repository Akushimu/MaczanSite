function sprawdz()
{
  var liczba = document.getElementById("pole").value;
  if(liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
  else if(liczba<0) document.getElementById("wynik").innerHTML="ujemna";
  else if(liczba==0) document.getElementById("wynik").innerHTML="zero";
  else if(liczba=="JN") {
	  document.getElementById("dol").innerHTML="<img src=\"images/rip.png\" title=\"Jedna z ofiar śmiertelnych\"><p></p><img src=\"images/znicz.gif\" title=\"Znicz\">";	  

}
   else if(liczba=="Chin Cheng Hanji") {
	   document.getElementById("dol").innerHTML="<video width=\"400\" height=\"224\" autoplay controls loop><source src=\"images/tom.mp4\" type=\"video/mp4\"></video>";
  }
  else document.getElementById("wynik").innerHTML="Błąd";


}