// This require functions searches for greet.js file. When not found it goes inside greet folder and gets the module exported by index.js
var greet=require('./greet');
//The following function comes from exports of the index.js file.                  
greet.english();
greet.spanish();