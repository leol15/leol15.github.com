/*Hello there*/
/*initial car*/
var carEl = document.getElementById("car");
carEl.style.top = "60px";
carEl.style.left = "60px";

var degZ = 0;
var move = function(event) {
	var speed = 40;
	var keyCode = event.keyCode;
	var character = String.fromCharCode(keyCode);
	var carEl = document.getElementById("car");
	var x = carEl.style.left.replace("px", "");
	x = parseInt(x, 10);
	var y = carEl.style.top.replace("px", "");
	y = parseInt(y, 10);
	switch(character) {
		case "w":
			if(y - speed > 0) {
				y -= speed;
			} else {
				y = 0;
			}
			carEl.style.top = y + "px";
		break;
		case "s":
			if(y + speed < window.innerHeight - 60) {
				y += speed;
			} else {
				y = window.innerHeight - 60;
			}
			carEl.style.top = y + "px";
		break;
		case "a":
			if(x - speed > 0) {
				x -= speed;
			} else {
				x = 0;
			}
			carEl.style.left = x + "px";
		break;
		case "d":
			if(x + speed < window.innerWidth - 60) {
				x += speed;
			} else {
				x = window.innerWidth - 60;
			}
			carEl.style.left = x + "px";
		break;
		case "e":
			degZ += 30;
			carEl.style.transform = "rotateZ("+ degZ +"deg)";
		break;
		default:
		break;
	}
};

var mouseMove = function(event) {
	var bgEl = document.getElementById("timer");
	var xOff = event.clientX/490;
	var yOff = event.clientY/50;
	bgEl.style.position = "fixed";
	bgEl.style.top = yOff + 20 + "px";
	bgEl.style.right = 5 - xOff + "%";
};

/*background timer*/
var handDegZ = 0;
var handEl = document.querySelector("#timer #img1");
var handEl2 = document.querySelector("#timer #img2");
var count = function() {
	handDegZ += 12;
	handEl.style.transform = "rotateZ(" + handDegZ + "deg)";
	handEl2.style.transform = "rotateZ(" + handDegZ/30 + "deg)";
};
var timer = window.setInterval(count, 1000);

/*goto URL*/
var textboxEl = document.getElementById("goto");
var gotoURL = function(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
		var URL = textboxEl.value;
		textboxEl.value.trim();
		textboxEl.value = "Getting there...";
		location.href = "https://" + URL + "/";
	}
};

