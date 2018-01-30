// Immediately invoked fucntion expressions IIFE
var firstname='Vinit';
//This function is an IIFE which as () just after the curly braces.
//Works same as the other function. You can pass agrument on call.
(function(lastname){
    var firstname='Himanshu';
    console.log(firstname);
    console.log(lastname);
}('Bhushan'));
//The above function does not effect the firstname variable due to scope of the var inside the function.
console.log(firstname);