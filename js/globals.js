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
var BALL_RADIUS = 10;
var BALL_ORIG_VY = 0.3;
var BALL_ORIG_VX = 8; // orig 8
var BALL_ORIG_X = 75;
var BALL_ORIG_Y = CANVAS_HEIGHT/2;
var BALL_MAX_SPEED_Y = 18;
var hit = false;
// PADDLE
var PADDLE_LENGTH = 150;
var PADDLE_WIDTH = 14;
var PADDLE_ACCELERATION = 0.5;
var PADDLE_MIN_SPEED = 8.9;
var PADDLE_MAX_SPEED = 15;
var PADDLE_ORIG_X = CANVAS_WIDTH-50;
var PADDLE_ORIG_Y = CANVAS_HEIGHT/2 - PADDLE_LENGTH/2;
// OPPONENT
var OPPONENT_VY = 5; // orig 5
var OPPONENT_X = 50;