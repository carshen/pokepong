// PAUSING -- dude the function names are pre obvious
function saveState(){
	S_BALL_X = pball.x, S_BALL_Y = pball.y, S_BALL_VX = pball.vx, S_BALL_VY = pball.vy;
	S_PADDLE_X = paddle.x, S_PADDLE_Y = paddle.y, S_PADDLE_VX = paddle.vx, S_PADDLE_VY = paddle.vy;
	S_OPPONENT_VX = opponent.vx, S_OPPONENT_VY = opponent.vy, S_OPPONENT_X = opponent.x, S_OPPONENT_Y = opponent.y;
}

function pauseGame(){
	pball.vx = 0;
	pball.vy = 0;
	paddle.vx = 0;
	paddle.vy = 0;
	opponent.vx = 0;
	opponent.vy = 0;
}

function restoreState(){
	pball.x = S_BALL_X, pball.y = S_BALL_Y, pball.vx = S_BALL_VX, pball.vy = S_BALL_VY;
	paddle.x = S_PADDLE_X, paddle.y = S_PADDLE_Y, paddle.vx = S_PADDLE_VX, paddle.vy = S_PADDLE_VY;
	opponent.vx = S_OPPONENT_VX, opponent.vy = S_OPPONENT_VY, opponent.x = S_OPPONENT_X, opponent.y = S_OPPONENT_Y;
}