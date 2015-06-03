function Paddle(x,y) {
	this.score = 0;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.len = PADDLE.LENGTH;
	this.width = PADDLE.WIDTH;

	// ensures paddle doesn't go outside the canvas screen
	this.stayInBound = function(){
		if (this.y < 0) this.y = 0;
		if (this.y + PADDLE.LENGTH > CANVAS_HEIGHT) this.y = CANVAS_HEIGHT - PADDLE.LENGTH;
	}
}
