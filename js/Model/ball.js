function PBall(x,y) {
  this.x = x;
  this.y = y;
  this.vx = BALL.ORIG_VX;
  this.vy = BALL.ORIG_VY;
}

PBall.prototype = Object.create(Object.prototype, {
  moveX: {
    value: function() {
        this.x = this.x + this.vx;
      },
  },
  moveY: {
    value: function() {
        this.y = this.y + this.vy;
      },
  },
  // ensures the ball doesn't overlap with the paddle
  stayInBound: {
    value: function(){
        // stay in bound for g.opponent paddle
        if (this.x - BALL.RADIUS < g.opponent.x + PADDLE.WIDTH && this.y+BALL.RADIUS >= g.opponent.y && this.y-BALL.RADIUS <= g.opponent.y+PADDLE.LENGTH){
          this.x = g.opponent.x + PADDLE.WIDTH + BALL.RADIUS;
          this.vx = BALL.ORIG_VX;
        }
        // stay in bound for g.player's paddle
        else if (this.x+BALL.RADIUS > g.player.x && this.y+BALL.RADIUS >= g.player.y && this.y-BALL.RADIUS <= g.player.y+PADDLE.LENGTH){
          this.x = g.player.x - BALL.RADIUS;
          this.vx = -BALL.ORIG_VX;
        }
      },
  },
  // such software engineering skill
  rotate: {
    value: function(){
      var cx = UI.context;
      if (!saved){
        var ratio = Math.abs(this.vy / this.vx);
        if ((this.vx < 0 && this.vy < 0) || (this.vx > 0 && this.vy > 0)){
          cx.translate(this.x,this.y);
          cx.rotate(Math.PI / 4 * ratio * 20);
          cx.translate(-this.x,-this.y);
        } else if ((this.vx < 0 && this.vy > 0) || (this.vx > 0 && this.vy < 0)){
          cx.translate(this.x,this.y);
          cx.rotate(-Math.PI / 4 * ratio * 20);
          cx.translate(-this.x,-this.y);
        }
      } else {
        var ratio = Math.abs(S_BALL.VY / S_BALL.VX);
        if ((S_BALL.VX < 0 && S_BALL.VY < 0) || (S_BALL.VX > 0 && S_BALL.VY > 0 )){
          cx.translate(S_BALL.X,S_BALL.Y);
          cx.rotate(Math.PI / 4 * ratio * 20);
          cx.translate(-S_BALL.X,-S_BALL.Y);
        } else if ((S_BALL.VX < 0 && S_BALL.VY > 0) || (S_BALL.VX > 0 && S_BALL.VY < 0)){
          cx.translate(S_BALL.X,S_BALL.Y);
          cx.rotate(-Math.PI / 4 * ratio * 20);
          cx.translate(-S_BALL.X,-S_BALL.Y);
        }
      }
    },
  }
});

PBall.prototype.constructor = PBall;
