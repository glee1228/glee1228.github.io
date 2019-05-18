// Global Variables
var squareRot = 1;
var pos = 25;
var randomColorA = random(255);
var randomColorB = random(255);
var randomColorC = random(255);

var fontRegular;


// Functions
function mouseWheel(event) {
  //println(event.delta);
  pos += event.delta;
  posRev = height - 10 - pos;
}

function scrollDown(){

  textSize(18);
  textFont("Helvetica");
  fill(255);
  text("SCROLL", 22, 130);
  text("DOWN", 22, 150);
  text("↓", 22, 170);
}


function setup() {
  createCanvas(474, windowHeight);
  rectMode(CENTER);
  c = color(random(255), 23, 255);
}


function draw() {

  background(220);

  //Rotation Rect Line
  push();
  translate(width / 2, height / 2);
  squareRot = squareRot + 1 ;
  rotate(radians(squareRot));
  noStroke();
  fill(mouseX - mouseY, 0, 0);
  rect(0, 0, 10, 240);
  pop();


 // Big Square
  push();
  noStroke();40
  fill(pos);
  rect(width / 2, height / 2, 100 + pos, 100 + pos);
  pop();


 // Lines Up and Down
  noStroke();
  colorMode(HSB, 255);

  fill(c);
  rect(width / 2 - 35, pos - 20, 35, pos);
  value = hue(c); // Sets 'value' to "0"
  fill(value);
  rect(width / 2, height, 35, pos + 20);
  println(pos);
  if (pos > 800) {
    fill(c);
    //Rect Black from Height
    rect(0, -370, width - 20, pos + 20);
    ellipse(width/2, posRev, 40, 40);
  }

  scrollDown();

  if (pos < -700){
    fill(255);
    text("SCROLL", 280, 130);
    textSize(46);
    text("DOWN!", 280, 170);
    text("↓", 280, 210);

  }

  if (pos > 1800){
    fill(c);
    textSize(22);
    text("KEEP", 268,  height - 280);
    text("SCROLLING ↓", 268,  height - 260 );
  }

  if (pos > 3700){
    fill(255);
    textSize(50);
    text("OK", 22, height - 110);
    text("STOP!", 22, height - 60);
    textSize(16);
    text(":)", 22, height - 30);
  }


}