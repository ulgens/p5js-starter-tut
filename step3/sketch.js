// Define balls array
var balls = [];

function setup() {
    // Create the canvas: https://p5js.org/reference/#/p5/createCanvas
    createCanvas(500, 500);
    // Set backround color: https://p5js.org/reference/#/p5/background
    background(200);

    strokeWeight(0);
}

function draw(){
    // Clear background
    background(200);

    for (var k=0; k<balls.length; k++) {
        balls[k].display();
        balls[k].move();
    }
}

function Ball(){
    this.pos = createVector(random(width), 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 9.8);
    this.fill_color = random(255);

    this.move = function() {
        this.acc.normalize();
        this.acc.mult(0.1);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    this.display = function(){
        fill(this.fill_color);
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }
}

function mouseClicked(){
    balls.push(new Ball());
}