function Opponent(x,y){
	// inheritance
	Paddle.call(this, x, y);

	// state of the art AI
	this.updateMovement = function() {
		this.moveY();
		this.followPlayer();
	}
	
	this.followPlayer = function() {
		if (g.pball.y < this.y){
			this.vy = -OPPONENT_VY-Math.random()*2.75;
		} else if (g.pball.y > this.y && g.pball.y < this.y+PADDLE.LENGTH){
			this.vy = 0;
		} else if (g.pball.y > this.y){
			this.vy = OPPONENT_VY+Math.random()*2.75;
		}
	}
}

// TODO: deal with prototypes here and in player
