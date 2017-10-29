function setCoordinates(x,y){
	//console.log("setting coords");
	myRoom.emit('setCoordinates',{'x':x,'y':y});
}

function getCoordinates(){
	//console.log("getting coords")
	myRoom.emit('getCoordinates')
}

function createGuard(id){
	console.log(gameID + "is trying to make a guard")
	if(gameID==1) {
		myRoom.emit('createGuard');
	}
}

function setGuard(x,y,id){
	if(gameID==1){
		myRoom.emit('setGuard',{
			'x': x,
			'y': y,
			'id': id
		});
	}
}

function getGuard(id){
	myRoom.emit('getGuard',{'id':id});
}

myRoom.on('updateCoords',function(coords){
  player.x = coords.x;
  player.y = coords.y;
  //console.log(coords);
});

myRoom.on('sendGuard',function(guardData){
	console.log(guardData);
	Guards[guardData.id].x = guardData.x;
	Guards[guardData.id].y = guardData.y;
})

function getPlayerNo(){
	myRoom.emit('getPlayerNo');
  //console.log('ID: ' + id);
//});
}

//myRoom.on('sendPlayerNo',function(pNo){
	//gameID = pNo.playerNo;
//});


myRoom.on('getPlayerID', function(playerID) {
		console.log("player id sent back");
    gameID = playerID;
		//make guard on canvas
		Guards = [];
		Guards.push(new Guard(300, 300, 20, 20, poly,[[200,200],[100,100],[300,50],[300,200], [645, 440], [645,50]],0));
		Guards.push(new Guard(200, 200, 20, 20, poly,[[200,200],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],1));
		Guards.push(new Guard(670, 100, 20, 20, poly, [[670, 100]],2)); // ---------------- DOOR 1
		Guards.push(new Guard(670, 335, 20, 20, poly, [[670, 335]],3)); // ---------------- DOOR 2
		Guards.push(new Guard(740, 175, 20, 20, poly, [[740, 175]],4)); // ---------------- DOOR 3
		Guards.push(new Guard(960, 175, 20, 20, poly, [[960, 175]],5)); // ---------------- DOOR 4
		Guards.push(new Guard(755, 470, 20, 20, poly, [[755, 470]],6)); // ---------------- DOOR 5
		Guards.push(new Guard(265, 600, 20, 20, poly, [[265, 600]],7)); // ---------------- DOOR 6
		Guards.push(new Guard(1030, 225, 20, 20, poly, [[1030, 225],8])); // ---------------- DOOR 7
		Guards.push(new Guard(1030, 315, 20, 20, poly, [[1030, 315]],9)); // ---------------- DOOR 8
		Guards.push(new Guard(1130, 315, 20, 20, poly, [[1130, 315]],10)); // ---------------- DOOR 9
		Guards.push(new Guard(1245, 285, 20, 20, poly, [[1245, 285]],11)); // ---------------- DOOR 10
		Guards.push(new Guard(1130, 15, 20, 20, poly, [[1130, 15]],12)); // ---------------- DOOR 11
		Guards.push(new Guard(1260, 580, 20, 20, poly, [[1260, 580]],13)); // ---------------- DOOR 12
		Guards.push(new Guard(995, 470, 20, 20, poly, [[995, 470]],14)); // ---------------- DOOR 13
		Guards.push(new Guard(1080, 470, 20, 20, poly, [[1080, 470]],15)); // ---------------- DOOR 14
		Guards.push(new Guard(1260, 580, 20, 20, poly, [[1260, 580]],16)); // ---------------- DOOR 15
		connected = true;
    // Everything else

});

myRoom.on('kick',function(){
	document.location.href="/";
});
