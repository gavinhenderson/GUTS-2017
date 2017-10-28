var player;
// Get lightsout div width
var div;
var cw;
var ch;

var poly = [];

function setup(){
	div = document.getElementById('lightsout');
	cw = div.offsetWidth;
	ch = div.offsetHeight;
	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");

	poly[0] = createVector(0,0);
	poly[1] = createVector(0,100);
	poly[2] = createVector(200, 400);
	poly[3] = createVector(300, 400);
	poly[4] = createVector(300, 0);

	player = new Player(500,500,40,40, poly);
}

function draw(){
	getCoordinates();
	background(0,120,0);
	fill(0, 0, 255);
	beginShape();
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);
	player.userInput();
	player.drawPlayer();
}
