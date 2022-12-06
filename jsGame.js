
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var catxCo = 500;
var catyCo = 500;
var mousexCo = 0;
var mouseyCo = 0;
var maxX = canvas.width;
var maxY = canvas.height;



function drawCat() {
	crazycat = new Image();
	crazycat.src = "images/crazyCat.gif";
	mouse = new Image();
	mouse.src = "images/mouse.jpg";
	crazycat.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
		
	}
	if (catxCo >= (canvas.width - crazycat.width) && (catyCo + crazycat.height) >= maxY){
		var youClass = document.getElementsByClassName("you");
		
		for (i = 0; i < youClass.length; i++){
			youClass[i].style.color = "pink";
			youClass[i].style.fontSize = "30px";
		}
		
		alert("ayo bro you the cat there good job");
	}
};

function drawMouse() {
	mouse = new Image();
	mouse.src = "images/mouse.jpg";
	crazycat = new Image();
	crazycat.src = "images/crazyCat.gif";
	mouse.onload = function(){
		ctx.drawImage(mouse, mousexCo, mouseyCo);
		ctx.drawImage(crazycat, catxCo, catyCo);
	}
	if (mousexCo >= (canvas.width - mouse.width) && (mouseyCo + mouse.height) >= maxY){
		var youClass = document.getElementsByClassName("you");
		
		for (i = 0; i < youClass.length; i++){
			youClass[i].style.color = "pink";
			youClass[i].style.fontSize = "30px";
		}
		
		alert("ayo bro you the cat there good job");
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





