//Player sprite object
var player;

//Guard sprite object
var guard;

//Userd to put canvase on page
var div;
var cw;
var ch;

//Tell which player is currently playing
var gameID;

var b = 6;

//polygons drawn to the canvase
var poly = [];

//Rooms on the canvas
var rooms = [];

var Guards;

var connected = false;

var end;  
function setup(){
	//setup the
	div = document.getElementById('lightsout');
	cw = div.offsetWidth;
	ch = div.offsetHeight;

	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");

	//create rooms (used for blackout)
	rooms.push(new Room(cw - 150, ch - 150, 150, 150));
	rooms.push(new Room(cw - 150, ch - 150 -295, 150, 295));
	rooms.push(new Room(cw - 150, ch - 150 -295 - 295, 150, 295));
	rooms.push(new Room(cw - 150 - 290, ch - 265, 290, 265));
	rooms.push(new Room(cw - 150 - 100, ch - 385, 100, 120));
	rooms.push(new Room(cw -150 -100, ch -385 - 60, 100, 60));
	rooms.push(new Room(cw -150 -100, ch -385 - 60 - 245, 100, 245));
	rooms.push(new Room(cw -150 -100, ch -385 - 60 - 245 - 50, 100, 50));
	rooms.push(new Room(cw -150 -100 - 375, ch - 265 - 300, 375, 300));
	rooms.push(new Room(cw -150 - 290 - 570, ch - 265, 570, 265));
	rooms.push(new Room(cw -150 - 290 - 570 - 285, ch - 265, 285, 265));
	rooms.push(new Room(cw - 150, ch - 150, 150, 150));
	rooms.push(new Room(cw -150 - 290 - 570 - 285, ch -740, 670, 475));
	rooms.push(new Room(cw -150 -100 -150, ch -740, 150, 175));
	rooms.push(new Room(cw -150 -100 -150 -175 -50, ch -740, 225, 175));
	rooms.push(new Room(cw -150 -100 -150 -175 -50, ch -740, 50, 50));

	//create walls
	poly.push(makeBox(0, 0, cw, ch));
	poly.push(makeWall(cw - 150, ch - 150, cw - 150, ch));
	poly.push(makeWall(cw - 150, ch - 150, cw - 40, ch - 150)); // HORIZONTAL
	poly.push(makeWall(cw - 150, ch - 395, cw - 150, ch - 150)); // VERTICAL
	poly.push(makeWall(cw - 150, ch - 445, cw - 150, ch - 435)); // VERTICAL
	poly.push(makeWall(cw - 150, ch - 445, cw - 60, ch - 445)); // HORIZONTAL
	poly.push(makeWall(cw - 0, ch - 445, cw - 20, ch - 445)); // HORIZONTAL
	poly.push(makeWall(cw - 150, ch - 695, cw - 150, ch - 445)); // VERTICAL
	poly.push(makeWall(cw - 150, ch - 740, cw - 150, ch - 735)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 690, cw - 150, ch - 690)); // HORIZONTAL
	poly.push(makeWall(cw - 250, ch - 740, cw - 250, ch - 690)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 445, cw - 150, ch - 445)); // HORIZONTAL
	poly.push(makeWall(cw - 250, ch - 690, cw - 250, ch - 525)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 485, cw - 250, ch - 445)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 445, cw - 250, ch - 435)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 395, cw - 250, ch - 385)); // VERTICAL
	poly.push(makeWall(cw - 250, ch - 385, cw - 150, ch - 385)); // HORIZONTAL
	poly.push(makeWall(cw - 250, ch - 385, cw - 250, ch - 265)); // VERTICAL
	poly.push(makeWall(cw - 270, ch - 265, cw - 250, ch - 265)); // HORIZONTAL
	poly.push(makeWall(cw - 500, ch - 265, cw - 305, ch - 265)); // HORIZONTAL
	poly.push(makeWall(cw - 1295, ch - 265, cw - 540, ch - 265)); // HORIZONTAL
	poly.push(makeWall(cw - 440, ch - 265, cw - 440, ch - 0)); // VERTICAL
	poly.push(makeWall(cw - 1010, ch - 265, cw - 1010, ch - 152.5)); // VERTICAL
	poly.push(makeWall(cw - 1010, ch - 112.5, cw - 1010, ch - 0)); // VERTICAL
	poly.push(makeWall(cw - 625, ch - 740, cw - 625, ch - 647.5)); // VERTICAL
	poly.push(makeWall(cw - 625, ch - 607.5, cw - 625, ch - 415)); // VERTICAL
	poly.push(makeWall(cw - 625, ch - 375, cw - 625, ch - 265)); // VERTICAL
	poly.push(makeWall(cw - 400, ch - 740, cw - 400, ch - 565)); // VERTICAL
	poly.push(makeWall(cw - 625, ch - 565, cw - 560, ch - 565)); // HORIZONTAL
	poly.push(makeWall(cw - 520, ch - 565, cw - 340, ch - 565)); // HORIZONTAL
	poly.push(makeWall(cw - 300, ch - 565, cw - 250, ch - 565)); // HORIZONTAL
	poly.push(makeWall(cw - 575, ch - 740, cw - 575, ch - 735)); // VERTICAL
	poly.push(makeWall(cw - 575, ch - 695, cw - 575, ch - 690)); // VERTICAL
	poly.push(makeWall(cw - 625, ch - 690, cw - 575, ch - 690)); // HORIZONTAL
	poly.push(makeWall(cw - 250, ch - 265, cw - 220, ch - 265)); // HORIZONTAL
	poly.push(makeWall(cw - 180, ch - 265, cw - 150, ch - 265)); // HORIZONTAL

	//make player on canvase
	player = new Player(1268,716,20,20, poly);

	//find out which player is playing
	//getPlayerNo();

	//console.log(gameID);
	setTimeout(function(){},2000);
	//console.log(gameID);

	//make guard on canvas
	end = new endPoint();

}

function makeWall(x1, y1, x2, y2){
	temp = [];
	m = (y2 - y1)/(x2 - x1);
	bt = b/2;
	strokeWeight(0);
	if(m == 0){
		temp.push(createVector(x1 - bt, y1 + bt));
		temp.push(createVector(x1 - bt, y1 - bt));
		temp.push(createVector(x2 + bt, y2 - bt));
		temp.push(createVector(x2 + bt, y2 + bt));
	}else if(m == Infinity){
		temp.push(createVector(x1 - bt, y1 - bt));
		temp.push(createVector(x1 + bt, y1 - bt));
		temp.push(createVector(x2 + bt, y2 + bt));
		temp.push(createVector(x2 - bt, y2 + bt));
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

function mouseClicked(){
	if(gameID == 2){
		for(i = 0; i < rooms.length; i++){
			if(rooms[i].collide(mouseX, mouseY)){
				rooms[i].showMenu(mouseX, mouseY);
				return;
			}
		}
	}
}

function draw(){
	background(0,120,0);
	push();
	strokeWeight(0);

	for(i = 0; i < rooms.length; i++){
		rooms[i].draw();
	}
	for(i = 0; i < rooms.length; i++){
		rooms[i].dark(player.x, player.y);
	}

	//console.log("test");
	pop();
	for(i=0; i < poly.length; i++){
		push();
		fill(0, 0, 0);
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

	if(connected){
		for(i=0;i<Guards.length;i++){
			Guards[i].drawGuard();
		}
	}
	console.log(player.x);
	console.log(player.y);

	end.makeSquare(); 
	end.checkCoordinates(player.x, player.y); 


}
