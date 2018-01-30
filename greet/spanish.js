//This require function converts the json into object which can be used here.
var greetings=require('./greeting.json');
//This is inside greet folder.File name is spanish.js
var greet= function(){
    //console.log('Hola');      //Instead of this line we can use following.
    console.log(greetings.es);    
}
//module.exports makes this function available to the index.js file.
module.exports=greet;