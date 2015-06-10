function UIRenderer() {
  // renders the score
  this.renderScore = function(){
    var cx = UI.context; 
    cx.save();
    cx.fillStyle = "blue";
    cx.font = "bold 30px Inconsolata";
    cx.fillText(g.opponent.score, 250 , 500);
    cx.fillText(g.player.score, 750, 500);
    cx.restore();
  }

  // draws the game background
  this.drawBackground = function() {
    var cx = UI.context;
    var img = document.getElementById("background-img");
    cx.drawImage(img,0,0)
  }

  this.render = function() {
    this.drawBackground();
    this.renderScore();
  }
}
