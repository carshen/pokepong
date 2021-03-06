// render the start screen that shows you what controls to use
function startScreen(){
  var cx = UI.context;
  cx.fillStyle = "blue";
  cx.font = "bold 25px Inconsolata";
  cx.fillText("SPACEBAR - start/restart game", 150, 150);
  cx.fillText("ESC - quit", 150, 200);
  cx.fillText("'p' - pause/unpause", 150, 250);
  cx.fillText("ARROW KEYS - movement", 150, 300);
  cx.fillText("* pressing the arrow key down when the paddle hits the",150,350);
  cx.fillText("side causes extra acceleration",150,375);
}

// renders end screen after you press 'esc'
function quitScreen(){
  var cx = UI.context;
  cx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  cx.textAlign = "center";
  cx.fillStyle = "blue";
  cx.font = "bold 25px Inconsolata";
  cx.fillText("you have quit the game", CANVAS_WIDTH/2, CANVAS_HEIGHT/2-25);
  ct.fillText("press space to play again", CANVAS_WIDTH/2, CANVAS_HEIGHT/2+25);
}

// checks whether to show you lose or win screen if you won or lost
// else just updates after the round
function startNextScreenIfAny(){
  // start a new round if lost round
  if (g.lostRound()){
    g.updateLoseRound();
    if (g.opponent.score >= WINS_NEEDED){
      console.log("lose")
      clearInterval(gameUpdate);
      endGameScreen('lose');
      started = false;
    }
  } else if (g.winRound()){ // show win screen if won game
    g.updateWinRound();
    if (g.player.score >= WINS_NEEDED){
      clearInterval(gameUpdate);
      endGameScreen('win');
      started = false;
    }
  }
}

// renders either a lose or win screen
function endGameScreen(result){
  var cx = UI.context;
  cx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  cx.fillStyle = "blue";
  cx.font = "bold 100px Inconsolata";
  cx.textAlign = "center";
  if (result === 'lose'){
    cx.fillText("LOSE", CANVAS_WIDTH/2, 300);
  } else if (result === 'win'){
    cx.fillText("WIN", CANVAS_WIDTH/2, 300);
  }
}
