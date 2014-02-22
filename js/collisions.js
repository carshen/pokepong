// COLLISIONS
function detectPaddleCollision(pb, pd){
	if (((pb.x + BALL_RADIUS) >= pd.x) && (pb.y+BALL_RADIUS >= pd.y && pb.y-BALL_RADIUS <= pd.y+PADDLE_LENGTH)){
		if (pb.x + BALL_RADIUS <= pd.x+PADDLE_WIDTH/2){ // for ball to not bounce back when behind paddle
			pb.vx = -1*BALL_ORIG_VX;
			if (pb.vy < BALL_MAX_SPEED_Y){
				pb.vy = (pd.vy)*0.75+0.2;
			} else {
				pb.vy = BALL_MAX_SPEED_Y;
			}
		}
	}
}

function detectOpponentCollision(pb, pd){
	if (((pb.x - BALL_RADIUS) <= pd.x+PADDLE_WIDTH/2) && (pb.y+BALL_RADIUS >= pd.y && pb.y-BALL_RADIUS <= pd.y+PADDLE_LENGTH)){
		if (pb.x-BALL_RADIUS >= pd.x-PADDLE_WIDTH/2){
			pb.vx = BALL_ORIG_VX;
			if (pb.vy < BALL_MAX_SPEED_Y){
				pb.vy = (pd.vy)*0.75+0.2;
			} else {
				pb.vy = BALL_MAX_SPEED_Y;
			}
		}
	}
}

function detectWallCollision(){
	// ball wall collision
	if (pball.y-BALL_RADIUS <= 0 || pball.y+BALL_RADIUS >= CANVAS_HEIGHT) {
		pball.vy = -pball.vy;
	}
	// paddle wall collision
	if (paddle.y <= 0){
		paddle.y = 0
	} else if (paddle.y + PADDLE_LENGTH >= CANVAS_HEIGHT) {
		paddle.y = CANVAS_HEIGHT - PADDLE_LENGTH;
	}
}