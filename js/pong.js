$(function(){
	runGame();
})

// what its function name says
function runGame() {
	initGame();
	startScreen();
}

// create the ball, two paddles, adds game controls and screen controls, then plays a sexy song
function initGame(){
	pball = new PBall(BALL_ORIG_X, BALL_ORIG_Y);
	paddle = new Paddle(PADDLE_ORIG_X, PADDLE_ORIG_Y);
	opponent = new Opponent(OPPONENT_X-PADDLE_WIDTH, PADDLE_ORIG_Y);
	addUIControls();
	addGamePlayControls();
	playExo();
}

// Growl by Exo
function playExo(){
	growl = new Audio('res/growl.mp3');
	growl.addEventListener('ended', function(){
		this.currentTime = 0;
		this.play();
	}, false);
	growl.play();
}

// detects all collisions, updates movements, then sees if you need to change screens
function update(){
	detectPaddleCollision(pball, paddle);
	detectOpponentCollision(pball, opponent);
	detectWallCollision();
	updateMovement();
	startNextScreenIfAny();
}

// draws everything
function render(){
	if (!started) return; //so it won't render after game is over
	var canv = document.getElementById("game-canvas");
	var context = canv.getContext("2d");
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	drawBackground();
	paddle.render();
	pball.render();
	opponent.render();
	renderScore();
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
	console.log("Quitting game.")
	clearInterval(gameUpdate);
	quitScreen();
	started = false;
}

// updates scores and positions after round is won
function updateWinRound(){
	resetToDefault();
	paddle.score++;
}

// updates scores and positions after round is lost
function updateLoseRound(){
	opponent.score++;
	pball.x = BALL_ORIG_X;
}

/** MISCELLANEOUS HELPERS **/

// returns true if past round was won
function winRound(){
	if (pball.x-BALL_RADIUS <= 0) return true;
}

// returns true if past round was lost
function lostRound(){
	if (pball.x-BALL_RADIUS > CANVAS_WIDTH) return true;
}

// resets paddle positions, ball position and speed
function resetToDefault(){
	pball.x = BALL_ORIG_X;
	pball.y = BALL_ORIG_Y;
	pball.vx = BALL_ORIG_VX;
	pball.vy = BALL_ORIG_VY;
	paddle.x = PADDLE_ORIG_X;
	paddle.y = PADDLE_ORIG_Y;
	opponent.x = OPPONENT_X;
	opponent.y = PADDLE_ORIG_Y;
}

// moves ball and paddles
function updateMovement(){
	pball.moveX();
	pball.moveY();
	paddle.moveY();
	opponent.moveY();
}

// renders the score
function renderScore(){
	var canvas = document.getElementById("game-canvas");
	var context = canvas.getContext("2d");
	context.save();
	context.fillStyle = "blue";
	context.font = "bold 30px Inconsolata";
	context.fillText(opponent.score, 250 , 500);
	context.fillText(paddle.score, 750, 500);
	context.restore();
}

// draws the game background
function drawBackground(){
	var canv = document.getElementById("game-canvas");
	var context = canv.getContext("2d");
	var img = document.getElementById("background-img");
	context.drawImage(img,0,0)
}