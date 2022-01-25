const laptop = {                //1st type
    make: 'Apple',
    model: "MacBook Pro",
    memory: ['SSD', 'HDD'],
    cores: 8,
    memorySize: [256, 512],
    getModel: function() {   
        return this.model;
    }
}
console.log(laptop.make)
console.log(laptop.model)
console.log(laptop.memory, laptop.memory[0], laptop.memory[1])
console.log(laptop.cores)
console.log(laptop.memorySize)
console.log("Output from getModel():", laptop.getModel())

laptop.color="navy blue";     //adding attributes/value


const bike=new Object();        //2nd type

bike.name="fzs";
bike.company="yamaha";
bike.milage="45 km/litre";
bike.man_year="2020";
bike.cc=155;
console.log(bike, bike.cc);

function player(name,nationality,franchise,position){          //3rd type
       this.name=name;  
       this.nationality=nationality;
       this.franchise=franchise;
       this.position=position;
}

var pant=new player("Risabh Pant","Indian","Delhi Daredevils","Wicket keeper Batsmen");
console.log(pant);

var smith=Object.create(bike);//4th type

console.log(smith);


