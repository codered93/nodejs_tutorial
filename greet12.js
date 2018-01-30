//Here we are going to mutate the export object.
//It means we are going to add method or property.
exports.greet=function(){
    console.log('Hello');
}
console.log(exports);
console.log(module.exports);