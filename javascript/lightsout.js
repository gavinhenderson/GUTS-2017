var player;
// Get lightsout div width
var div;
var cw;
var ch;

var poly = [[],[],[]];

function setup(){
	div = document.getElementById('lightsout');
	cw = div.offsetWidth;
	ch = div.offsetHeight;
	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");

	poly[0][0] = createVector(0, 0);
	poly[0][1] = createVector(0, 100);
	poly[0][2] = createVector(200, 400);
	poly[0][3] = createVector(300, 400);
	poly[0][4] = createVector(300, 400);
	poly[0][5] = createVector(400, 400);
	poly[0][6] = createVector(400, 300);
	poly[0][7] = createVector(300, 300);
	poly[0][8] = createVector(300, 0);

	poly[1][0] = createVector(500, 200);
	poly[1][1] = createVector(600, 200);
	poly[1][2] = createVector(600, 300);
	poly[1][3] = createVector(500, 300);

	player = new Player(500,500,25,25, poly);
}

function draw(){
	background(0,120,0);
	fill(0, 0, 255);
	for(i=0; i < poly.length; i++){
		beginShape();
		for(j=0; j < poly[i].length; j++){
			vertex(poly[i][j].x,poly[i][j].y);
		}
		endShape(CLOSE);
	}
	if(keyIsDown(DOWN_ARROW) || keyIsDown(UP_ARROW) 
		|| keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
		player.userInput();
	}
	player.drawPlayer();
}

