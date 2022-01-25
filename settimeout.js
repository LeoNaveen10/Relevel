/*

const students=[
    {name : "naveen",age:35},
    {name : "jayashree", age : 29}
  ]
  
  function enrollStudents(details,fetchStudents){
  
      setTimeout(function(){
        students.push(details);
        console.log("Student enrolled");
      },1000)
  
    fetchStudents();     
  }
  
  function fetchStudents(){
    setTimeout(function(){
      console.log("fetching the details of students");
      console.log(students);
    },2000);
  }
  
  enrollStudents({name:"vijay",age:50},fetchStudents);

  */
  

  //assignment

  setTimeout(() => {
    functioncall();
  },10000);

 var IntervalId= setInterval(() =>{
    let i=1;
    for( ;i<=10;i++)
     console.log(i);
   // if(i===11)
       clearInterval(IntervalId);
  }, 5000);



  function functioncall(){
      console.log("called function after 10 sec");
  }