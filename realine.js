var readline=require("readline");
var r= readline.createInterface(process.stdin,process.stdout);

r.question("enter your name ",(name)=>
{
    name= "hello "+name;
    console.log(name);
    r.close();
});


const x= require("readline");
const rl= x.createInterface({input:process.stdin,
                             output: process.stdout});

let num1= Math.floor((Math.random()*20)+1);
let num2=Math.floor((Math.random()*10)+1);
let answer = num2+num1;

rl.question(`the sum of ${num1} and ${num2} is \n`,(userinput)=>{
    if(userinput.trim()==answer)
        rl.close();
    else{
        rl.setPrompt('incorrect response try again\n');
        rl.prompt();
        rl.on('line',(userinput)=>{
            if(userinput.trim()==answer)
                rl.close();
            else{
                rl.setPrompt(`your input ${userinput} is incorrect, try again`);
                rl.prompt();
            }
        });
    }
});
rl.on('close',()=>{
    console.log('you got the right  answer');
});