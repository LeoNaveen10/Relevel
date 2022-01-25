//====================================================================
//Destructuring

let games = ["Cricket", "Football", "Hockey", "Golf"]
console.log(games)

let [g1, g2] = games   //type 1
console.log(g1, g2)

let [g3,,,g4] = games;  // type 2
console.log(g3, g4);

let [g5, ...g6] = games;  //type 3
console.log(g5, g6);

let [g7, g8, ...g9] = games //type4
console.log(g7, g8, g9)

// desrtucturing assignment using functions
function getGame() {
    let games = ["Cricket", "Football", "Hockey", "Golf"]
    return games;
}
let [g10, g11] = getGame();
console.log(g10, g11);             //conosole.log(getgame());

// using default values
let[g12 = "Tennis", g13 = "Cards"] = ['Cricket']
console.log(g12, g13)

// Swapping values using destructuring
let g14 = "Cricket"
let g15 = "Golf"
console.log(g14, g15);
[g14, g15] = [g15, g14]
console.log(g14, g15)


// object destructuring
let fruits = {                   

    mango:"green",
    apple:"red",
    banana:"yellow"
}
let mymango = fruits.mango
let myapple = fruits.apple
let mybanana = fruits.banana;
console.log(mymango, myapple, mybanana);

let {mango, apple, banana} = fruits;
console.log(mango, apple, banana);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// without Rest parameters
function getProduct(a, b) {
    return a * b
};
console.log(getProduct(1, 2))

//with rest parameter
function getProduct1(...input) {
    let product = 1
    for (let item of input)
        product *= item
    return product
}
console.log(getProduct1(1, 2))
console.log("-------------------------------------")
console.log(getProduct1(1, 2, 3, 4))

function demo(a, b, ...input) {
    console.log(a)
    console.log(b)
    console.log(input)
}
demo(1,2,3,4,5)


function checkprime(num){
    if(num%2==0)
    {
        
    } 
    return num;

}


var arr=[34,365346,4634,463];

arr.forEach(element=>{
   result= checkprime(element);
    console.log(result);
});