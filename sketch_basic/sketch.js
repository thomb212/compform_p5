var balls;

function setup() {
	createCanvas(800, 500);

	balls = [];
	for (var i = 0; i < 100; i++) {
		balls[i] = {};
		balls[i].x = random(width);
		balls[i].y = -10;
		balls[i].speedY = random(5, 10);
		balls[i].color = color(random(255), random(255), random(255), 50);

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
	strokeWeight(random(0, 50));
	stroke(ball.color);
	ellipse(ball.x, ball.y, random(10, 80), random(10, 80));
	pop();
}

function moveBall(ball) {
	ball.y += ball.speedY;

	// if (ball.y > 500) {
	// 	ball.y = -100;
	// }
}
