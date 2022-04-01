/*

const readline = require("readline-sync")
// creating variables to store values
const fruit1 = "banana"
const fruit2 = "mango"
const fruit3 = "pineapple"
const fruit4 = "guava"
const fruit5 = "apple"
console.log (fruit1, fruit2, fruit3, fruit4, fruit5)
// creating array of fruits to store fruit names
const fruits = ["banana", "mango", "pineapple", "guava", "apple"]
console.log(fruits, fruits.length)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log("-----------------------------------")
fruits.forEach(printFruits)
function printFruits(element) {
    console.log(element)
}
console.log("====================================")
console.log("Fruit at index 2 is", fruits[2])
fruits.forEach(element => {
    console.log(element)
})

fname = readline.question("Please enter fruit name:")
fruits.push(fname)
console.log(fruits)

let result = Array.from(Array(10), () => Array())
console.log (result)
for(i = 0; i < 10; i++) result[i] =(i + 1) * 10
console.log(result)

*/

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 200,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];




/*arr.reduce((accumation,current value),current_value);

const chartotalMass=characters.reduce((acc,cur)=> acc+cur.mass,0);   //total mass of every charcter
console.log(chartotalMass);

const chartotalHeight=characters.reduce((acc,cur)=> acc+cur.height,0);  //total height of char
console.log(chartotalHeight);

const charEyeColor=characters.reduce((acc,cur)=>{
    if(acc[cur.eye_color])
       acc[cur.eye_color]++;
    else
     acc[cur.eye_color]=1;

    return acc;
},[])
console.log(charEyeColor);

const totalcharnameNO=characters.reduce((acc,cur)=>{
        return  acc+ cur.name.length;
},0);

console.log(totalcharnameNO);


*/




/* """MAP function"""

const first_name = characters.map((Element)=>{
       return Element.name.split(" ")[0];   //[0] and [1] refers 1st and 2nd element
});

console.log(first_name);

const LastThreeElements = characters.map((Element)=>({  //returning object
         mass : Element.mass,            
         eye_color :Element.eye_color,
         gender : Element.gender,

}));

console.log(LastThreeElements);



//array EVERY() -- checks every element in array meet our condition (returns true or false)

const EveryEyecolorisBlue= characters.every((Element)=> Element.eye_color==='blue' )
console.log(EveryEyecolorisBlue);

const EveryheightThan1= characters.every((Element)=> Element.height>1)
console.log(EveryheightThan1);




//atleast one array element meats our condition -- some()

const atleastOneMale= characters.some((Element)=> Element.gender ==='male')
console.log(atleastOneMale);

const atlestOneBlueeye=characters.some((Element)=> Element.eye_color==='blue');
console.log(atlestOneBlueeye);

*/

