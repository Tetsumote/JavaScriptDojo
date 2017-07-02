// var speak = function(what){
//     console.log(what);
//     console.log(this);
// }

// var saySomething = {normal: "meow", love: "purr"}

// speak.call(saySomething);

// speak("moof");



var speak = function(what){
    console.log(this.love);
    console.log(this.normal);
     console.log(what);
}

var saySomething = {normal: "meow", love: "purr"}

speak.call(saySomething, saySomething.normal);


speak.apply(saySomething,['meouff']);






