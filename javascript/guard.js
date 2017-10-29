function Guard(x, y, w, h, poly,path,id){
  this.s = 10;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.xbound = x + w;
  this.ybound = y + h;
  this.hit = false;
  this.poly = poly;
  this.path = path;
  //console.log(path)
  this.currentTarget = 0;
  this.id = id;
  createGuard();



  this.drawGuard = function(){
    if(collidePointRect(player.x,player.y,this.x,this.y,this.w,this.h)){
      alert("Game over u lose");
      window.location.href = "/";
    }

    if(gameID==1){
      if(this.currentTarget>=this.path.length){
        this.currentTarget=0;
      }

      if (this.x<path[this.currentTarget][0])
      {
        this.x += 2;
      }
      else if (this.x>path[this.currentTarget][0])
      {
        this.x -= 1.5;
      }
      else if (this.x==path[this.currentTarget][0]) {
        this.x = path[this.currentTarget][0];
      }

      if (this.y<path[this.currentTarget][1]){
        this.y += 2;
      }
      else if (this.y>path[this.currentTarget][1]){
        this.y -= 1.5;
      }
      else if (this.y==path[this.currentTarget][1]) {
        this.y = path[this.currentTarget][1];
      }

      if(this.x==path[this.currentTarget][0] && this.y==path[this.currentTarget][1]){
        this.currentTarget++;
      }
      setGuard(this.x,this.y,this.id);
    }
    else if(gameID==2) {
      getGuard(this.id);
      //console.log("test");
      //console.log(this.x,this.y);
    }
    //console.log("this test")

    push();
		fill(0,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
