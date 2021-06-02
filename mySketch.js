let width = [10, 25, 50]
let height = [50, 80, 90]
let shape = ["circle", "rectangle"]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	frameRate(2);
	fill(int(random(256)));
	if (random(shape) == "circle") {
		ellipse(int(random(windowWidth)), int(random(windowHeight)), random(width), random(height));
	} else
		rect(int(random(windowWidth)), int(random(windowHeight)), random(width), random(height));
}
