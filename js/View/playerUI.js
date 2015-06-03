function PlayerUI() {
	this.player = g.player;
	
	// renders the paddle
	this.render = function(){
		this.player.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#CC66CC";
		context.fillRect(this.player.x, this.player.y, PADDLE.WIDTH, PADDLE.LENGTH);
		context.restore();
	}
}
