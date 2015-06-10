function BallUI() {
	this.ball = g.pball;
	
	this.render = function(){
		this.ball.stayInBound();
		var cx = UI.context;
		cx.save();
		this.ball.rotate();

		cx.beginPath();
		cx.arc(this.ball.x, this.ball.y, BALL.RADIUS, 0, Math.PI, false)
		cx.closePath();
		cx.fillStyle='white';
		cx.fill();

		cx.beginPath();
		cx.arc(this.ball.x, this.ball.y, BALL.RADIUS, 0, Math.PI, true)
		cx.closePath();
		cx.fillStyle='red';
		cx.fill();

		cx.beginPath();
		cx.moveTo(this.ball.x-BALL.RADIUS, this.ball.y)
		cx.lineTo(this.ball.x+BALL.RADIUS, this.ball.y)
		cx.lineWidth = 2;
		cx.stroke()

		cx.beginPath();
		cx.arc(this.ball.x, this.ball.y, BALL.RADIUS*0.4, 0, 2*Math.PI, true)
		cx.fillStyle='black';
		cx.fill();

		cx.beginPath();
		cx.arc(this.ball.x, this.ball.y, BALL.RADIUS*0.2, 0, 2*Math.PI, true)
		cx.fillStyle='white';
		cx.fill();
		cx.restore();
	}
}
