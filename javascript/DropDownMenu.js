  var sel;  
  var isPressed; 
  var xCoordinate;
var yCoordinate; 
function setup() {
  createCanvas(700, 700);
  isPressed = false; 
}

function mySelectEvent() {
  var item = sel.value();
  background(200);
  text("it's a "+item+"!", 50, 50);
}

function mouseClicked()
{
	console.log(isPressed);
	

	if(isPressed == false)	
	{
		
		isPressed = true; 
		textAlign(CENTER);
		background(200);
		sel = createSelect();
		xCoordinate = mouseX;
		yCoordinate = mouseY; 
		sel.position(xCoordinate, yCoordinate);
		sel.size(100,100)
		sel.option('this');
		sel.option('shit');
		sel.option('works');

		sel.changed(mySelectEvent);
	}
	else if(collidePointRect(mouseX,mouseY,xCoordinate,yCoordinate, 100,100) && isPressed)
	{
		sel.changed(mySelectEvent);
	}
	else
	{
		isPressed = false; 
		sel.remove(); 
	}
}



function DropDownMenu()
{
	this.mouseClicked = function(){	
		
	};
}