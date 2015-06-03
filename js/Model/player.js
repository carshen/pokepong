function Player(x,y){
	// inheritance
	Paddle.call(this, x, y);

	this.updateMovement = function() {
		this.moveY();
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
