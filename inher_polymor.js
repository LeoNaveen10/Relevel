class Barcelona{
    static legend = "lionel messi";

    slogan= ()=>{
        console.log("You will never walk alone'''");
    }

     record() {
        console.log("91 goals in a calender year");
    }
}

class fcbfemin extends Barcelona{

}

var objfcbfem = new fcbfemin();

objfcbfem.slogan();

console.log(fcbfemin.legend);            // only child class can access parent class static  
console.log(objfcbfem.legend);          //object of child cannot access parent's static variables



class parent{
    eat(){
        console.log("parent is eating");
    }
}

class child1 extends parent{
        eat(){
            console.log("child1 is eating");
        }
}

class child2 extends parent{
    eat(){
        console.log("child2 is eating");
    }
}

const p1= new parent();
const p2=new child1();
const p3=new child2();

p1.eat();
p2.eat();
p3.eat();