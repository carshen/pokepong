// PAUSING -- dude the function names are pre obvious
function saveState(){
	S_BALL_X = pball.x, S_BALL_Y = pball.y, S_BALL_VX = pball.vx, S_BALL_VY = pball.vy;
	S_PADDLE_X = player.x, S_PADDLE_Y = player.y, S_PADDLE_VX = player.vx, S_PADDLE_VY = player.vy;
	S_OPPONENT_VX = opponent.vx, S_OPPONENT_VY = opponent.vy, S_OPPONENT_X = opponent.x, S_OPPONENT_Y = opponent.y;
}

function pauseGame(){
	pball.vx = 0;
	pball.vy = 0;
	player.vx = 0;
	player.vy = 0;
	opponent.vx = 0;
	opponent.vy = 0;
}

function restoreState(){
	pball.x = S_BALL_X, pball.y = S_BALL_Y, pball.vx = S_BALL_VX, pball.vy = S_BALL_VY;
	player.x = S_PADDLE_X, player.y = S_PADDLE_Y, player.vx = S_PADDLE_VX, player.vy = S_PADDLE_VY;
	opponent.vx = S_OPPONENT_VX, opponent.vy = S_OPPONENT_VY, opponent.x = S_OPPONENT_X, opponent.y = S_OPPONENT_Y;
}
