var context = new AudioContext();
var frequency = 400;

var play = function() {
	var o = context.createOscillator();
	var gainNode = context.createGain();
	o.frequency.value = frequency;
	o.connect(gainNode);
	gainNode.connect(context.destination);
	o.start(context.currentTime);
	gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3);		
};

//text box
var frequencyEl = document.getElementById("frequency");
var entered = function(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
		var newFre = Number(frequencyEl.value);
		if(Number.isInteger(newFre) == true) {
			frequency = frequencyEl.value;
			frequencyEl.value = "";
			play();
		} else {
			frequencyEl.value = "please enter a number";
		}
	}	
};

var piano = function(e) {
	var o = context.createOscillator();
	o.type = "square";
	var g = context.createGain();
	o.connect(g);
	g.connect(context.destination);

	var f = (e.keyCode - 95) * 20 + 300;
	o.frequency.value = f;
	console.log(f);

	o.start();
	g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
};


var displayAreaEl = document.getElementById("displayArea");	
var getFile = function() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			displayArea.innerHTML = this.responseText();
		}
	};
	req.open("GET", "secret.txt", true);
	req.send();
};

var newHeadingEl = document.getElementById("heading");
var changeHeading = function(e) {
	if(e.keyCode == 13) {
		e.preventDefault();
		var txt = newHeadingEl.value;
		newHeadingEl.value = "";


	}
};

