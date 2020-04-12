

var JSONING = function(e, el) {
	if(e.keyCode == 13) {
		e.preventDefault();
		var userStr = el.value;
		var targ = document.querySelectorAll('#stringifyBox .output')[0];
		targ.textContent = JSON.stringify(userStr);
	}
};
