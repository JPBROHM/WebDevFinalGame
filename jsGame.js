
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var xCo = 0;
var yCo = 0;
var maxX = canvas.width;
var maxY = canvas.height;



function drawCat() {
	ctx.font = "12px Arial";
	var displayText = "Here Kitty";
	const dspTxtWidth = ctx.measureText(displayText).width + 10;
	ctx.fillText(displayText, canvas.width - dspTxtWidth, canvas.height - 12);
	crazycat = new Image();
	crazycat.src = "images/crazyCat.gif";
	crazycat.onload = function(){
		ctx.drawImage(crazycat, xCo, yCo);
	}
	if (xCo >= (canvas.width - crazycat.width) && (yCo + crazycat.height) >= maxY){
		var youClass = document.getElementsByClassName("you");
		
		for (i = 0; i < youClass.length; i++){
			youClass[i].style.color = "pink";
			youClass[i].style.fontSize = "30px";
		}
		
		alert("ayo bro you the cat there good job");
	}
};

document.onkeydown = function(event){
	if(event.key == "ArrowRight" && (xCo + crazycat.width)<maxX){
		ctx.clearRect(0,0,1500,1000);
		xCo += 15;
		drawCat();
	}
	if(event.key == "ArrowLeft" && xCo>0){
		ctx.clearRect(0,0,1500,1000);
		xCo -= 15;
		drawCat();
	}
	if(event.key == "ArrowUp" && yCo>0){
		ctx.clearRect(0,0,1500,1000);
		yCo -= 15;
		drawCat();
	}
	if(event.key == "ArrowDown" && (yCo + crazycat.height)<maxY){
		ctx.clearRect(0,0,1500,1000);
		yCo += 15;
		drawCat();
	}
	
};





