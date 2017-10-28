//Create server variables
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Create static files
app.use(express.static('public'));
app.use(express.static('html'));
app.use("/p5",express.static('p5'));
app.use("/javascript",express.static('javascript'))

//Serve homepage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//server game page
app.get('/play', function(req,res){
  res.sendFile(__dirname + "/html/lightsout.html");
});

//On a new connection only used to create a room
io.on('connection', function(socket){
  //newRoom event
  socket.on('newRoom', function(roomName){
    createRoom(roomName);
  });
});

//Create a new room
function createRoom(roomName){
  console.log("Created Room: "+ roomName);
  var PlayerCount = 1;

  //Create a room
  var room = io.of(roomName);
  var x = 500;
  var y = 500;
  var Player1 = false;
  var Player2 = false;

  //Room connection function
  room.on('connection',function(socket){
    //Set playerID
    var playerID;
    if (Player1 == false)
    {
        playerID = 1;
        Player1 = true
    }
    else if (Player2 == false)
    {
        playerID = 2;
        Player2 = true;
    }
    else{
        socket.emit('kick');
    }

    socket.on('disconnect', function () {
        if(playerID == 1){
          Player1 = false;
        }
        else if (playerID == 2)
        {
          Player2 = false;
        }
    });

    //var playerID = PlayerCou
    console.log("Player "+playerID + " connected");

    //coordinates setter
    socket.on('setCoordinates', function(coordinates){
      x = coordinates.x;
      y = coordinates.y;
    });

    //coordinates getter
    socket.on('getCoordinates', function(){
      socket.emit('updateCoords',{
        'x': x,
        'y': y
      });
    });

    socket.on('getPlayerNo', function(){
      socket.emit('sendPlayerNo',{
        'playerNo':playerID
      });
    })
  });
}

http.listen(80, function(){
  console.log('listening on localhost:80');
});
