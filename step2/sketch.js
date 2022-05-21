// Define ball variable
var ball;

function setup() {
    // Create the canvas: https://p5js.org/reference/#/p5/createCanvas
    createCanvas(500, 500);
    // Set backround color: https://p5js.org/reference/#/p5/background
    background(200);
    // Create new ball object
    ball = new Ball();

    // random color https://p5js.org/reference/#/p5/color & https://p5js.org/reference/#/p5/fill
    let randomColor = color(random(0, 255), random(0,255), random(0,255), random(100, 255));
    fill(randomColor);
    noStroke();
}

function draw(){
    // Clear background
    background(200);

    // Draw and move ball object
    ball.display();
    ball.move();
}

function Ball(){
    this.pos = createVector(random(width), 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 9.8);

    this.move = function() {
        this.acc.normalize();
        this.acc.mult(0.1);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    this.display = function(){
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }
}
