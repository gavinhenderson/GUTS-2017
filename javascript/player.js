var poly = [];
function Player(x, y, w, h){
	this.s = 10;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.xbound = x + w;
	this.ybound = y + h;
	this.hit = false;

	//poly[0] = createVector(0,0);     // set X/Y position
	//poly[1] = createVector(cw,0);
	//poly[2] = createVector(cw,ch);
	//poly[3] = createVector(0,ch);

	poly[0] = createVector(0,0);
	poly[1] = createVector(0,100);
	poly[2] = createVector(200, 400);
	poly[3] = createVector(300, 400);
	poly[4] = createVector(300, 0);

	this.userInput = function(){
	fill(255, 0, 0);
	beginShape();
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);

		// Check left border
		hit = collideRectPoly(this.x - this.s,this.y,this.w,this.h,poly)
		if (hit) {
			tempx = this.x - this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,poly)
				tempx++;
			}
			this.x = tempx;
		}else if (keyIsDown(LEFT_ARROW)) this.x-=this.s;

		// Check right border
		hit = collideRectPoly(this.x + this.s,this.y,this.w,this.h,poly)
		if (hit) {
			tempx = this.x + this.s;
			while (hit){
				hit = collideRectPoly(tempx,this.y,this.w,this.h,poly)
				tempx--;
			}
			this.x = tempx;
		}else if (keyIsDown(RIGHT_ARROW)) this.x+=this.s;

		// Check top border
		hit = collideRectPoly(this.x,this.y - this.s,this.w,this.h,poly)
		if (hit) {
			tempy = this.y - this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,poly)
				tempy++;
			}
			this.y = tempy;
		}else if (keyIsDown(UP_ARROW)) this.y-=this.s;

		// Check bot border
		hit = collideRectPoly(this.x,this.y + this.s,this.w,this.h,poly)
		if (hit) {
			tempy = this.y + this.s;
			while (hit){
				hit = collideRectPoly(this.x,tempy,this.w,this.h,poly)
				tempy--;
			}
			this.y = tempy;
		}else if (keyIsDown(DOWN_ARROW)) this.y+=this.s;
	}

	this.drawPlayer = function(){
		push();
		fill(0,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
