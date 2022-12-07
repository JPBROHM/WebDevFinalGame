//for dealing with multiple keydowns at once:
//https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var catxCo = 600;
var catyCo = 600;
var mousexCo = 1250;
var mouseyCo = 350;
var maxX = canvas.width;
var maxY = canvas.height;
var cheese = [false, false, false, false, false, false, false, false];
var cheesexCo = [10, 10, 1350, 1350, 750, 300, 800, 666];
var cheeseyCo = [10, 850, 10, 850, 666,  386, 45, 420];

function drawCat() {
	crazycat = new Image();
	crazycat.src = "images/crazyCat.gif";
	mouse = new Image();
	mouse.src = "images/mouse.jpg";
	cheesePic = new Image();
	cheesePic.src = "images/cheese.jpg";
	hole = new Image();
	hole.src = "images/hole.jpg";
	//Cat & mouse width + heights for collision
	catWidth = crazycat.naturalWidth;
	catHeight = crazycat.naturalHeight;
	mouseWidth = mouse.naturalWidth;
	mouseHeight = mouse.naturalHeight;

	crazycat.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
		for (i = 0; i < 8; i++){
			if (cheese[i] == false){
				console.log("yeet");
				ctx.drawImage(cheesePic, cheesexCo[i], cheeseyCo[i]);
			}
		}
		ctx.drawImage(hole, 1250, 450);
		
	}
	if (catxCo >= (canvas.width - crazycat.width) && (catyCo + crazycat.height) >= maxY){
		var youClass = document.getElementsByClassName("you");
		
		for (i = 0; i < youClass.length; i++){
			youClass[i].style.color = "pink";
			youClass[i].style.fontSize = "30px";
		}
		
		alert("ayo bro you the cat there good job");
	}

	if (checkCollision(catWidth, catHeight, mouseWidth, mouseHeight)) {
		alert("oh shit ouch fuck, cat ate the mouse");
	}
};

function checkCollision(cWidth, cHeight, mWidth, mHeight) {
	var overlapX = ((mousexCo <= (catxCo + cWidth) && mousexCo >= catxCo) 
		|| ((mousexCo + mWidth) <= (catxCo + cWidth)) && ((mousexCo + mWidth) >= catxCo));
	var overlapY = ((mouseyCo <= (catyCo + cHeight) && mouseyCo >= catyCo) 
		|| ((mouseyCo + mHeight) <= (catyCo + cHeight)) && ((mouseyCo + mHeight) >= catyCo));

	if (overlapX && overlapY) {
		return true;
	} else {
		return false;
	}
}



function drawMouse() {
	mouse = new Image();
	mouse.src = "images/mouse.jpg";
	crazycat = new Image();
	crazycat.src = "images/crazyCat.gif";
	cheesePic = new Image();
	cheesePic.src = "images/cheese.jpg";
	hole = new Image();
	hole.src = "images/hole.jpg";
	//Cat & mouse width + heights for collision
	catWidth = crazycat.naturalWidth;
	catHeight = crazycat.naturalHeight;
	mouseWidth = mouse.naturalWidth;
	mouseHeight = mouse.naturalHeight;

	mouse.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
		for (i = 0; i < 8; i++){
			if (cheese[i] == false){
				ctx.drawImage(cheesePic, cheesexCo[i], cheeseyCo[i]);
			}
		}
		ctx.drawImage(hole, 1250, 450);
	}
	if (mousexCo >= (canvas.width - mouse.width) && (mouseyCo + mouse.height) >= maxY){
		var youClass = document.getElementsByClassName("you");
		
		for (i = 0; i < youClass.length; i++){
			youClass[i].style.color = "pink";
			youClass[i].style.fontSize = "30px";
		}
		
		alert("ayo bro you the cat there good job");
	}

	if (checkCollision(catWidth, catHeight, mouseWidth, mouseHeight)) {
		alert("oh shit ouch fuck, cat ate the mouse");
	}
};


document.onkeydown = function(event){
	if(event.key == "ArrowRight" && (catxCo + crazycat.width)<maxX){
		ctx.clearRect(0,0,1500,1000);
		catxCo += 15;
		drawCat();
	}
	if(event.key == "ArrowLeft" && catxCo>0){
		ctx.clearRect(0,0,1500,1000);
		catxCo -= 15;
		drawCat();
	}
	if(event.key == "ArrowUp" && catyCo>0){
		ctx.clearRect(0,0,1500,1000);
		catyCo -= 15;
		drawCat();
	}
	if(event.key == "ArrowDown" && (catyCo + crazycat.height)<maxY){
		ctx.clearRect(0,0,1500,1000);
		catyCo += 15;
		drawCat();
	}

	if(event.key == "d" && (mousexCo + mouse.width)<maxX){
		ctx.clearRect(0,0,1500,1000);
		mousexCo += 15;
		drawMouse();
	}
	if(event.key == "a" && mousexCo>0){
		ctx.clearRect(0,0,1500,1000);
		mousexCo -= 15;
		drawMouse();
	}
	if(event.key == "w" && mouseyCo>0){
		ctx.clearRect(0,0,1500,1000);
		mouseyCo -= 15;
		drawMouse();
	}
	if(event.key == "s" && (mouseyCo + mouse.height)<maxY){
		ctx.clearRect(0,0,1500,1000);
		mouseyCo += 15;
		drawMouse();
	}
	
};





