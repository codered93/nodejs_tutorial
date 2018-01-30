//Revealing module pattern.
//Expose only the properties and methods which you want via returned object.
var greeting='Hello World 5';
function greet(){
    console.log(greeting);
}
//Here the 1st greet is the name and 2nd greet is the function greet.
// As the greet function is only exposed ouside the module. other created function might still be kept outside the scope.
module.exports={
    greet:greet
}