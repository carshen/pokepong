// GENERAL
var FPS = 80;
var CANVAS_HEIGHT = $("#game-canvas").attr('height');
var CANVAS_WIDTH = $("#game-canvas").attr('width');
var started = false;
var saved = false;
var WINS_NEEDED = 10; // orig 10
// SAVED SETTINGS
var S_BALL_X;
var S_BALL_Y;
var S_BALL_VX;
var S_BALL_VY;
var S_PADDLE_X;
var S_PADDLE_Y;
var S_PADDLE_VX;
var S_PADDLE_VY;
var S_OPPONENT_VX;
var S_OPPONENT_VY;
var S_OPPONENT_X;
var S_OPPONENT_Y;
// PONG BALL
var BALL = {
	RADIUS: 10,
	ORIG_VY: 0.3,
	ORIG_VX: 8,
	ORIG_X: 75,
	ORIG_Y: CANVAS_HEIGHT/2,
	MAX_SPEED_Y: 18,
}
var hit = false;
// PADDLE
var PADDLE = {
	LENGTH: 150,
	WIDTH: 14,
	ACCELERATION: 0.5,
	MIN_SPEED: 8.9,
	MAX_SPEED: 15,
	ORIG_X: CANVAS_WIDTH-50,
};
// fix later:
PADDLE.ORIG_Y = CANVAS_HEIGHT/2 - PADDLE.LENGTH/2;

// OPPONENT
var OPPONENT_VY = 5; // orig 5
var OPPONENT_X = 50;
