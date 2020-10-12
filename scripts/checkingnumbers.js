function checkInput()
{
  var field = $('#pole');
  var result = $('#wynik');
  var input = field.val();

  if(input>0 && input!=2137) result.html("Podana liczba jest dodatnia");
  else if(input<0 ) result.html("Podana liczba jest ujemna");
  else if(input==0) result.html("Podana liczba to zero");
  else if(input=="JN") result.html('<img src="images/rip.png" title="Jedna z ofiar śmiertelnych"><p>Jedna z ofiar śmiertelnych</p><img src="images/znicz.gif" title="Znicz">');
  else if(input=="Ching Cheng Hanji") document.write('<video width="1920" height="1080" autoplay loop><source src="images/tom.mp4" type="video/mp4"></video>');
  else if(input=="JD") result.html("Oj tak tak byczq +1");	  
  else if(input=="Dziady leczą") result.html('<img src="images/dziady.jpg" width="300">');	  
  else if(input=="Koty") result.html('<video width="640" height="368" autoplay controls loop><source src="images/koty.mp4" type="video/mp4"></video>');
  else if(input==2137) result.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Ec_kweeQM2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'); 
  else result.html("Błąd");
}

