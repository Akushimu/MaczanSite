function checkInput()
{
  var field = $('#pole');
  var result = $('#wynik');
  var number = field.val();

  if(number>0) result.html("Podana number jest dodatnia");
  else if(number<0) result.html("Podana number jest ujemna");
  else if(number==0) result.html("Podana number to zero");
  else if(number=="JN") result.html('<img src="images/rip.png" title="Jedna z ofiar śmiertelnych"><p>Jedna z ofiar śmiertelnych</p><img src="images/znicz.gif" title="Znicz">');
  else if(number=="Ching Cheng Hanji") document.write('<video width="1920" height="1080" autoplay loop><source src="images/tom.mp4" type="video/mp4"></video>');
  else if(number=="JD") result.html("Oj tak tak byczq +1");	  
  else if(number=="Dziady leczą") result.html('<img src="images/dziady.jpg" width="300">');	  
  else if(number=="Koty") result.html('<video width="640" height="368" autoplay controls loop><source src="images/koty.mp4" type="video/mp4"></video>');
  else result.html("Błąd");
}