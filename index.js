var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
app.use(express.static('html'));
app.use("/p5",express.static('p5'));
app.use("/javascript",express.static('javascript'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('newRoom', function(roomName){
    createRoom(roomName);
    console.log('this ran');
  });
  socket.on('disconnect', function(){
  });
});

function createRoom(roomName){
  console.log(roomName);
  var room = io.of(roomName);
  room.on('connection',function(socket){
    console.log("User connected to "+roomName);
    socket.on('disconnect', function(){
      console.log("User disconnect from "+roomName);
    });
  });
}

http.listen(80, function(){
  console.log('listening on *:3000');
});
