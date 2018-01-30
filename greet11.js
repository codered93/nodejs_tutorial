//exports is the variable passed when our code is wrapped in a function_expression.
//And module.exports is the value passed to it in place of exports.
// both exports and module.exports point to the same object so why cnt we directly use exports instead of module.exports
exports=function(){
    console.log('Hello');
}
//When exports is assing a function, a different object is created and exports points to that new object and the reference to that old object is broken.
console.log(exports);
console.log(module.exports);
