console.log("bruh");
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://liamcoin.locknessko.repl.co');

// 3. Send the request over the network
xhr.send();
// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
		document.getElementById("nc").innerHTML=xhr.response;
  }
};
xhr.onprogress = function(event) {};
xhr.onerror = function() {
  alert("Request failed");
};
