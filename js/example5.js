// function kung(){
//     console.log('foo');
// }

// kung();

var iKnow = function kung(){
    console.log('foo');
}();

// iKnow();



(function(a,b){
    console.log('test');
    console.log(a+b);
})(2,4);