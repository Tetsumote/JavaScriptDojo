// var batwing = {
//     status: "Ready",
//     rescueBatman: function(){
//         document.write("Locating his transponder ... inititating launch ...");
//     }
// }
// // batwing.rescueBatman();

// if(batwing.status === "Ready"){
//     batwing.rescueBatman();
// }


// var utilities = {
//     printAllMembers: function(targetObject){
//         for(i in targetObject){
//             document.write("<br />" + targetObject[i]);
//         }
//     }
// }



// var heroes = {
//     batman: "Bruce Wayne",
//     superman: "Clark Kent",
//     supergirl:"Sofie Lorenz",
//     ironman:" Stark",
//     bob: "bob"
// }
// utilities.printAllMembers(heroes);





var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function(){
            document.write("Nex alliance ... unite!");
        }
    },
    cities:[
        {locationId: 15, name: "Gladius"},
        {locationId: 16, name: "Chalybs"},
        {locationId: 17, name: "Ensis"}
    ]
};


// planet.faction.notification();
// document.write(planet.cities[1].name);


var z = planet;
document.write(z.name);

if (typeof planet.defense == "undefined"){
    planet.defense = "Ion Canon";
}
document.write(planet.defense);

console.log(z);

for (member in planet){
    document.write("</br>" + member + "" + planet[member]);
}


function car(make, model, year){
this.make = make;
this.model = model;
this.year = year;
}

var myCar = new car("Eagle", "Talon TSi" , 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

document.write("<br>" + myCar.model);
document.write("<br>" + myOtherCar.model);