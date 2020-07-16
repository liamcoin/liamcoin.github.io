console.log("bruh");

function rec(o){
	// 1. Create a new XMLHttpRequest object
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://liamcoin.locknessko.repl.co');
	xhr.send();
	// 4. This will be called after the response is received
	xhr.onload = function() {
		if (xhr.status != 200) { // analyze HTTP status of the response
			alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		} else { // show the result
			document.getElementById(o).innerHTML+=xhr.response;
		}
	};
	xhr.onprogress = function(event) {};
	xhr.onerror = function() {
		alert("Request failed");
	};
}

rec("nc")
rec("ns")
