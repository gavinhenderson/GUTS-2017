function Room(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.mx = x;
	this.my = y;

	//this.list = list;
	this.mh = 30;

	this.visible = true;
	this.clicked = false;
	this.displayC = false;
	this.o = "";
	this.c = color(255);

	this.draw = function(){
		push();
		if(this.visible){
			fill(this.c)
			rect(this.x, this.y, this.w, this.h);
		}
		if(this.displayC){
			fill(255)
			text(this.o, 100, 400);
		}
		pop();
	}

	this.drawMenu = function(){
		if(this.clicked){
			console.log(this.list.length)
			//for(i = 0; i < this.list.length; i++){
				//rect(this.mx, this.my, 100, this.mh);
				//this.drawMenuOp(this.mh * i, this.mh, list[i]);
			//}
		}
	}

	this.drawMenuOp = function(mh, h, s){
		push();
		p = 5;
		textAlign(LEFT, TOP);
		rect(this.mx, this.my + mh, 100, h);
		fill(0);
		textSize(this.mh - 4);
		text(s, this.mx + p, this.my + mh + p);
		pop();
	}

	this.collide = function(x,y){
		if(collidePointRect(x, y, this.x, this.y, this.w, this.h)){
			return true;
		}else{
			return false;
		}
	}

	this.showMenu = function(x,y){
		push();
		if(this.clicked){
			fill(255);
			y = y - this.my;
			this.o = Math.floor(y / this.mh)
			if(this.o == 0) this.c = color(120,120,120);
			else if(this.o == 1) this.c = color(255,255,0);
			else if(this.o == 2) this.c = color(0,255,255);
			this.clicked = false;
		}
		if(collidePointRect(x, y, this.x, this.y, this.w, this.h)){
			this.mx = x;
			this.my = y;
			this.clicked = false;
		}else{
			this.clicked = true;
		}
		pop();
	}

	this.dark = function(x, y){
		if(gameID==1){
		if(!collidePointRect(x, y, this.x, this.y, this.w, this.h)){
			fill(0);
			rect(this.x, this.y, this.w, this.h);
		}
		this.drawMenu();
	}
	}

	this.show = function(){
		this.visible = true;
	}

	this.hide = function(){
		this.visible = false;
	}
}
