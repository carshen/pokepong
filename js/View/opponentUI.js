function OpponentUI() {
  this.opponent = g.opponent;

  // renders opponent paddle
  this.render = function(){
    this.opponent.stayInBound();
    var cx = UI.context;
    cx.save();
    cx.fillStyle="#99FF66";
    cx.fillRect(this.opponent.x, this.opponent.y, PADDLE.WIDTH, PADDLE.LENGTH);
    cx.restore();
  }
}
