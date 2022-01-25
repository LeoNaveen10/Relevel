console.log("start of execution");


async function lionel_messsi(){
    console.log("inside the function");

    const response = await new Promise(function(resolve,reject){

        setTimeout(function(){
                 resolve("King of Barcelona");  
        },2000);
    });
    
    console.log("wait ended");
    return response;
}

console.log("before calling function");
const result=lionel_messsi();

console.log("after calling the function");
console.log(result);
console.log("end of execution");