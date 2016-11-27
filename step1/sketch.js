function setup() {
    // Create the canvas: https://p5js.org/reference/#/p5/createCanvas
    createCanvas(500, 500);
    // Set backround color: https://p5js.org/reference/#/p5/background
    background(200);
    // Remove borders from shapes: https://p5js.org/reference/#/p5/stroke
    strokeWeight(0);
    // Make all objects red: https://p5js.org/reference/#/p5/fill
    fill('red');
}

function draw(){
    // Nothing to draw yet.
}

function mouseClicked(){
    // Create an ellipse with random coordinates: https://p5js.org/reference/#/p5/ellipse
    ellipse(random(width), random(height), 50, 50);
}