function setCoordinates(x,y){
	myRoom.emit('setCoordinates',{'x':x,'y':y});
}

function getCoordinates(){
	myRoom.emit('getCoordinates')
}

myRoom.on('updateCoords',function(coords){
  player.x = coords.x;
  player.y = coords.y;
  console.log(coords);
});
