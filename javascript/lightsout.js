var player;
// Get lightsout div width
var div;
var cw;
var ch;

function setup(){
	div = document.getElementById('lightsout');
	cw = div.offsetWidth;
	ch = div.offsetHeight;
	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");

	player = new Player(500,500,40,40);
}

function draw(){
	background(0,120,0);
	player.userInput();
	player.drawPlayer();
}