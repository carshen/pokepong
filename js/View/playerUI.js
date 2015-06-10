function PlayerUI() {
	this.player = g.player;
	
	// renders the paddle
	this.render = function(){
		this.player.stayInBound();
		var cx = UI.context;
		cx.save();
		cx.fillStyle="#CC66CC";
		cx.fillRect(this.player.x, this.player.y, PADDLE.WIDTH, PADDLE.LENGTH);
		cx.restore();
	}
}
