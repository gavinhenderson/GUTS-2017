function Guard(x, y, w, h, poly,path){
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
  console.log(path)
  this.currentTarget = 0;



  this.drawGuard = function(){
    if(this.currentTarget>=this.path.length){
      this.currentTarget=0;
    }

    if (this.x<path[this.currentTarget][0])
    {
      this.x += 1;
    }
    else if (this.x>path[this.currentTarget][0])
    {
      this.x -= 1;
    }
    else if (this.x==path[this.currentTarget][0]) {
      this.x = path[this.currentTarget][0];
    }

    if (this.y<path[this.currentTarget][1]){
      this.y += 1;
    }
    else if (this.y>path[this.currentTarget][1]){
      this.y -= 1;
    }
    else if (this.y==path[this.currentTarget][1]) {
      this.y = path[this.currentTarget][1];
    }

    if(this.x==path[this.currentTarget][0] && this.y==path[this.currentTarget][1]){
      this.currentTarget++;
    }
    //this.y += 1;
    push();
		fill(255,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
