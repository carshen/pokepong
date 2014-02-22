function Paddle(x,y){
	this.score = 0;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.length = PADDLE_LENGTH;
	this.width = PADDLE_WIDTH;
	this.moveY = function(){
			this.y = this.y + this.vy;
	}
	// ensures paddle doesn't go outside the canvas screen
	this.stayInBound = function(){
		if (this.y < 0) this.y = 0;
		if (this.y + PADDLE_LENGTH > CANVAS_HEIGHT) this.y = CANVAS_HEIGHT - PADDLE_LENGTH;
	}
	// renders the paddle
	this.render = function(){
		this.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#CC66CC";
		context.fillRect(this.x, this.y, PADDLE_WIDTH, PADDLE_LENGTH);
		context.restore();
	}
}