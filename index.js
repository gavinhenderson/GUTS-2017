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

  //Room connection function
  room.on('connection',function(socket){
    var playerID = PlayerCount;
    PlayerCount ++;
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
        'playerNo':playerId
      });
    })
  });
}

http.listen(80, function(){
  console.log('listening on localhost:80');
});
