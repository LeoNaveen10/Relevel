
function timeoutexe(){
    console.log("this refers to the timeout function");
}

console.log("before timeout function call");
setTimeout(timeoutexe,5000);
console.log("After time out function call");

setTimeout(function(){
    console.log("2nd timeout function call");
},10000);

setInterval(function(){
    console.log("for every 2 seconds this gets printed");
}, 2000);

const interval=setInterval(() => {
    console.log("2nd setinterval function");
}, 2000);

clearInterval(interval);   //set interval won't get executed coz of this clear interval function