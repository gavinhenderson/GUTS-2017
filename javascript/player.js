function Player(x, y, w, h, poly){
	this.s = 10;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.xbound = x + w;
	this.ybound = y + h;
	this.hit = false;
	this.poly = poly

	//poly[0] = createVector(0,0);     // set X/Y position
	//poly[1] = createVector(cw,0);
	//poly[2] = createVector(cw,ch);
	//poly[3] = createVector(0,ch);

	this.userInput = function(){
		// Check left border
		hit = collideRectPoly(this.x - this.s,this.y,this.w,this.h,this.poly)
		if (hit) {
			tempx = this.x - this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,this.poly)
				tempx++;
			}
			this.x = tempx - 1;
		}else if (keyIsDown(LEFT_ARROW)) this.x-=this.s;

		// Check right border
		hit = collideRectPoly(this.x + this.s,this.y,this.w,this.h,this.poly)
		if (hit) {
			tempx = this.x + this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,this.poly)
				tempx--;
			}
			this.x = tempx + 1;
		}else if (keyIsDown(RIGHT_ARROW)) this.x+=this.s;

		// Check top border
		hit = collideRectPoly(this.x,this.y - this.s,this.w,this.h,this.poly)
		if (hit) {
			tempy = this.y - this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,this.poly)
				tempy++;
			}
			this.y = tempy - 1;
		}else if (keyIsDown(UP_ARROW)) this.y-=this.s;

		// Check bot border
		hit = collideRectPoly(this.x,this.y + this.s,this.w,this.h,this.poly)
		if (hit) {
			tempy = this.y + this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,this.poly)
				tempy--;
			}
			this.y = tempy + 1;
		}else if (keyIsDown(DOWN_ARROW)) this.y+=this.s;
	}

	this.drawPlayer = function(){
		push();
		fill(0,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
