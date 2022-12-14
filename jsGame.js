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
var cheeseCollected = 0;
var catS = 0;
var mouseS = 0;
mouseString = "Mouse Score: ";
mouseString += mouseS;
document.getElementById("mouseScore").innerHTML = mouseString;
catString = "Cat Score: ";
catString += catS;
document.getElementById("catScore").innerHTML = catString;

function initalize() {
	catxCo = 600;
	catyCo = 600;
	mousexCo = 1250;
	mouseyCo = 350;
	cheese = [false, false, false, false, false, false, false, false];
	cheeseCollected = 0;
}

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
	cheeseWidth = cheesePic.naturalWidth;
	cheeseHeight = cheesePic.naturalHeight;
	holeWidth = hole.naturalWidth;
	holeHeight = hole.naturalHeight;

	crazycat.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
		for (i = 0; i < 8; i++){
			checkCheese(i, cheeseWidth, cheeseHeight, mouseWidth, mouseHeight);
			if (cheese[i] == false){
				ctx.drawImage(cheesePic, cheesexCo[i], cheeseyCo[i]);
			}
		}
		ctx.drawImage(hole, 1250, 450);
		
	}

	if (checkCollision(catWidth, catHeight, mouseWidth, mouseHeight)) {
		alert("Yowch! The cat has caught the mouse! One win to the cat");
		catS += 1;
		catString = "Cat Score: ";
		catString += catS;
		document.getElementById("catScore").innerHTML = catString;
		initalize();
	}
	if (checkHole(holeWidth, holeHeight, mouseWidth, mouseHeight)) {
		alert("Hooray! The mouse's fam gets to eat tonight! One win to the mouse");
		mouseS += 1;
		mouseString = "Mouse Score: ";
		mouseString += mouseS;
		document.getElementById("mouseScore").innerHTML = mouseString;
		initalize();
	}
};

function checkCollision(cWidth, cHeight, mWidth, mHeight) {
	overlapX = ((mousexCo <= (catxCo + cWidth) && mousexCo >= catxCo) 
		|| ((mousexCo + mWidth) <= (catxCo + cWidth)) && ((mousexCo + mWidth) >= catxCo));
	overlapY = ((mouseyCo <= (catyCo + cHeight) && mouseyCo >= catyCo) 
		|| ((mouseyCo + mHeight) <= (catyCo + cHeight)) && ((mouseyCo + mHeight) >= catyCo));

	if (overlapX && overlapY) {
		return true;
	} else {
		return false;
	}
}

function checkCheese(cheeseIdx, cWidth, cHeight, mWidth, mHeight) {
	cheezxCo = cheesexCo[cheeseIdx];
	cheezyCo = cheeseyCo[cheeseIdx];
	overlapX = ((mousexCo <= (cheezxCo + cWidth) && (mousexCo >= cheezxCo)) 
		|| ((mousexCo + mWidth) <= (cheezxCo + cWidth)) && ((mousexCo + mWidth) >= cheezxCo));
	overlapY = ((mouseyCo <= (cheezyCo + cHeight) &&(mouseyCo >= cheezyCo)) 
		|| ((mouseyCo + mHeight) <= (cheezyCo + cHeight)) && ((mouseyCo + mHeight) >= cheezyCo));

	if (overlapX && overlapY) {
		if (cheese[cheeseIdx] == false) {
			cheeseCollected += 1;
			cheese[cheeseIdx] = true;
		}
	}
}

function checkHole(hWidth, hHeight, mWidth, mHeight) {
	overlapX = ((mousexCo <= (1250 + hWidth) && mousexCo >= 1250) 
		|| ((mousexCo + mWidth) <= (1250 + hWidth)) && ((mousexCo + mWidth) >= 1250));
	overlapY = ((mouseyCo <= (450 + hHeight) && mouseyCo >= 450) 
		|| ((mouseyCo + mHeight) <= (450 + hHeight)) && ((mouseyCo + mHeight) >= 450));

	if ((overlapX && overlapY) && (cheeseCollected >= 5)) {
		if (cheeseCollected >= 8) {
			alert("Woooaaah!! All 8 cheeses! That's an extra win to the mouse for this round!");
			mouseS += 1;
			mouseString = "Mouse Score: ";
			mouseString += mouseS;
			document.getElementById("mouseScore").innerHTML = mouseString;
		}
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
	cheeseWidth = cheesePic.naturalWidth;
	cheeseHeight = cheesePic.naturalHeight;
	holeWidth = hole.naturalWidth;
	holeHeight = hole.naturalHeight;

	mouse.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
		for (i = 0; i < 8; i++){
			checkCheese(i, cheeseWidth, cheeseHeight, mouseWidth, mouseHeight);
			if (cheese[i] == false){
				ctx.drawImage(cheesePic, cheesexCo[i], cheeseyCo[i]);
			}
		}
		ctx.drawImage(hole, 1250, 450);
	}

	if (checkCollision(catWidth, catHeight, mouseWidth, mouseHeight)) {
		alert("Yowch! The cat has caught the mouse! One win to the cat");
		catS += 1;
		catString = "Cat Score: ";
		catString += catS;
		document.getElementById("catScore").innerHTML = catString;
		initalize();
	}
	if (checkHole(holeWidth, holeHeight, mouseWidth, mouseHeight)) {
		alert("Hooray! The mouse's fam gets to eat tonight! One win to the mouse");
		mouseS += 1;
		mouseString = "Mouse Score: ";
		mouseString += mouseS;
		document.getElementById("mouseScore").innerHTML = mouseString;
		initalize();
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
		mousexCo += 25;
		drawMouse();
	}
	if(event.key == "a" && mousexCo>0){
		ctx.clearRect(0,0,1500,1000);
		mousexCo -= 25;
		drawMouse();
	}
	if(event.key == "w" && mouseyCo>0){
		ctx.clearRect(0,0,1500,1000);
		mouseyCo -= 25;
		drawMouse();
	}
	if(event.key == "s" && (mouseyCo + mouse.height)<maxY){
		ctx.clearRect(0,0,1500,1000);
		mouseyCo += 25;
		drawMouse();
	}
	
};





