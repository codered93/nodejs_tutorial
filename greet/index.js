// Inside greet folder. File name is index.js
// Require function used to inherit modules in english.js and spanish.js
var english=require('./english');
var spanish=require('./spanish');
//Following makes available to the index.js file.
// Both the function in spanish and english file is available.
module.exports={
    english : english,
    spanish : spanish
}