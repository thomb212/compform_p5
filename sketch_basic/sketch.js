var balls;

function setup() {
	createCanvas(800, 500);

	balls = [];
	for (var i = 0; i < 10; i++) {
		balls[i] = {};
		balls[i].x = random(width);
		balls[i].y = random(height);
		balls[i].speedY = random(0, 3);
		balls[i].color = color(random(255), random(255), random(255), random(255));
		balls[i].stroke = random(10, 50);
	}
}

function draw() {


	for (var i = 0; i < balls.length; i++) {
		moveBall(balls[i]);
		drawBall(balls[i]);
	}
}


function drawBall(ball) {
	push();
	strokeWeight(random(0, 5));
	stroke(ball.color);
	line(0, ball.y, ball.x, ball.y);
	pop();
}

function moveBall(ball) {
	ball.y += ball.speedY;

	// if (ball.y > 500) {
	// 	ball.y = -100;
	// }
}
