// makes an image pixel by pixel

// assults your eyes

var testImage;
var red;

function preload() {
	testImage = loadImage("img/water.jpg");
	// noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(500, 500);

	// load up the pixel[] array so we can read colors out of it later

}

function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	fill(255, 255, 255);


	stroke(0, 200, 100, 80);

	testImage.loadPixels();
	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 500; x++) {
		console.log(x);
		for (y = 0; y < 500; y++) {
			var redIn = testImage.pixels[(y * 1000 + x) * 4 + 0];
			var greenIn = testImage.pixels[(y * 1000 + x) * 4 + 1];
			var blueIn = testImage.pixels[(y * 1000 + x) * 4 + 2];

			var redOut, blueOut, greenOut;

			//////////////////
			/// Demo 1: swap channels

			// redOut = blueIn;
			// blueOut = greenIn;
			// greenOut = redIn;


			//////////////////
			// Demo 2: pick output from randomly offset input sample
			// creats scatter effect
			// because we are modifying the image as we work, we will sometimes
			// sample a pixel we've already changed, it would be better
			// to read from one image and write out to a different one
			red = random(-1000, 1000);
			// choose random position for the sample
			var x2 = x + floor(random(-50, 51));
			var y2 = y + floor(random(-50, 51));

			// make sure we don't go outside the image
			x2 = clamp(x2, 0, 500);
			y2 = clamp(y2, 0, 500);

			// use the color from the random position
			redOut = testImage.pixels[(y2 * 500 + x2) * 4 + 0];
			greenOut = testImage.pixels[(y2 * 500 + x2) * 4 + 1];
			blueOut = testImage.pixels[(y2 * 500 + x2) * 4 + 2];



			testImage.pixels[(y * 100 + x) * 4 + 0] = red;
			testImage.pixels[(y * 900 + x) * 4 + 1] = red;
			testImage.pixels[(y * 70 + x) * 4 + 2] = red;
			testImage.pixels[(y * 270 + x) * 4 + 3] = 1110;
		}
	}
	testImage.updatePixels();

	image(testImage, 0, 0, 500, 500);


}

function clamp(v, low, high) {
	if (v < low) return low;
	if (v > high) return high;
	return v;

	//	v = max(v, low);
	//	v = min(v, high);
	//	return v;
}


// download the image
function mouseReleased() {
	console.log("save");
	save();
}
