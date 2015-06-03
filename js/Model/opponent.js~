function Opponent(x,y){
	// inheritance
	Paddle.call(this);

	// state of the art AI
	this.moveY = function(){
		this.y = this.y + this.vy;
		if (pball.y < this.y){
			this.vy = -OPPONENT_VY-Math.random()*2.75;
		} else if (pball.y > this.y && pball.y < this.y+PADDLE.LENGTH){
			this.vy = 0;
		} else if (pball.y > this.y){
			this.vy = OPPONENT_VY+Math.random()*2.75;
		}
	}

	// renders opponent paddle
	this.render = function(){
		this.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#99FF66";
		context.fillRect(this.x, this.y, PADDLE.WIDTH, PADDLE.LENGTH);
		context.restore();
	}
}
