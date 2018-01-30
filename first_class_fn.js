// function statement in JS
var greet=function() {
    console.log('hi');
}
greet();

// functions in js are first class. This means they can be used like other objects for passing. like string, int or any other objects.
function logGreet(fn){
    fn();
}
logGreet(greet);

module.exports=greet;