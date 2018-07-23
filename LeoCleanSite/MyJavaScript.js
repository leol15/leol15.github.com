
var informText = function(txt) {
	var el = document.getElementById("inform_content");
	el.style.animationName = "rotY90";
	window.setTimeout(function() {el.textContent = txt; 
		el.style.animationName = "rotY-90";}, 1000);
	window.setTimeout(function() {removeText()}, 3500);
};
var removeText = function() {
	var el = document.getElementById("inform_content");
	el.style.animationName = "rotY90";
	window.setTimeout(function() {el.textContent = "leo";
	el.style.animationName = "rotY-90";}, 1000);
	//window.setTimeout(function() {el.style.animationName = ""}, 1000);
};


var welText = "Welcome to my world";
var headerCenterMarkEl = document.getElementById("center_mark");
headerCenterMarkEl.addEventListener("touchstart", informText.bind(null, welText));

