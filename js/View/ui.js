/** THE SCREENS **/

// render the start screen that shows you what controls to use
function startScreen(){
	var canvas = document.getElementById("game-canvas");
	var context = canvas.getContext("2d");
	context.fillStyle = "blue";
	context.font = "bold 25px Inconsolata";
	context.fillText("SPACEBAR - start/restart game", 150, 150);
	context.fillText("ESC - quit", 150, 200);
	context.fillText("'p' - pause/unpause", 150, 250);
	context.fillText("ARROW KEYS - movement", 150, 300);
	context.fillText("* pressing the arrow key down when the paddle hits the",150,350);
	context.fillText("side causes extra acceleration",150,375);
}

// renders end screen after you press 'esc'
function quitScreen(){
	var canvas = document.getElementById("game-canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	context.textAlign = "center";
	context.fillStyle = "blue";
	context.font = "bold 25px Inconsolata";
	context.fillText("you have quit the game", CANVAS_WIDTH/2, CANVAS_HEIGHT/2-25);
	context.fillText("press space to play again", CANVAS_WIDTH/2, CANVAS_HEIGHT/2+25);
}

// checks whether to show you lose or win screen if you won or lost
// else just updates after the round
function startNextScreenIfAny(){
	// start a new round if lost round
	if (lostRound()){
		updateLoseRound();
		if (g.opponent.score >= WINS_NEEDED){
			console.log("lose")
			clearInterval(gameUpdate);
			endGameScreen('lose');
			started = false;
		}
	} else if (winRound()){ // show win screen if won game
		updateWinRound();
		if (g.player.score >= WINS_NEEDED){
			clearInterval(gameUpdate);
			endGameScreen('win');
			started = false;
		}
	}
}

// renders either a lose or win screen
function endGameScreen(result){
	var canvas = document.getElementById("game-canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	context.fillStyle = "blue";
	context.font = "bold 100px Inconsolata";
	context.textAlign = "center";
	if (result === 'lose'){
		context.fillText("LOSE", CANVAS_WIDTH/2, 300);
	} else if (result === 'win'){
		context.fillText("WIN", CANVAS_WIDTH/2, 300);
	}
}
