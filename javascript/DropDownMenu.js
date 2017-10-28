function DropDownMenu(list)
{
	this.sel;  
	this.isPressed = false; 
	this.xCoordinate;
	this.Coordinate;
	
	this.mySelectEvent = function()
	{ 
		var elem = document.getElementById("dropDownList");
		console.log(elem);
		var item = elem.value; 
  		background(200);
  		text("it's a "+ item+"!", 50, 50);
	};

	this.mouseMenu = function(){	
	
		if(this.isPressed == false)	
		{
			
			this.isPressed = true; 
			textAlign(CENTER);
			background(200);
			this.sel = createSelect();
			this.sel.id("dropDownList"); 
			this.xCoordinate = mouseX;
			this.yCoordinate = mouseY; 
			this.sel.position(this.xCoordinate, this.yCoordinate);
			this.sel.size(100,100)
			for(var i=0; i<list.length; i++)
			{
				this.sel.option(list[i]); 
			}

			var elem = document.getElementById("dropDownList").value="";

			this.sel.changed(this.mySelectEvent);
		}
		else if(collidePointRect(mouseX,mouseY,this.xCoordinate,this.yCoordinate, 100,100) && this.isPressed)
		{
			var elem = document.getElementById("dropDownList").value="";
			this.sel.changed(this.mySelectEvent);
		}
		else
		{
			this.isPressed = false; 
			this.sel.remove(); 
		}
	};

}
