function naveenpromise() {                          //promises 1st type
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            const x = true;
            if (x)
                resolve();
            else
                reject();
        }, 2000)
    });
}

function Promiseresolved() {
    console.log("promises are completed");
}
function promisefailed() {
    console.log("promises are made to be broken");
}


naveenpromise().then(Promiseresolved).catch(promisefailed);



const students=[                                //promises 2nd type
    {name : "naveen",age:35},                  //array type
    {name : "jayashree", age : 29}
  ]
  
  function enrollStudents(details){
     return new Promise(function(resolve,reject){
      setTimeout(function(){
        students.push(details);
        console.log("Student enrolled");
        resolve();
      },1000)
    });
    
  }
  
  function fetchStudents(){
    setTimeout(function(){
      console.log("fetching the details of students");
      console.log(students);
    },2000);
  }
  


enrollStudents({name : "aakansha", age:32}).then(fetchStudents);  

