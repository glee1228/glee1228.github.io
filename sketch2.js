var img;
var arraylist = [];
var resMax = 24;


function preload(){
	img = loadImage("assets/img/amsal.jpeg");
}

function setup() {
	frameRate(60);

	var sc = 1;
	canvas=createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	pixelDensity(1);
	scale(sc);

	img.resize(windowWidth, windowHeight);
	image(img,0,0);

	var d = pixelDensity();
	var w = d*img.width*sc;
	var h = d*img.height*sc;

	loadPixels();
	background(0);

	var count = 0;

	var colorRange = 255;
	colorRange = 256-colorRange;

	for(var res = 1; res < resMax; res++){
		var newPixels = [];
		for (var i = 0; i<w; i++){
			for(var n =0; n<h; n++){
				newPixels[(n*w + i)*4] = round(pixels[floor((floor(n/res)*res*w + i)/res)*res*4]/colorRange)*colorRange;
				newPixels[(n*w + i)*4+1] = round(pixels[floor((floor(n/res)*res*w + i)/res)*res*4+1]/colorRange)*colorRange;
				newPixels[(n*w + i)*4+2] = round(pixels[floor((floor(n/res)*res*w + i)/res)*res*4+2]/colorRange)*colorRange;
				newPixels[(n*w + i)*4+3] = 255;
			}
		}
		append(arraylist,newPixels.slice(0));
		// console.log(newPixels);
	}
	// console.log(arraylist.length);
}

function draw() {
	var year = select('h1');
	var yearText = year.elt.textContent;
	// console.log(yearText%(resMax-1));
	var flag = parseInt((yearText-1900)/5);
	// console.log(pixels.length);
	var arrlen= arraylist.length-1;
	for(var i = 0; i<pixels.length; i++){
		pixels[i] = arraylist[arrlen-flag][i];

	}
  updatePixels();
}