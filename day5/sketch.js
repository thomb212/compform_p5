var squareX = 150;
var squareY = 150;
var squareSize = 300;
var squareS = 800;
var squareH = 100;

function setup() {
	createCanvas(800, 800);
	noLoop();
	noStroke();
	squareH = random(0, 300);
	squareX =

}


function draw() {
	background(255);

	tunnel();

}


function tunnel() {

	for (var i = 0; i < 100; i++) {
		rectMode(CENTER);
		colorMode(HSB);

		fill(squareH, 10 * i, 255 / i);
		//ellipse(squareX * 1, 190, squareSize / i, squareSize / i);
		rect(squareX * 1, squareY / 1, squareSize / i, squareSize / i);

	}
}
