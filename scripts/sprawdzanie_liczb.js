function sprawdz()
{
  var liczba = document.getElementById("pole").value;
  if(liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
  else if(liczba<0) document.getElementById("wynik").innerHTML="ujemna";
  else if(liczba==0) document.getElementById("wynik").innerHTML="zero";
  else if(liczba=="JN") {
	  document.getElementById("wynik").innerHTML="<img src=\"images/rip.png\" title=\"Jedna z ofiar śmiertelnych\"><p></p><img src=\"images/znicz.gif\" title=\"Znicz\">";	  

}
   else if(liczba=="Chin Cheng Hanji") {
	   document.write("<video width=\"1920\" height=\"1080\" autoplay controls loop><source src=\"images/tom.mp4\" type=\"video/mp4\"></video>");
  }
  else document.getElementById("wynik").innerHTML="Błąd";


}