var font;
var font2;
var myCanvas;
let yoff = 0.0; // 2nd dimension of perlin noise
var canvasWidth;
var canvasHeight;
let song;
var dark=false;
function preload() {
  font = loadFont("fonts/STXINWEI.TTF");
  font2 = loadFont('fonts/조선일보명조.ttf');
  soundFormats('mp3', 'ogg');
  song = loadSound('assets/music/bewhy_giukrok.mp3');
  canvasWidth=windowWidth;
  canvasHeight=windowHeight;
}
function setup() {
  frameRate(20);
  myCanvas= createCanvas(windowWidth,windowHeight) ;
  myCanvas.parent('p5Section');
  textFont(font);
  backgroundColor=235;
  fft = new p5.FFT();
  analyzer = new p5.Amplitude();

}

function mousePressed() {

  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
      dark=false;
    song.stop();

  } else {
    dark=true;
    song.play();
  }
}
function drawWave(c,x,thetaX,thetaY,waveHeight,level){
  fill(c[0],c[1],c[2],c[3]);
  // We are going to draw a polygon out of the wave points
  beginShape();
  if(level==0){
    level=0.0001;
  }
  let xoff = x; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, waveHeight-level, waveHeight+level);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += thetaX;
  }
  // increment y dimension for noise
  yoff += thetaY;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
function drawTitle(c){
  noStroke();
  textSize(30);
  // //첫 번째 데이터 이름
  // fill(c[0][0],c[0][1],c[0][2],c[0][3]);
  // text('first',50,50);
  // //두 번째 데이터 이름
  // fill(c[1][0],c[1][1],c[1][2],c[1][3]);
  // text('second',120,50);
  // //세 번째 데이터 이름
  // fill(c[2][0],c[2][1],c[2][2],c[2][3]);
  // text('third',230,50);
  // //네 번째 데이터 이름
  // fill(c[3][0],c[3][1],c[3][2],c[3][3]);
  // text('forth',320,50);
  if(dark==true){
    fill(255,255,255,175);
    text('Bewhy - 记忆录 ',windowWidth*7/10,70);
    drawWords(windowWidth*9/10);

  }
  else{
      drawClick();
  }
}
function drawClick() {
    textFont(font2);
    fill(70);
    textSize(30);
    text('화면을 클릭하면 음악이 재생됩니다',70,90);
    textFont(font);

}
function drawWords(x) {
    textFont(font2);
    textSize(50);
  fill(130);
  text('3', x+10, 100);

  fill(150);
  text('.', x+15, 160);

  fill(170);
  text('1', x+10, 240);

  fill(190);
  text('운', x, 310);

  fill(220);
  text('동', x, 380);

  fill(240);
  text('1', x+10, 470);

  fill(255);
  text('0', x+10, 540);

  fill(220);
  text('0', x+10, 610);

  fill(240);
  text('주', x, 680);

  fill(255);
  text('년', x, 750);

  textFont(font);
}
function draw() {
  // 사운드 쪽
  let level = analyzer.getLevel();
  pluslevel = 1+level;
  // n = pluslevel;
  // nLogn = pluslevel *log(pluslevel);
  // nPow2 = pow(pluslevel,2);
  // nPow3 = pow(pluslevel,3);
  // nPow4 = pow(pluslevel,4);
  // nPow5 = pow(pluslevel,5);
  // twoPowN = pow(2,pluslevel);


  fft.analyze();
  bass = (int)(fft.getEnergy("bass"));
  lowMid = (int)(fft.getEnergy("lowMid"));
  mid = (int)(fft.getEnergy("mid"));
  highMid = (int)(fft.getEnergy("highMid"));
  treble = (int)(fft.getEnergy("treble"));

  print(bass);

  // 애니메이션 쪽
    if(dark==true){
        background(70);
        textSize(150);
        stroke(150);
        fill(255);
        text("小法典",canvasWidth/2-250 , canvasHeight/4+bass*0.5);
        stroke(255);
        fill(70);
        strokeWeight(5);
        text(".",canvasWidth/2+200,canvasHeight/4+bass*0.5);
        fill(255);
        strokeWeight(1);
    }
    else{
        background(235);
        textSize(150);
        stroke(150);
        fill(0);
        text("小法典",canvasWidth/2-250 , canvasHeight/4+bass*0.5);
        stroke(0);
        fill(235);
        strokeWeight(5);
        text(".",canvasWidth/2+200,canvasHeight/4+bass*0.5);
        fill(0);
        strokeWeight(1);
    }



  c = [[87, 66, 102,150],[44, 150, 120,120],[156, 83, 51,90],[15,89,164,60],[192,63,60,30]];
  x = [0.0,0.1,0.2,0.3,0.4];
  waveHeight=[300,350,370,420,480];
  thetaX = 0.01;
  thetaY = 0.01;


  // print('n : ',n,'  n의 3 제곱 : ',nPow3,' n의 4 제곱 : ',nPow4,' n의 5 제곱',nPow5);
  // print('차이',nPow3-n);


  fill(0);

  stroke(255);

  drawWave(c[0],x[0],thetaX,thetaY,waveHeight[0],bass);
  drawWave(c[1],x[1],thetaX+0.01,thetaY,waveHeight[1],lowMid);
  drawWave(c[2],x[2],thetaX+0.03,thetaY,waveHeight[2],mid);
  drawWave(c[3],x[3],thetaX+0.05,thetaY,waveHeight[3],highMid);
  drawWave(c[4],x[4],thetaX+0.06,thetaY,waveHeight[4],treble);
  // print('draw')
    drawTitle(c);
}
function centerCanvas() {
  myCanvas.parent('p5Section');
}
function windowResized() {
  centerCanvas();
}
