function BallUI() {
	this.ball = g.pball;
	
	this.render = function(){
		this.ball.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		this.ball.rotate(context);

		context.beginPath();
		context.arc(this.ball.x, this.ball.y, BALL.RADIUS, 0, Math.PI, false)
		context.closePath();
		context.fillStyle='white';
		context.fill();

		context.beginPath();
		context.arc(this.ball.x, this.ball.y, BALL.RADIUS, 0, Math.PI, true)
		context.closePath();
		context.fillStyle='red';
		context.fill();

		context.beginPath();
		context.moveTo(this.ball.x-BALL.RADIUS, this.ball.y)
		context.lineTo(this.ball.x+BALL.RADIUS, this.ball.y)
		context.lineWidth = 2;
		context.stroke()

		context.beginPath();
		context.arc(this.ball.x, this.ball.y, BALL.RADIUS*0.4, 0, 2*Math.PI, true)
		context.fillStyle='black';
		context.fill();

		context.beginPath();
		context.arc(this.ball.x, this.ball.y, BALL.RADIUS*0.2, 0, 2*Math.PI, true)
		context.fillStyle='white';
		context.fill();
		context.restore();
	}
}
