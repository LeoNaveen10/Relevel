/*
class PSG{             // default constructor
    static manager="Marucio Pochettinho";
 //static function can only access static variables inside class
    static drill(){
        console.log(this.manager);
    }
}

var mbappe=new PSG;   //object creation
console.log("explanation of default constructor",mbappe,PSG.manager);
PSG.drill();



class Manchester_united{         //constructor without arguments
 
    constructor()
    {
        console.log("We play in Old Trafford, only to play shit");
    }
}

var cr7= new Manchester_united;


class Barcelona              //constructor with arguments
{
    constructor(gk,striker,cdm,defender){
        this.gk=gk;
        this.striker=striker;
        this.cdm=cdm;
        this.defender=defender;
        console.log(this.gk,this.striker,this.cdm,this.defender);
    }
    
}

var xavi=new Barcelona("Ter Stegan","Memphis Depay","Sergio Busquets","Gerard Pique");

*/

const person={
    name : "naveen",
    age : 25,
    message: function() {
        console.log(this.name+" name and age is"+ this.age);

    }
}

const func2=person.message.bind(person);

func2();