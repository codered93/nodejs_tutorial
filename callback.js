function greet(callback){
    console.log('Hello world!');
    callback();
    console.log('After callback!');
}

greet(function(){
   console.log('The callback was invoked'); 
});