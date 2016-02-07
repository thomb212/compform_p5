var line;

function setup() {
	createCanvas(800, 500);

	line = [];
	for (var i = 0; i < 1000; i++) {

		line[i] = {};
		line[i].x = random(width);
		line[i].y = random(height);
		line[i].speedY = random(5, 10);
		line[i].color = color(random(255), random(255), random(255));
		line[i].width = 1;
	}
}

function draw() {
	for (var i = 0; i < line.length; i++) {
		moveBall(line[i]);
		drawBall(line[i]);
	}


}

function drawBall(line) {
	push();

	noStroke();
	fill(line.color);
	ellipse(line.x, line.y, line.width, 10);

	pop();
}

function moveBall(line) {
	line.y += line.speedY;
}
