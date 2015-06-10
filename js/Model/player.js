var Player = function(x,y) {
  // in Javascript, prototypes refer to a single object, so instantiate our member variables only when we need their instances; unlike classical OOP
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.score = 0;
};

Player.prototype = Object.create(Paddle.prototype, {
  updateMovement: {
    value: function() {
        this.moveY();
      },
  }
});

Player.prototype.constructor = Player;
