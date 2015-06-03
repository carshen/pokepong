function Paddle(x,y){
	this.score = 0;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.length = PADDLE.LENGTH;
	this.width = PADDLE.WIDTH;
	this.moveY = function(){
			this.y = this.y + this.vy;
	}
	// ensures paddle doesn't go outside the canvas screen
	this.stayInBound = function(){
		if (this.y < 0) this.y = 0;
		if (this.y + PADDLE.LENGTH > CANVAS_HEIGHT) this.y = CANVAS_HEIGHT - PADDLE.LENGTH;
	}
	// renders the paddle
	this.render = function(){
		this.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#CC66CC";
		context.fillRect(this.x, this.y, PADDLE.WIDTH, PADDLE.LENGTH);
		context.restore();
	}
}
