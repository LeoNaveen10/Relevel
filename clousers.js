
//this keyword

var football = new stadium("camp nou", "messi", "752", "256");

function stadium(sname, bestplayer, goals, assists) {
    this.sname = sname;
    this.bestplayer = bestplayer;
    this.goals = goals;
    this.assists = assists;
}
console.log(stadium);
console.log(football);



//closures
const r = require("readline-sync");

var manchester_city = () => {
    var titles = 4;

    let num = r.question("have you won the title in 2021? (Y/N)");

    var manager = () => {
        if (num == 'Y' || num == 'y')
            titles++;
        console.log("your total no of titles is ", titles);
    }
    return manager;
}

const innerfunc = manchester_city();

innerfunc();



//bind function ---> call and apply

const arsenal = {
    fa_cup: 13,
    premierleague: 4,
    firstName: "Mikel",
    lastName: "Arteta",

    manager1: function (firstName, lastName) {
        return firstName + " " + lastName;
    },

    totaltitles: function () {
        console.log("total no of titles are", this.fa_cup + this.premierleague);
    }
}

const chelsea = {
    fa_cup: 5,
    premierleague: 3
}

const liverpool = {
    fa_cup: 8,
    premierleague: 20
}

arsenal.totaltitles.call(chelsea);

arsenal.totaltitles.call(liverpool);

console.log(arsenal.manager1.call(chelsea, "thomas", "tuchel"));
console.log(arsenal.manager1.call(liverpool, "Jurgen", "klopp"));

console.log(arsenal.manager1.apply(chelsea, ["thomas", "tuchel"]));

console.log(arsenal.manager1.apply(liverpool, ["Jurgen", "klopp"]));
