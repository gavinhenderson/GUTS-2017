//call this in draw command
function endPoint()
{
	this.xEndPoint = 10; //set the x end point of the finish
	this.yEndPoint =710;  //set the y end point of the finish
	this.heightEndPoint = 30; //set the height of the finish
	this.widthEndPoint = 30; //set the width of the end point

//make rectangle to mark
this.makeSquare = function()
{
	push();
	fill(255,215,0);
	rect(this.xEndPoint,this.yEndPoint,this.heightEndPoint,this.widthEndPoint);
	pop();

};

//function to compare co-ordinates
this.checkCoordinates = function(x,y)
{
	if(collidePointRect(x,y,this.xEndPoint,this.yEndPoint,this.widthEndPoint,this.heightEndPoint)){ //if the player is in the box
		alert("GAME WON");//do something cos its finished!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		window.location.href = "/";
	}

};

}
