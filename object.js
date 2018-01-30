// This is an object literal. Object literal in JS is the name value pair separated by : and enclosed between braces.
var person={
    firstname: 'Himanshu',
    lastname: 'Bhushan',
    greet: function(){
        console.log('Hello, '+this.firstname+' '+this.lastname);
    }
};


// Object literal can be accessed by any of the following methods.
person.greet();
console.log(person['firstname']);
console.log(person.lastname);