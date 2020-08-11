
// define a fab to perform some functions
// like contact and leave a message

// link fab css
var head = document.getElementsByTagName('HEAD')[0];  
// Create new link Element 
var link = document.createElement('link'); 
// set the attributes for link element  
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://leol15.github.io/util/fab.css';  
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
 
var el = document.createElement("a");
el.id = "linked_fab_container";
el.href = "#";
el.innerHTML = "<i id=\"linked_fab_icon\" class=\"material-icons\">forward_to_inbox</i>";


// hint text
var hint = document.createElement("span");
hint.id = "linked_fab_hint";
hint.innerText = "send some feedback";

el.appendChild(hint);

document.body.appendChild(el);


// listener

el.addEventListener("click", function() {
	console.log("cloud_pic");
});


el.addEventListener("mousedown", function() {
	el.style.backgroundColor = "red";
});


el.addEventListener("mouseup", function() {
	el.style.backgroundColor = "rgba(100, 255, 100, 0.5)";
});