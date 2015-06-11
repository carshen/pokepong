function Paddle(x,y) {}

Paddle.prototype = Object.create(Object.prototype, {
  len: {
    value: PADDLE.LENGTH,
  },
  width: {
    value: PADDLE.WIDTH,
  },
  // just moves the paddle
  moveY: {
    value: function() {
        this.y = this.y + this.vy;
      },
  },
  // ensures paddle doesn't go outside the canvas screen
  stayInBound: {
    value: function() {
        if (this.y < 0) this.y = 0;
        if (this.y + PADDLE.LENGTH > CANVAS_HEIGHT) this.y = CANVAS_HEIGHT - PADDLE.LENGTH;
      },
  }
});

Paddle.prototype.constructor = Paddle;
