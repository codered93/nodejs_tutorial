//What if we want to pass some data at runtime
var EventEmitter=require('events');
var util=require('util');
//Creating Greetr function constructor
function Greetr(){
    this.greeting='Hello World';
}
//The Greetr function inherits the properties of the built-in events of JS.
util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet=function(data){
    console.log(this.greeting+' : '+data);
    //Accessing the emit function of the events object.
    //Function emit is overloaded with 2 parameters.1 with the event type and other with external data.
    this.emit('greet',data);
}
var greeter1=new Greetr();
//data is added here for that it is available to the greet event when called
greeter1.on('greet',function(data){
    console.log('Someone Greeted'+' : '+data);
})

greeter1.greet('Himanshu');
