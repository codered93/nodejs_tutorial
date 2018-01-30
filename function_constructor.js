// Here we are creating a function constructor
function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
// Here we are creating a name variable and calling the function constructor with the parameters passed to it.
var name=new Person('Himanshu','Bhushan');
console.log(name.firstname);
//All JavaScript objects inherit the properties and methods from their prototype.
//Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
//Objects created with new Date() inherit the Date.prototype.
//The Object.prototype is on the top of the prototype chain.
//All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.
//The JavaScript prototype property allows you to add new properties to an existing prototype.
//Here using prototype property we are adding new function to the object created from Person().
Person.prototype.greet= function(){
  console.log('Hello, '+this.firstname+' '+this.lastname);  
};
//New function greet created which is used below.
name.greet();
//greet() is also applicable to the new object created from person as here new_name is created.
var new_name=new Person('Vinit','Kumar');
new_name.greet();