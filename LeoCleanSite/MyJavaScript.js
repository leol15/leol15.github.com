
var informText = function(txt) {
	var el = document.getElementById("inform_content");
	el.textContent = txt;
	setTimeout(function() {removeText()}, 1500);
};
var removeText = function() {
	var el = document.getElementById("inform_content");
	el.textContent = "leo";
};


var headerCenterMarkEl = document.getElementById("center_mark");
var welText = "Welcome to my world";
headerCenterMarkEl.addEventListener("mouseover", informText.bind(null, welText));
