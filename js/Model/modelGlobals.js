// TODO: separate global objects from global constants later??
// TODO: install a linter
// TODO: Game is part of model -- make the game an instance with some functions to call on it
var g = {};

// PONG BALL
var BALL = {
	RADIUS: 10,
	ORIG_VY: 0.3,
	ORIG_VX: 8,
	ORIG_X: 75,
	ORIG_Y: CANVAS_HEIGHT/2,
	MAX_SPEED_Y: 18,
}
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
