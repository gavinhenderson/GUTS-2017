function Player(x, y, w, h, poly){
	this.s = 5;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.xbound = x + w;
	this.ybound = y + h;
	this.hit = false;
	this.poly = poly;

	this.userInput = function(){
		polylist = [0,0,0,0];
		for(i = 0; i < this.poly.length; i++){
			hitl = collideRectPoly(this.x - this.s,this.y,this.w,this.h,this.poly[i]);
			hitr = collideRectPoly(this.x + this.s,this.y,this.w,this.h,this.poly[i]);
			hitt = collideRectPoly(this.x,this.y - this.s,this.w,this.h,this.poly[i]);
			hitb = collideRectPoly(this.x,this.y + this.s,this.w,this.h,this.poly[i]);
			if(hitl && keyIsDown(LEFT_ARROW) && polylist[0] == 0) polylist[0] = poly[i]
			if(hitr && keyIsDown(RIGHT_ARROW)) polylist[1] = poly[i]
			if(hitt && keyIsDown(UP_ARROW)) polylist[2] = poly[i]
			if(hitb && keyIsDown(DOWN_ARROW)) polylist[3] = poly[i]
		}
		if(polylist[0] != 0 || polylist[1] != 0 || polylist[2] != 0 || polylist[3] != 0){
			for(i = 0; i < polylist.length; i++){
				this.collisions(polylist[0], polylist[1], polylist[2], polylist[3]);
			}
		}

		if (keyIsDown(LEFT_ARROW) && polylist[0] == 0) this.x-=this.s;
		if (keyIsDown(RIGHT_ARROW) && polylist[1] == 0) this.x+=this.s;
		if (keyIsDown(UP_ARROW) && polylist[2] == 0) this.y-=this.s
		if (keyIsDown(DOWN_ARROW) && polylist[3] == 0) this.y+=this.s

		setCoordinates(this.x, this.y);
	}

	this.collisions = function(lpoly, rpoly, tpoly, bpoly){
		tw = this.w;
		th = this.h;

		tempx = this.x;
		tempy = this.y;
		// Check left border
		if(lpoly != 0){
			hit = collideRectPoly(tempx - this.s,this.y,tw,th,lpoly)
			if (hit) {
				tempx = tempx - this.s;
				while (hit){
					hit = collideRectPoly(tempx,this.y,tw,th,lpoly)
					tempx++;
				}
				tempx = tempx - 1;
			}else if (keyIsDown(LEFT_ARROW)) tempx-=this.s;
		}

		// Check right border
		if(rpoly != 0){
			hit = collideRectPoly(tempx + this.s,this.y,tw,th,rpoly)
			if (hit) {
				tempx = tempx + this.s;
				while (hit){
					hit = collideRectPoly(tempx,this.y,tw,th,rpoly)
					tempx--;
				}
				tempx = tempx + 1;
			}else if (keyIsDown(RIGHT_ARROW)) tempx+=this.s;
		}

		// Check top border
		if(tpoly){
			hit = collideRectPoly(this.x,tempy - this.s,tw,th,tpoly)
			if (hit) {
				tempy = tempy - this.s;
				while (hit){
					hit = collideRectPoly(this.x,tempy,tw,th,tpoly)
					tempy++;
				}
				tempy = tempy - 1;
			}else if (keyIsDown(UP_ARROW)) tempy-=this.s;
		}

		// Check bot border
		if(bpoly){
			hit = collideRectPoly(this.x,tempy + this.s,tw,th,bpoly)
			if (hit) {
				tempy = tempy + this.s;
				while (hit){
					hit = collideRectPoly(this.x,tempy,tw,th,bpoly)
					tempy--;
				}
				tempy = tempy + 1;
			}else if (keyIsDown(DOWN_ARROW)) tempy+=this.s;
		}
		this.x = tempx;
		this.y = tempy;
	}

	this.drawPlayer = function(){
		if(gameID != 1){
			getCoordinates();
		}
		push();
		fill(255,0,0);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}
}
