function checkInput()
{
  var liczba = document.getElementById("pole").value;
  if(liczba>0) $('#wynik').html("Podana liczba jest dodatnia");
  else if(liczba<0) $('#wynik').html("Podana liczba jest ujemna");
  else if(liczba==0) $('#wynik').html("Podana liczba to zero");
  else if(liczba=="JN") 
  {	  
	  $('#wynik').html('<img src="images/rip.png" title="Jedna z ofiar śmiertelnych"><p>Jedna z ofiar śmiertelnych</p><img src="images/znicz.gif" title="Znicz">');
  }
   else if(liczba=="Ching Cheng Hanji") {
	   document.write('<video width="1920" height="1080" autoplay controls loop><source src="images/tom.mp4" type="video/mp4"></video>');
  }
  else if(liczba=="JD") {
	  $('#wynik').html("Oj tak tak byczq +1");	  

}

  else if(liczba=="Dziady leczą") {
	  $('#wynik').html('<img src="images/dziady.jpg" alt="">');	  

}
else if(liczba=="Koty") {
	  $('#wynik').html('<video width="640" height="368" autoplay controls loop><source src="images/koty.mp4" type="video/mp4"></video>');	  

}

  else $('#wynik').html("Błąd");

}