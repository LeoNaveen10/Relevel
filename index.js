/*console.log("yes sir")


var str="lionel messi";
console.log(str);

var a,b,c;

// arithmetic operators
n1 = 100
n2 = 20
console.log(n1+n2, n1-n2, n1*n2, n1/n2, n1%n2, ++n1, --n2)
console.log(Math.pow(100, 2))

// Equality operators
console.log("Equality operators...")
console.log(5 == 5, 5 == 6, 5 != 5, 5 != 6, 5 == "5", 5 != "5", 5 === "5")

// Relational Operators
console.log("Relational Operators...")
console.log(5 < 6, 5 > 6, 5 <= 5, 5 >= 5)

// Bitwise operators
console.log("Bitwise Operators...")
console.log(65 | 32, 97 & (~32))

// logical operators
console.log("Logical Operators...")
console.log((5 > 4) && (6 > 7), (5 > 4) && (7 > 6), (5 > 4) || (6 > 7))*/


//random numbers
//console.log(((Math.random()*3)+1)<<0);


// Require http header

var http = require('http');

// Create server
http.createServer(function (req, res) {

	// HTTP Status: 200 : OK
	// Content Type: text/html

	res.writeHead(200, {'Content-Type': 'text/html'});
	
	// Send the response body as "Hello World!"
    
	res.end('Hello World!');

}).listen(8080);


