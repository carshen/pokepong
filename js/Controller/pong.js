// Call this to play the game.
function runGame() {
  initGame();
  startScreen();
}

// create the ball, two paddles, adds game controls and screen controls, then plays a sexy song
function initGame() {
  g = new Game();

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
  g.update();
  g.updateMovement();
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
