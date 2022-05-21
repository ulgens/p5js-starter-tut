function setup() {
    // Create the canvas: https://p5js.org/reference/#/p5/createCanvas
    createCanvas(500, 500);
    // Set backround color: https://p5js.org/reference/#/p5/background
    background(200);
    // Remove borders from shapes: https://p5js.org/reference/#/p5/stroke
    strokeWeight(0);
}

function draw(){
    // Nothing to draw yet.
}

function mouseClicked(){
    // Create an ellipse with random coordinates https://p5js.org/reference/#/p5/ellipse
    
    // random color https://p5js.org/reference/#/p5/color & https://p5js.org/reference/#/p5/fill
    let randomColor = color(random(0, 255), random(0,255), random(0,255), random(100, 255));
    fill(randomColor);
    noStroke();
    ellipse(random(width), random(height), 50, 50);
}