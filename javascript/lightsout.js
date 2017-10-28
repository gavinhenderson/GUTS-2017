var player;
// Get lightsout div width
var div;
var cw;
var ch;
var gameID;

var b = 6;

var poly = [];

function setup(){
	div = document.getElementById('lightsout');
	cw = div.offsetWidth;
	ch = div.offsetHeight;
	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");

	poly.push(makeBox(0, 0, cw, ch));
	poly.push(makeWall(cw - 150, ch - 150, cw - 150, ch));

	player = new Player(500,500,20,20, poly);
	getPlayerNo();
}

function makeWall(x1, y1, x2, y2){
	temp = [];
	m = (y2 - y1)/(x2 - x1);
	bt = b/2;
	if(m == 0){
		temp.push(createVector(x1, y1 - bt));
		temp.push(createVector(x1, y1 + bt));
		temp.push(createVector(x2, y2 + bt));
		temp.push(createVector(x2, y2 - bt));
	}else if(m == Infinity){
		temp.push(createVector(x1 - bt, y1));
		temp.push(createVector(x1 + bt, y1));
		temp.push(createVector(x2 + bt, y2));
		temp.push(createVector(x2 - bt, y2));
	}
	return temp;
}

function makeBox(x, y, w, h){
	temp = [];
	bt = b/2;
	temp.push(createVector(x + bt, y + bt));
	temp.push(createVector(x + w - bt, y + bt));
	temp.push(createVector(x + w - bt, y + h - bt));
	temp.push(createVector(x + bt, y + h - bt));
	temp.push(createVector(x + bt, y - bt));
	temp.push(createVector(x - bt, y - bt));
	temp.push(createVector(x - bt, y + h + bt));
	temp.push(createVector(x + w + bt, y + h + bt));
	temp.push(createVector(x + w + bt, y - bt));
	temp.push(createVector(x - bt, y - bt));
	return temp;
}

function draw(){
	background(0,120,0);
	push();
	fill(255);
	strokeWeight(b);
	rect(cw - 150, ch - 150, 150, 150);
	rect(cw - 150, ch - 150 -295, 150, 295);
	rect(cw - 150, ch - 150 -295 - 295, 150, 295);
	fill(255,0,0);
	rect(cw - 150 - 290, ch - 265, 290, 265);
	rect(cw - 150 - 100, ch - 385, 100, 120);
	fill(255);
	rect(cw -150 -100, ch -385 - 60, 100, 60);
	rect(cw -150 -100, ch -385 - 60 - 245, 100, 245);
	rect(cw -150 -100, ch -385 - 60 - 245 - 50, 100, 50);
	rect(cw -150 -100 - 375, ch - 265 - 300, 375, 300);
	rect(cw -150 - 290 - 570, ch - 265, 570, 265);
	rect(cw -150 - 290 - 570 - 285, ch - 265, 285, 265);
	fill(255);
	rect(cw - 150, ch - 150, 150, 150);
	pop();
	for(i=0; i < poly.length; i++){
		push();
		fill(0, 0, 255);
		beginShape();
		for(j=0; j < poly[i].length; j++){
			vertex(poly[i][j].x,poly[i][j].y);
		}
		endShape(CLOSE);
		pop();
	}
	if(gameID == 1){
		if(keyIsDown(DOWN_ARROW) || keyIsDown(UP_ARROW) 
			|| keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)){
			player.userInput();
		}
	}
	player.drawPlayer(gameID);
}
