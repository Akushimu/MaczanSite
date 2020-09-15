function sprawdz_liczbe()
{
  var liczba = document.getElementById("pole").value;
  if(liczba>0) document.getElementById("wynik").innerHTML="Podana liczba jest dodatnia";
  else if(liczba<0) document.getElementById("wynik").innerHTML="Podana liczba jest ujemna";
  else if(liczba==0) document.getElementById("wynik").innerHTML="Podana liczba to zero";
  else if(liczba=="JN") {
	  document.getElementById("wynik").innerHTML=`<img src="images/rip.png" title="Jedna z ofiar śmiertelnych"><p>Jedna z ofiar śmiertelnych</p><img src="images/znicz.gif" title="Znicz">`;	  

}
   else if(liczba=="Chin Cheng Hanji") {
	   document.write(`<video width="1920" height="1080" autoplay controls loop><source src="images/tom.mp4" type="video/mp4"></video>`);
  }
  else if(liczba=="JD") {
	  document.getElementById("wynik").innerHTML="Oj tak tak byczq +1";	  

}
  else document.getElementById("wynik").innerHTML="Błąd";


}