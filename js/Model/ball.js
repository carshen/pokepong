function PBall(x,y){
	this.x = x;
	this.y = y;
	this.vx = BALL.ORIG_VX;
	this.vy = BALL.ORIG_VY;
	this.moveX = function() {
		this.x = this.x + this.vx;
	}
	this.moveY = function() {
		this.y = this.y + this.vy;
	}
	// ensures the ball doesn't overlap with the paddle
	this.stayInBound = function(){
		// stay in bound for g.opponent paddle
		if (this.x - BALL.RADIUS < g.opponent.x + PADDLE.WIDTH && this.y+BALL.RADIUS >= g.opponent.y && this.y-BALL.RADIUS <= g.opponent.y+PADDLE.LENGTH){
			this.x = g.opponent.x + PADDLE.WIDTH + BALL.RADIUS;
			this.vx = BALL.ORIG_VX;
		}
		// stay in bound for g.player's paddle
		else if (this.x+BALL.RADIUS > g.player.x && this.y+BALL.RADIUS >= g.player.y && this.y-BALL.RADIUS <= g.player.y+PADDLE.LENGTH){
			this.x = g.player.x - BALL.RADIUS;
			this.vx = -BALL.ORIG_VX;
		}
	}
	// such software engineering skill
	this.rotate = function(context){
		if (!saved){
			var ratio = Math.abs(this.vy / this.vx);
			if ((this.vx < 0 && this.vy < 0) || (this.vx > 0 && this.vy > 0)){
				context.translate(this.x,this.y);
				context.rotate(Math.PI / 4 * ratio * 20);
				context.translate(-this.x,-this.y);
			} else if ((this.vx < 0 && this.vy > 0) || (this.vx > 0 && this.vy < 0)){
				context.translate(this.x,this.y);
				context.rotate(-Math.PI / 4 * ratio * 20);
				context.translate(-this.x,-this.y);
			}
		} else {
			var ratio = Math.abs(S_BALL.VY / S_BALL.VX);
			if ((S_BALL.VX < 0 && S_BALL.VY < 0) || (S_BALL.VX > 0 && S_BALL.VY > 0 )){
				context.translate(S_BALL.X,S_BALL.Y);
				context.rotate(Math.PI / 4 * ratio * 20);
				context.translate(-S_BALL.X,-S_BALL.Y);
			} else if ((S_BALL.VX < 0 && S_BALL.VY > 0) || (S_BALL.VX > 0 && S_BALL.VY < 0)){
				context.translate(S_BALL.X,S_BALL.Y);
				context.rotate(-Math.PI / 4 * ratio * 20);
				context.translate(-S_BALL.X,-S_BALL.Y);
			}
		}
	}

	this.render = function(){
		this.stayInBound();
		var canv = document.getElementById("game-canvas");
		var context = canv.getContext("2d");
		context.save();
		this.rotate(context);

		context.beginPath();
		context.arc(this.x,this.y,BALL.RADIUS,0,Math.PI, false)
		context.closePath();
		context.fillStyle='white';
		context.fill();

		context.beginPath();
		context.arc(this.x,this.y,BALL.RADIUS,0,Math.PI, true)
		context.closePath();
		context.fillStyle='red';
		context.fill();

		context.beginPath();
		context.moveTo(this.x-BALL.RADIUS,this.y)
		context.lineTo(this.x+BALL.RADIUS,this.y)
		context.lineWidth = 2;
		context.stroke()

		context.beginPath();
		context.arc(this.x,this.y,BALL.RADIUS*0.4,0,2*Math.PI, true)
		context.fillStyle='black';
		context.fill();

		context.beginPath();
		context.arc(this.x,this.y,BALL.RADIUS*0.2,0,2*Math.PI, true)
		context.fillStyle='white';
		context.fill();
		context.restore();
	}
}
