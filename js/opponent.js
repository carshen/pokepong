function Opponent(x,y){
	this.score = 0;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.length = PADDLE_LENGTH;
	this.width = PADDLE_WIDTH;
	// state of the art AI
	this.moveY = function(){
		this.y = this.y + this.vy;
		if (pball.y < this.y){
			this.vy = -OPPONENT_VY-Math.random()*2.75;
		} else if (pball.y > this.y && pball.y < this.y+PADDLE_LENGTH){
			this.vy = 0;
		} else if (pball.y > this.y){
			this.vy = OPPONENT_VY+Math.random()*2.75;
		}
	}
	// ensure opponent paddle doesn't leave canvas screen
	this.stayInBound = function(){
		if (this.y < 0) this.y = 0;
		if (this.y + PADDLE_LENGTH > CANVAS_HEIGHT) this.y = CANVAS_HEIGHT - PADDLE_LENGTH;
	}
	// renders opponent paddle
	this.render = function(){
		this.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#99FF66";
		context.fillRect(this.x, this.y, PADDLE_WIDTH, PADDLE_LENGTH);
		context.restore();
	}
}