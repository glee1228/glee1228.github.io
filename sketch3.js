let playing = false;
let fingers;
let button;
var myCanvas;
function preload() {
  font = loadFont('fonts/조선일보명조.ttf');
  canvasWidth=windowWidth;
  canvasHeight=windowHeight;
}
function setup() {
    frameRate(30);
    myCanvas= createCanvas(300,300) ;
    myCanvas.parent('video');
    // specify multiple formats for different browsers
    fingers = createVideo('assets/video/Nature.mp4');
    input = createInput();
    input.position(300, 300);
    button = createButton('play');
    button.position(input.x + input.width, 65);
    button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
    if (playing) {
        fingers.pause();
        button.html('play');
        console.log('play');
    } else {
        fingers.loop();
        button.html('pause');
        console.log('pause');
    }
    playing = !playing;
}