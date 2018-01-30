var Emitter=require('./emitter');
//Creating a new emitter obj.
var emtr=new Emitter();
//Creating an event call greet using the methods created using prototype.
emtr.on('greet',function(){
   console.log('Someone, Somwhere said hello.'); 
});
emtr.on('greet',function(){
   console.log('A greeting occurred!'); 
});
console.log('Hello!');
//Calling the emitter function emit from emitter.js
emtr.emit('greet');