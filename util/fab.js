
// define a fab to perform some functions
// like contact and leave a message

// link fab css
var head = document.getElementsByTagName('HEAD')[0];  
// Create new link Element 
var link = document.createElement('link'); 
// set the attributes for link element  
link.rel = 'stylesheet';  
link.type = 'text/css'; 
// local or global linking?
if (window.location.pathname.includes("C:/")) {
	link.href = 'util/fab.css';  
} else {
	link.href = 'https://leol15.github.io/util/fab.css';
}
// Append link element to HTML head 
head.appendChild(link);  

// link icon 
var link = document.createElement('link'); 
// set the attributes for link element  
link.rel = 'stylesheet';  
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';  
// Append link element to HTML head 
head.appendChild(link);  



// create html
 
var fab_box = document.createElement("span");
fab_box.id = "linked_fab_container";
// fab_box.href = "#";

var main_circle = document.createElement("div");
main_circle.id = "linked_fab_circle";
main_circle.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">forward_to_inbox</i>";

fab_box.appendChild(main_circle);

// hint text
var hint = document.createElement("input");
hint.id = "linked_fab_hint";
hint.placeholder = "send some feedback";

fab_box.appendChild(hint);

document.body.appendChild(fab_box);


// interaction
var toggleFunction = function() {
	if (hint.value !== "") {
		// sending 
		sendMessage();
	} 
}


// send feeback
var sendMessage = function() {
	console.log("sended");  // some how
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://students.washington.edu/leol15/home/feedback.php", true);
	xhr.setRequestHeader('Content-Type', 'application/text');
	xhr.send(JSON.stringify({
	    feedback: hint.value
	}));

	hint.value = "";
	hint.placeholder = "thank you for your feedback!";	
	main_circle.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">done_outline</i>";
	setTimeout(function() {
		main_circle.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">forward_to_inbox</i>";
	}, 5000);

}

// listener

main_circle.addEventListener("click", function() {
	toggleFunction();
});


hint.addEventListener("keyup", function(e) {
	if (hint.value.length === 0) {
		if (e.keyCode === 13 || e.key === "Enter") {

		} else {
			main_circle.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">forward_to_inbox</i>";
		}
	} else {
		main_circle.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">send</i>";
		if (e.key === 'Enter' || e.keyCode === 13) {
			// sendMessage();
			sendMessage();
		}
	}
});