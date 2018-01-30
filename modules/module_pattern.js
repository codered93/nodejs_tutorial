var greet= require('./greet1');
greet();
//This will contain the object from greet2 and its property.
//This is 1st pattern.
var greet2=require('./greet2');
greet2.greet(); //Use like this to access property of the object.
//This returns the property on the object returned from require function. The property is 'greet'.
//This is 2nd pattern.
var greet22=require('./greet2').greet;
greet22(); //Directly can call the property of the object. 
//Here greet3 is the new object created from greet3.js file
var greet3=require('./greet3');
greet3.greet();
greet3.greeting='Changed Hello World 3';
//require caches and stores the result of the require function for any file name.And when again the require function is called, it returns the cashed version. 
// the greeting property here is changed because before the object was created and since it is an object, it is passed as reference. So any changes made in the reference will affect the original property.
var greet3b=require('./greet3');
//2nd time the new object is not created by the cashed value of the result is returned.So any changes made in the reference will effect in the function call.
greet3b.greet();
//but what if we want different object each time we run require. below is the solution.
var Greet4=require('./greet4');
//Doing this because now greet4 is a function constructor.
//Function Constructor names start with caps.
var grtr=new Greet4();
grtr.greet();
//greet5 is the method as the require function returns the method from greet5.js file
var greet5=require('./greet5').greet;
greet5();