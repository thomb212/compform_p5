var line;

function setup() {
	createCanvas(800, 500);

	line = [];
	for (var i = 0; i < 1000; i++) {

		line[i] = {};
		line[i].x = random(width);
		line[i].y = i + random(0, 500);
		line[i].speedY = random(5, 10);
		line[i].color = color(random(255), random(255), random(255));
		line[i].width = 1;
	}
}

function draw() {
	for (var i = 0; i < line.length; i++) {
		moveTree(line[i]);
		drawTree(line[i]);
	}


}

function drawTree(line) {
	push();

	noStroke();
	fill(line.color);
	ellipse(line.x, line.y, line.width, 10);

	pop();
}

function moveTree(line) {
	line.y += line.speedY;
	line.width += abs(random(5, 10));
}
