function setup() {
	createCanvas(windowWidth, windowHeight);

	noStroke();
	fill(255, 255, 255);
}

function draw() {
	background(40, 40, 40);

	var beat = random(0, 600);
	drawGrass(0, 300, width / 2, beat);
	drawGrass(550, 300, width / 2, -beat);
}

function drawGrass(left, top, width, height) {
	// loop from the left to the right, one pixel per step
	for (var x = left; x < left + width; x++) {
		stroke(random(0, 255), random(0, 255), 220);
		fill(random(0, 255), random(0, 255), 220);
		// x and y are the base of the blade of grass
		var y = top;

		// height of the grass
		// pick lowest of three "rolls" to bias strongly towards short blades
		// with occasional long ones
		var bladeHeight = min(random(0, height), random(0, height), random(0, height));
		bladeHeight = random(0, height);

		// horizontal offset of top of blade relative to base
		// average two "rolls" to bias towards middle
		var bladeLean = (random(-1, 1) + random(-1, 1)) * 0.4;

		// scale lean by height so that shorter blades aren't more leany
		bladeLean = bladeLean * bladeHeight;

		// scaling factor to to taste
		bladeLean = bladeLean * 10;

		// draw the grass
		line(x, y, x + bladeLean, y - bladeHeight);
		noStroke();
		ellipse(x + bladeLean, y - bladeHeight, 10, 10);

	}
}
