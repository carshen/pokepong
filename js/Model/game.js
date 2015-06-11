function Game() {
  this.pball = new PBall(BALL.ORIG_X, BALL.ORIG_Y);
  this.player = new Player(PADDLE.ORIG_X, PADDLE.ORIG_Y);
  this.opponent = new Opponent(OPPONENT_X-PADDLE.WIDTH, PADDLE.ORIG_Y);
}

Game.prototype = Object.create(Object.prototype, {
  update: {
    value: function() {
      detectPaddleCollision(this.pball, this.player);
      detectOpponentCollision(this.pball, this.opponent);
      detectWallCollision();
    },
  },
  // updates scores and positions after round is won
  updateWinRound: {
    value: function() {
      this.player.score++;
      // when we win a round, want to reset it
      this.resetToDefault();
    },
  },
  // updates scores and positions after round is lost
  updateLoseRound: {
    value: function() {
      this.opponent.score++;
      // when we lose a round, want to use the angle and velocity of the previous round
      this.pball.x = BALL.ORIG_X;
    },
  },
  /** MISCELLANEOUS HELPERS **/

  // returns true if past round was won
  winRound: {
    value: function() {
      if (this.pball.x-BALL.RADIUS <= 0) return true;
    },
  },
  // returns true if past round was lost
  lostRound: {
    value: function() {
      if (this.pball.x-BALL.RADIUS > CANVAS_WIDTH) return true;
    },
  },
  // resets paddle positions, ball position and speed
  resetToDefault: {
    value: function() {
      this.pball.x = BALL.ORIG_X;
      this.pball.y = BALL.ORIG_Y;
      this.pball.vx = BALL.ORIG_VX;
      this.pball.vy = BALL.ORIG_VY;
      this.player.x = PADDLE.ORIG_X;
      this.player.y = PADDLE.ORIG_Y;
      this.opponent.x = OPPONENT_X;
      this.opponent.y = PADDLE.ORIG_Y;
    },
  },
  // moves ball and paddles
  updateMovement: {
    value: function() {
      this.pball.moveX();
      this.pball.moveY();
      this.player.updateMovement();
      this.opponent.updateMovement();
    }
  }
});

Game.prototype.constructor = Game;
