// Growl by Exo
function playExo(){
  growl = new Audio('res/growl.mp3');
  growl.addEventListener('ended', function(){
    this.currentTime = 0;
    this.play();
  }, false);
  growl.play();
}
