//Functons and arrays
var arr= [];
//Since function in JS are first class, we can also push it into array as we do for integer or string.
arr.push(function(){
   console.log('Hello 1'); 
});
arr.push(function(){
   console.log('Hello 2'); 
});
arr.push(function(){
   console.log('Hello 3'); 
});
//Invoke every function sitting in the array.
//Each item here refers to each function in the array which is passed to function inside for loop.
//Now call the item(); as it is the function itself.
arr.forEach(function(item){
    item();
});