$(function(){
  runGame();
})

// what its function name says
function runGame() {
  initGame();
  startScreen();
}

// create the ball, two paddles, adds game controls and screen controls, then plays a sexy song
function initGame() {
  g.pball = new PBall(BALL.ORIG_X, BALL.ORIG_Y);
  g.player = new Player(PADDLE.ORIG_X, PADDLE.ORIG_Y);
  g.opponent = new Opponent(OPPONENT_X-PADDLE.WIDTH, PADDLE.ORIG_Y);

  // TODO: handle the namespacing
  playerui = new PlayerUI();
  opponentui = new OpponentUI();
  ballui = new BallUI();

  objRend = new ObjectsRenderer(playerui, opponentui, ballui);
  uiRendr = new UIRenderer();

  addUIControls();
  addGamePlayControls();
  playExo();
}

// detects all collisions, updates movements, then sees if you need to change screens
function update(){
  detectPaddleCollision(g.pball, g.player);
  detectOpponentCollision(g.pball, g.opponent);
  detectWallCollision();
  updateMovement();
  startNextScreenIfAny();
}

// draws everything
function render(){
  if (!started) return; //so it won't render after game is over
  var cx = UI.context;
  cx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  
  uiRendr.render();
  objRend.render();
}

// motherfucking game loop
function gameLoop(){
  gameUpdate = setInterval(function(){
    update();
    render();
  }, 1000/FPS);
}

// quits the game -- (but in the game you can restart after that by pressing space)
function quitGame(){
  console.log("Quitting.")
  clearInterval(gameUpdate);
  quitScreen();
  started = false;
}

// updates scores and positions after round is won
function updateWinRound(){
  resetToDefault();
  g.player.score++;
}

// updates scores and positions after round is lost
function updateLoseRound(){
  g.opponent.score++;
  g.pball.x = BALL.ORIG_X;
}

/** MISCELLANEOUS HELPERS **/

// returns true if past round was won
function winRound(){
  if (g.pball.x-BALL.RADIUS <= 0) return true;
}

// returns true if past round was lost
function lostRound(){
  if (g.pball.x-BALL.RADIUS > CANVAS_WIDTH) return true;
}

// resets paddle positions, ball position and speed
function resetToDefault(){
  g.pball.x = BALL.ORIG_X;
  g.pball.y = BALL.ORIG_Y;
  g.pball.vx = BALL.ORIG_VX;
  g.pball.vy = BALL.ORIG_VY;
  g.player.x = PADDLE.ORIG_X;
  g.player.y = PADDLE.ORIG_Y;
  g.opponent.x = OPPONENT_X;
  g.opponent.y = PADDLE.ORIG_Y;
}

// moves ball and paddles
function updateMovement(){
  g.pball.moveX();
  g.pball.moveY();
  g.player.updateMovement();
  g.opponent.updateMovement();
}
