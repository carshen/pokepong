// GENERAL
var FPS = 80;
var CANVAS_HEIGHT = document.getElementById("game-canvas").getAttribute('height');
var CANVAS_WIDTH = document.getElementById("game-canvas").getAttribute('width');
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
