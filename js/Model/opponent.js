function Opponent (x,y) {
  // inheritance
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.score = 0;
}

Opponent.prototype = Object.create(Paddle.prototype, {
  // state of the art AI
  updateMovement: {
    value: function() {
        this.moveY();
        this.followPlayer();
      },
  },
  followPlayer: {
    value: function() {
        if (g.pball.y < this.y){
          this.vy = -OPPONENT_VY-Math.random()*2.75;
        } else if (g.pball.y > this.y && g.pball.y < this.y+PADDLE.LENGTH){
          this.vy = 0;
        } else if (g.pball.y > this.y){
          this.vy = OPPONENT_VY+Math.random()*2.75;
        }
      },
  },
});

Opponent.prototype.constructor = Opponent;
