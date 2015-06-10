// PAUSING -- dude the function names are pre obvious
function saveState(){
  // save  ball state
  S_BALL_X = g.pball.x;
  S_BALL_Y = g.pball.y;
  S_BALL_VX = g.pball.vx;
  S_BALL_VY = g.pball.vy;

  // save player state
  S_PADDLE_X = g.player.x;
  S_PADDLE_Y = g.player.y;
  S_PADDLE_VX = g.player.vx;
  S_PADDLE_VY = g.player.vy;

  // save opponent state
  S_OPPONENT_VX = g.opponent.vx;
  S_OPPONENT_VY = g.opponent.vy;
  S_OPPONENT_X = g.opponent.x;
  S_OPPONENT_Y = g.opponent.y;
}

function pauseGame(){
  g.pball.vx = 0;
  g.pball.vy = 0;
  g.player.vx = 0;
  g.player.vy = 0;
  g.opponent.vx = 0;
  g.opponent.vy = 0;
}

function restoreState(){
  // restore ball state
  g.pball.x = S_BALL_X;
  g.pball.y = S_BALL_Y;
  g.pball.vx = S_BALL_VX;
  g.pball.vy = S_BALL_VY;
  
  // restore player state
  g.player.x = S_PADDLE_X;
  g.player.y = S_PADDLE_Y;
  g.player.vx = S_PADDLE_VX;
  g.player.vy = S_PADDLE_VY;
  
  // restore opponent state
  g.opponent.vx = S_OPPONENT_VX;
  g.opponent.vy = S_OPPONENT_VY;
  g.opponent.x = S_OPPONENT_X;
  g.opponent.y = S_OPPONENT_Y;
}
