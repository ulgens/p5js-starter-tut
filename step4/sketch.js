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
    
    // random color https://p5js.org/reference/#/p5/color
    this.fill_color = color(random(0, 255), random(0,255), random(0,255), random(100, 255));

    this.move = function() {
        this.acc = createVector(0, 0);
        var mouse = createVector(mouseX, mouseY);
        this.acc = mouse.sub(this.pos);
        this.acc.normalize();
        this.acc.mult(1);
        this.vel.add(this.acc);
        // Add friction
        this.vel.mult(0.95);
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