
var informText = function(txt) {
	//animate box first
	var box = document.getElementById("center_mark");
	box.style.animationName = "centerM";
	box.style.animationDuration = "2s";
	window.setTimeout(function() {
		box.style.animationName = "";
	}, 2000);

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
};


var welText = "Welcome to my world";
var headerCenterMarkEl = document.getElementById("center_mark");
headerCenterMarkEl.addEventListener("touchstart", informText.bind(null, welText));

var leftIconBox = document.getElementById("left_icon");
var leftIconClicked = function() {
	if(leftIconBox.className == "left_icon_on") {
		leftIconBox.className = "left_icon_off";
	} else {
		leftIconBox.className = "left_icon_on";
	}
}; 
leftIconBox.addEventListener("touchend", leftIconClicked);