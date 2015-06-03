function addGamePlayControls(){
	window.addEventListener('keydown', function(e) {
		switch (e.keyCode){
			case 38: 
				if (saved) break;
				if (player.y< 0) {
					player.y = 0;
				}
				if (player.vy == 0){
					player.vy = -PADDLE.MIN_SPEED;
				} else if (player.vy > -PADDLE.MAX_SPEED) { 
					player.vy -= PADDLE.ACCELERATION; 
				} 
			break;
			case 40:
				if (saved) break;
				if (player.y+player.vy > CANVAS_HEIGHT) player.y = CANVAS_HEIGHT - PADDLE.LENGTH - player.vy;
				if (player.vy == 0){
					player.vy = PADDLE.MIN_SPEED;
				} else if (player.vy < PADDLE.MAX_SPEED) {
					player.vy += PADDLE.ACCELERATION;
				}
			break;
		}
	});
	window.addEventListener('keyup', function(e) {
		switch (e.keyCode){
			case 38: 
				player.vy = 0;
			break;
			case 40:
				player.vy = 0;
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
					player.score = 0;
					gameLoop();
					started = true;
				} else if (!saved){ // restart the game
					resetToDefault();
					opponent.score = 0;
					player.score = 0;
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
