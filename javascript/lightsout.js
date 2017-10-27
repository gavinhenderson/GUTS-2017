var room;

function setup(){
	console.log("Start");	
	// Get lightsout div width
	var div = document.getElementById('lightsout');
	var cw = div.offsetWidth;
	var ch = div.offsetHeight;
	console.log(ch);	
	console.log(cw);	

	// Create canvas of div width
	var c = createCanvas(cw, ch);
	c.parent("lightsout");
	background(0,120,0);	

	
	//paint();

	console.log("End");
}
