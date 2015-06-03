function OpponentUI() {
	this.opponent = g.opponent;

	// renders opponent paddle
	this.render = function(){
		this.opponent.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		context.fillStyle="#99FF66";
		context.fillRect(this.opponent.x, this.opponent.y, PADDLE.WIDTH, PADDLE.LENGTH);
		context.restore();
	}
}
