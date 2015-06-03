function addGamePlayControls(){
	window.addEventListener('keydown', function(e) {
		switch (e.keyCode){
			case 38: 
				if (saved) break;
				if (paddle.y< 0) {
					paddle.y = 0;
				}
				if (paddle.vy == 0){
					paddle.vy = -PADDLE.MIN_SPEED;
				} else if (paddle.vy > -PADDLE.MAX_SPEED) { 
					paddle.vy -= PADDLE.ACCELERATION; 
				} 
			break;
			case 40:
				if (saved) break;
				if (paddle.y+paddle.vy > CANVAS_HEIGHT) paddle.y = CANVAS_HEIGHT - PADDLE.LENGTH - paddle.vy;
				if (paddle.vy == 0){
					paddle.vy = PADDLE.MIN_SPEED;
				} else if (paddle.vy < PADDLE.MAX_SPEED) {
					paddle.vy += PADDLE.ACCELERATION;
				}
			break;
		}
	});
	window.addEventListener('keyup', function(e) {
		switch (e.keyCode){
			case 38: 
				paddle.vy = 0;
			break;
			case 40:
				paddle.vy = 0;
			break;
		}
	});
}

function addUIControls(){
	window.addEventListener('keydown', function(e){
		switch (e.keyCode){
			case 32: //spacebar to begin
				if (!started){ // --- start the game
					resetToDefault();
					opponent.score = 0;
					paddle.score = 0;
					gameLoop();
					started = true;
				} else if (!saved){ // restart the game
					resetToDefault();
					opponent.score = 0;
					paddle.score = 0;
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
