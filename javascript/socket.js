function setCoordinates(x,y){
	//console.log("setting coords");
	myRoom.emit('setCoordinates',{'x':x,'y':y});
}

function getCoordinates(){
	//console.log("getting coords")
	myRoom.emit('getCoordinates')
}

function createGuard(id){
	//console.log(gameID + "is trying to make a guard")
	if(gameID==1) {
		//myRoom.emit('createGuard');
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

myRoom.on('sendTime',function(timeLeft){
	localTimer = timeLeft;
})

myRoom.on('updateCoords',function(coords){
  player.x = coords.x;
  player.y = coords.y;
  //console.log(coords);
});

myRoom.on('sendGuard',function(guardData){
	//console.log(guardData);
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
		//console.log("player id sent back");
    gameID = playerID;
		//make guard on canvas
		Guards = [];
		Guards.push(new Guard(500, 425, 30, 30, poly,[[500, 425],[200,200],[100,100],[300,50],[300,200], [635, 440], [635,50]],0));

		Guards.push(new Guard(200, 200, 20, 20, poly,[[200,200],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],1));
		Guards.push(new Guard(221, 221, 20, 20, poly,[[221,221],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],2));
		Guards.push(new Guard(242, 242, 20, 20, poly,[[242,242],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],3));
		Guards.push(new Guard(263, 263, 20, 20, poly,[[263,263],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],4));
		Guards.push(new Guard(284, 284, 20, 20, poly,[[284,284],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],5));
		Guards.push(new Guard(305, 305, 20, 20, poly,[[305,305],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],6));
		Guards.push(new Guard(326, 326, 20, 20, poly,[[326,326],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],7));
		Guards.push(new Guard(347, 347, 20, 20, poly,[[347,347],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],8));
		Guards.push(new Guard(368, 368, 20, 20, poly,[[368,368],[100,100],[300,50],[350, 100], [740, 100], [740, 335], [300,335]],9));

		Guards.push(new Guard(755, 470, 20, 20, poly, [[755, 470], [755, 600], [555, 700], [330, 490], [755, 500],],10)); // ---------------- DOOR 5 - [755, 470]
		Guards.push(new Guard(265, 600, 20, 20, poly, [[285, 600], [700, 600], [285, 700]],11)); // ---------------- DOOR 6 - [265, 600]

		Guards.push(new Guard(265, 600, 20, 20, poly, [[285, 550], [700, 550], [285, 550]],12)); // ---------------- DOOR 6 - [265, 600]
		Guards.push(new Guard(265, 600, 20, 20, poly, [[285, 525], [700, 525], [285, 525]],13)); // ---------------- DOOR 6 - [265, 600]

		Guards.push(new Guard(265, 600, 20, 20, poly, [[285, 650], [700, 650], [285, 650]],14)); // ---------------- DOOR 6 - [265, 600]
		Guards.push(new Guard(785, 490, 20, 20, poly, [[755, 570], [755, 700], [555, 700], [330, 590], [755, 600],],15)); // ---------------- DOOR 5 - [755, 470]
		Guards.push(new Guard(755, 470, 20, 20, poly, [[755, 570], [755, 700], [705, 700], [480, 590], [405, 600],],16)); // ---------------- DOOR 5 - [755, 470]

		Guards.push(new Guard(265, 600, 20, 20, poly, [[265, 600], [765, 600]],17)); // ---------------- DOOR 6 - [265, 600]


		Guards.push(new Guard(1030, 315, 20, 20, poly, [[1030, 315], [1250, 315], [700, 315]],18)); // ---------------- DOOR 8 - [1030, 315]
		
		Guards.push(new Guard(960, 175, 20, 20, poly, [[965, 175], [960, 25], [960, 450]],19)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(950, 125, 25, 25, poly, [[975, 125], [950, 125],],20)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(910, 55, 20, 20, poly, [[925, 55], [920, 35],],21)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(880, 55, 20, 20, poly, [[890, 55], [910, 35],],22)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(960, 75, 20, 20, poly, [[960, 75], [940, 5],],23)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(990, 75, 25, 25, poly, [[985, 75], [965, 5],],24)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(880, 150, 20, 20, poly, [[890, 150], [910, 130],],25)); // ---------------- DOOR 4 - [960, 175]
		Guards.push(new Guard(910, 65, 20, 20, poly, [[910, 85], [910, 65],],26)); // ---------------- DOOR 4 - [960, 175]


		Guards.push(new Guard(1073, 470, 35, 35, poly, [[1073, 475], [1073, 690], [1073, 380]],27)); // ---------------- DOOR 14 - [1080, 470]
		Guards.push(new Guard(995, 470, 10, 10, poly, [[995, 475], [995, 720],],28)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(985, 480, 10, 10, poly, [[985, 480], [985, 710],],29)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(975, 460, 10, 10, poly, [[975, 490], [985, 730],],30)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(935, 460, 10, 10, poly, [[935, 490], [965, 730],],31)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(900, 485, 10, 10, poly, [[900, 485], [900, 690], [900, 480]],32)); // ---------------- DOOR 14 - [1080, 470]
		Guards.push(new Guard(880, 490, 10, 10, poly, [[880, 490], [880, 700], [880, 490]],33)); // ---------------- DOOR 14 - [1080, 470]
		Guards.push(new Guard(900, 485, 10, 10, poly, [[900, 485], [900, 690], [900, 480]],34)); // ---------------- DOOR 14 - [1080, 470]
		Guards.push(new Guard(920, 481, 10, 10, poly, [[920, 481], [920, 686], [920, 486]],35)); // ---------------- DOOR 14 - [1080, 470]
		Guards.push(new Guard(995, 690, 10, 10, poly, [[975, 690], [1095, 715],],36)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(985, 700, 10, 10, poly, [[965, 705], [1085, 725],],37)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(975, 680, 10, 10, poly, [[955, 665], [1085, 685],],38)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(955, 690, 10, 10, poly, [[935, 690], [1055, 715],],36)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(945, 700, 10, 10, poly, [[925, 705], [1045, 725],],37)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(935, 680, 10, 10, poly, [[915, 665], [1045, 685],],38)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(995, 510, 10, 10, poly, [[975, 510], [1095, 535],],39)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(985, 525, 10, 10, poly, [[965, 525], [1085, 545],],40)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(975, 590, 10, 10, poly, [[955, 485], [1085, 505],],41)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(955, 510, 10, 10, poly, [[935, 510], [1055, 535],],42)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(945, 520, 10, 10, poly, [[925, 525], [1045, 545],],43)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(935, 500, 10, 10, poly, [[915, 485], [1045, 505],],44)); // ---------------- DOOR 13 - [995, 470]
		Guards.push(new Guard(1073, 570, 35, 35, poly, [[1073, 575], [1073, 690], [1073, 480]],45)); // ---------------- DOOR 14 - [1080, 470]


		Guards.push(new Guard(1100, 245, 20, 20, poly, [[1100, 245], [1100, 75]],46)); // ---------------- DOOR 7 - [1030, 225]
		Guards.push(new Guard(1060, 75, 20, 20, poly, [[1060, 75], [1060, 245]],47)); // ---------------- DOOR 7 - [1030, 225]

		Guards.push(new Guard(1245, 245, 20, 20, poly, [[1245, 245]],48)); // ---------------- DOOR 10 - [1245, 285]
		Guards.push(new Guard(1180, 15, 20, 20, poly, [[1180, 15]],49)); // ---------------- DOOR 11 - [1130, 15]


		// Guards.push(new Guard(935, 460, 10, 10, poly, [[965, 460,] [995, 460]],39)); // ---------------- DOOR 13 - [995, 470]

		// Guards.push(new Guard(900, 485, 10, 10, poly, [[900, 485], [1105, 485], [895, 485]]40)); // ---------------- DOOR 14 - [1080, 470]
		// Guards.push(new Guard(880, 490, 10, 10, poly, [[880, 490], [1090, 490], [880, 490]],41)); // ---------------- DOOR 14 - [1080, 470]
		// Guards.push(new Guard(900, 485, 10, 10, poly, [[900, 485], [900, 690], [900, 480]],42)); // ---------------- DOOR 14 - [1080, 470]
		// Guards.push(new Guard(920, 481, 10, 10, poly, [[920, 481], [920, 686], [920, 486]],43)); // ---------------- DOOR 14 - [1080, 470]

		// Guards.push(new Guard(670, 100, 20, 20, poly, [[670, 100]],2)); // ---------------- DOOR 1 - [670, 100]
		// Guards.push(new Guard(670, 335, 20, 20, poly, [[670, 335]],3)); // ---------------- DOOR 2 - [670, 335]
		// Guards.push(new Guard(740, 175, 20, 20, poly, [[740, 175]],4)); // ---------------- DOOR 3 - [740, 175]
		// Guards.push(new Guard(960, 175, 20, 20, poly, [[960, 175]],5)); // ---------------- DOOR 4 - [960, 175]
		// Guards.push(new Guard(755, 470, 20, 20, poly, [[755, 470]],6)); // ---------------- DOOR 5 - [755, 470]
		// Guards.push(new Guard(265, 600, 20, 20, poly, [[265, 600]],7)); // ---------------- DOOR 6 - [265, 600]
		// Guards.push(new Guard(1030, 225, 20, 20, poly, [[1030, 225]],8)); // ---------------- DOOR 7 - [1030, 225]
		// Guards.push(new Guard(1030, 315, 20, 20, poly, [[1030, 315]],9)); // ---------------- DOOR 8 - [1030, 315]
		// Guards.push(new Guard(1130, 315, 20, 20, poly, [[1130, 315]],10)); // ---------------- DOOR 9 - [1130, 315]
		// Guards.push(new Guard(1245, 285, 20, 20, poly, [[1245, 285]],11)); // ---------------- DOOR 10 - [1245, 285]
		// Guards.push(new Guard(1130, 15, 20, 20, poly, [[1130, 15]],12)); // ---------------- DOOR 11 - [1130, 15]
		// Guards.push(new Guard(1260, 580, 20, 20, poly, [[1260, 580]],13)); // ---------------- DOOR 12 - [1260, 580]
		// Guards.push(new Guard(995, 470, 20, 20, poly, [[995, 470]],14)); // ---------------- DOOR 13 - [995, 470]
		// Guards.push(new Guard(1080, 470, 20, 20, poly, [[1080, 470]],15)); // ---------------- DOOR 14 - [1080, 470]
		// Guards.push(new Guard(1260, 580, 20, 20, poly, [[1260, 580]],16)); // ---------------- DOOR 15 - [1260, 580]


		connected = true;
    // Everything else

});

myRoom.on('kick',function(){
	document.location.href="/";
});
