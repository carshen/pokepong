function addGamePlayControls(){
  window.addEventListener('keydown', function(e) {
    switch (e.keyCode){
      case 38: 
        if (saved) break;
        if (g.player.y< 0) {
          g.player.y = 0;
        }
        if (g.player.vy == 0){
          g.player.vy = -PADDLE.MIN_SPEED;
        } else if (g.player.vy > -PADDLE.MAX_SPEED) { 
          g.player.vy -= PADDLE.ACCELERATION; 
        } 
      break;
      case 40:
        if (saved) break;
        if (g.player.y+g.player.vy > CANVAS_HEIGHT) g.player.y = CANVAS_HEIGHT - PADDLE.LENGTH - g.player.vy;
        if (g.player.vy == 0){
          g.player.vy = PADDLE.MIN_SPEED;
        } else if (g.player.vy < PADDLE.MAX_SPEED) {
          g.player.vy += PADDLE.ACCELERATION;
        }
      break;
    }
  });
  window.addEventListener('keyup', function(e) {
    switch (e.keyCode){
      case 38: 
        g.player.vy = 0;
      break;
      case 40:
        g.player.vy = 0;
      break;
    }
  });
}

function addUIControls(){
  window.addEventListener('keydown', function(e){
    switch (e.keyCode){
      case 32: //spacebar to begin
        if (!started){ // --- start the game
          g.resetToDefault();
          g.opponent.score = 0;
          g.player.score = 0;
          gameLoop();
          started = true;
        } else if (!saved){ // restart the game
          g.resetToDefault();
          g.opponent.score = 0;
          g.player.score = 0;
        }
        break;
      case 27: // Esc to quit game
        if (started){
          quitGame();
        }
        break;
      case 80: // p to pause game
        if (started && !saved) {
          console.log("paused")
          saveState();
          pauseGame();
          saved = true;
        } else if (started && saved){
          console.log("unpaused")
          restoreState();
          saved = false;
        }
    }
  });

}
