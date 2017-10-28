function setCoordinates(x,y){
	//console.log("setting coords");
	myRoom.emit('setCoordinates',{'x':x,'y':y});
}

function getCoordinates(){
	//console.log("getting coords")
	myRoom.emit('getCoordinates')
}

myRoom.on('updateCoords',function(coords){
  player.x = coords.x;
  player.y = coords.y;
  //console.log(coords);
});

function getPlayerNo(){
	myRoom.emit('getPlayerNo');
}

myRoom.on('sendPlayerNo',function(pNo){
	gameID = pNo.playerId;
});
