
/*
function Matches(num){
    console.log("inside the callback function");
    console.log("value passed from callback is",num);
}

Matches(Math.sqrt(121));




function find_mean(num1,num2,mycallback)
{
    sum=(num1+num2)/2;
    mycallback(sum);
}
function display(num){
    console.log("The mean of 2 nos is ",num);
}

find_mean(60,45,display);

function name(abc)
{
    abc();
    console.log("inside the function");
}


name(function(){
    console.log("2nd function");
})

name(function(){
    console.log("function which is called back");
});
*/

//nested object

var car={
    name : "Tata Motors",
    specifications : {
        carname : "altros",
        color   : "navy blue",
        cc     : "2000"
    }
};

console.log(car.specifications);