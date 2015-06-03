function Player(x,y){
	// inheritance
	Paddle.call(this, x, y);

	this.updateMovement = function() {
		this.moveY();
	}
}
