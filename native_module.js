//We can also use native module provided by node core apart from our custom module.
//No ./ as we are importing native module.
var util=require('util');
var name='Himanshu';
var greeting=util.format('Hello %s',name);
//util.log prints output with timestamp.
util.log(greeting);
