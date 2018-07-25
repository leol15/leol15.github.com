//global variables

//animate box first
var headerBoxChange = function() {
	var box = document.getElementById("center_mark");
	box.style.animationName = "centerM";
	box.style.animationDuration = "2s";
	window.setTimeout(function() {
		box.style.animationName = "";
	}, 2000);	
};

var infTO1, infTO2;
var informText = function(txt) {
	var el = document.getElementById("inform_content");
	el.style.animationName = "rotY90";
	window.clearTimeout(infTO1);
	window.clearTimeout(infTO2);
	window.setTimeout(function() {el.textContent = txt; 
		el.style.animationName = "rotY-90";}, 1000);
	infTO1 = window.setTimeout(function() {removeText()}, 2800);
};
var removeText = function() {
	var el = document.getElementById("inform_content");
	el.style.animationName = "rotY90";
	infTO2 = window.setTimeout(function() {el.textContent = "leo";
	el.style.animationName = "rotY-90";}, 1000);
};

//header touch event
var welText = "Welcome to my world";
var headerCenterMarkEl = document.getElementById("center_mark");
headerCenterMarkEl.addEventListener("touchend", informText.bind(null, welText));
headerCenterMarkEl.addEventListener("touchend", headerBoxChange);
headerCenterMarkEl.firstChild.addEventListener("touchstart", headerBoxChange);

//left icon touch event
var leftIconBox = document.getElementById("left_icon");
var li_a = document.getElementById("li_a");
var li_b = document.getElementById("li_b");
var li_c = document.getElementById("li_c");
var pEl = document.getElementById("left_icon_p");

var leftIconOn = function() {
	pEl.style.transition = "all 1s";
	pEl.style.transform = "rotateZ(0deg) rotateY(180deg)";
	leftIconBox.className = "left_icon_on";
	li_a.className = "li_a_on";
	li_b.className = "li_b_on";
	li_c.className = "li_c_on";
};
var leftIconOff = function() {
	//p tag rotation
	pEl.style.transition = "all 1s";
	pEl.style.transform = "rotateZ(180deg) rotateY(180deg)";
	//bg cl
	leftIconBox.className = "left_icon_off";
	//span location
	li_a.className = "li_a_off";
	li_b.className = "li_b_off";
	li_c.className = "li_c_off";
};
var menuOn = function() {
	var el = document.querySelectorAll("#menu li");
	for(var i=0; i<el.length; i++) {
		el[i].className = "menuOn";
		console.log(el[i]);
	}
};
var menuOff = function() {
	var el = document.querySelectorAll("#menu li");
	for(var i=0; i<el.length; i++) {
		el[i].className = "menuOff";
	}
};
var leftIconClicked = function() {
	if(leftIconBox.className == "left_icon_on") {
		leftIconOff();
		menuOff();
	} else {
		leftIconOn();
		menuOn();
	}
}; 
leftIconBox.addEventListener("touchend", leftIconClicked);


//float button
var autoClose;
var showHbs = function() {
	var hBs = document.querySelectorAll("#hiddenBsDiv button");
	for (var i=0; i<hBs.length; i++) {
		hBs[i].className = "hiddenBs hBOn_" + (i+1);
	}	
};
var hideHbs = function() {
	var hBs = document.querySelectorAll("#hiddenBsDiv button");
	for (var i=0; i<hBs.length; i++) {
		hBs[i].className = "hiddenBs hBsOff";
	}
};
var floatBClicked = function() {
	var fbEl = document.getElementById("floatB");
	if(fbEl.className == "floatB_on") {
		fbEl.className = "floatB_off";
		hideHbs();

		window.clearTimeout(autoClose);
	} else {
		fbEl.className = "floatB_on";
		showHbs();

		window.clearTimeout(autoClose);
		autoClose = window.setTimeout(function() {
			fbEl.className="floatB_off";
			hideHbs();
			
		}, 5000);
	}
}; 

//hidden button one
var hB1Clicked = function() {
	informText("You clicked button 1");
};
//hidden button two
var hB2Clicked = function() {
	informText("You clicked button 2");
};
//hidden button three
var hB3Clicked = function() {
	informText("You clicked button 3");
};