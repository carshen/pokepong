// COLLISIONS
function detectPaddleCollision(pb, pd){
  if (((pb.x + BALL.RADIUS) >= pd.x) && (pb.y+BALL.RADIUS >= pd.y && pb.y-BALL.RADIUS <= pd.y+PADDLE.LENGTH)){
    if (pb.x + BALL.RADIUS <= pd.x+PADDLE.WIDTH/2){ // for ball to not bounce back when behind paddle
      pb.vx = -1*BALL.ORIG_VX;
      if (pb.vy < BALL.MAX_SPEED_Y){
        pb.vy = (pd.vy)*0.75+0.2;
      } else {
        pb.vy = BALL.MAX_SPEED_Y;
      }
    }
  }
}

function detectOpponentCollision(pb, pd){
  if (((pb.x - BALL.RADIUS) <= pd.x+PADDLE.WIDTH/2) && (pb.y+BALL.RADIUS >= pd.y && pb.y-BALL.RADIUS <= pd.y+PADDLE.LENGTH)){
    if (pb.x-BALL.RADIUS >= pd.x-PADDLE.WIDTH/2){
      pb.vx = BALL.ORIG_VX;
      if (pb.vy < BALL.MAX_SPEED_Y){
        pb.vy = (pd.vy)*0.75+0.2;
      } else {
        pb.vy = BALL.MAX_SPEED_Y;
      }
    }
  }
}

function detectWallCollision(){
  // ball wall collision
  if (g.pball.y-BALL.RADIUS <= 0 || g.pball.y+BALL.RADIUS >= CANVAS_HEIGHT) {
    g.pball.vy = -g.pball.vy;
  }
  // paddle wall collision
  if (g.player.y <= 0){
    g.player.y = 0
  } else if (g.player.y + PADDLE.LENGTH >= CANVAS_HEIGHT) {
    g.player.y = CANVAS_HEIGHT - PADDLE.LENGTH;
  }
}
