function Player(x, y, w, h, poly){
	this.s = 10;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.xbound = x + w;
	this.ybound = y + h;
	this.hit = false;
	this.poly = poly;

	this.userInput = function(){
		polylist = [];
		for(i = 0; i < this.poly.length; i++){
			hitl = collideRectPoly(this.x - this.s,this.y,this.w,this.h,this.poly[i])
			hitr = collideRectPoly(this.x + this.s,this.y,this.w,this.h,this.poly[i])
			hitu = collideRectPoly(this.x,this.y - this.s,this.w,this.h,this.poly[i])
			hitd = collideRectPoly(this.x,this.y + this.s,this.w,this.h,this.poly[i])
			if(hitl || hitr || hitu || hitd){
				polylist.push(poly[i]);
			}
		}
		if(polylist.length != 0){
			for(i = 0; i < polylist.length; i++){
				this.collisions(polylist[i]);
			}
		}else{
			if (keyIsDown(LEFT_ARROW)) this.x-=this.s;
			if (keyIsDown(RIGHT_ARROW)) this.x+=this.s;
			if (keyIsDown(UP_ARROW)) this.y-=this.s
			if (keyIsDown(DOWN_ARROW)) this.y+=this.s
		}
		setCoordinates(this.x, this.y);
	}

	this.collisions = function(poly){
		// Check left border
		hit = collideRectPoly(this.x - this.s,this.y,this.w,this.h,poly)
		if (hit) {
			tempx = this.x - this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,poly)
				tempx++;
			}
			this.x = tempx - 1;
		}else if (keyIsDown(LEFT_ARROW)) this.x-=this.s;

		// Check right border
		hit = collideRectPoly(this.x + this.s,this.y,this.w,this.h,poly)
		if (hit) {
			tempx = this.x + this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,poly)
				tempx--;
			}
			this.x = tempx + 1;
		}else if (keyIsDown(RIGHT_ARROW)) this.x+=this.s;

		// Check top border
		hit = collideRectPoly(this.x,this.y - this.s,this.w,this.h,poly)
		if (hit) {
			tempy = this.y - this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,poly)
				tempy++;
			}
			this.y = tempy - 1;
		}else if (keyIsDown(UP_ARROW)) this.y-=this.s;

		// Check bot border
		hit = collideRectPoly(this.x,this.y + this.s,this.w,this.h,poly)
		if (hit) {
			tempy = this.y + this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,poly)
				tempy--;
			}
			this.y = tempy + 1;
		}else if (keyIsDown(DOWN_ARROW)) this.y+=this.s;
	}

	this.drawPlayer = function(){
		getCoordinates();
		push();
		fill(0,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
