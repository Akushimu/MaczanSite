function killedBySyntheticCannabinoids() {
    let victims = Math.floor(Math.random()*87465)+1;    
    $('#maczanVictims').html('('+victims+')');
    victims+=1;
    setTimeout(killedBySyntheticCannabinoids,5000);
}