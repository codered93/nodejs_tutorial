var express =require('express');
var app= express();
//assing the value of environment variable to port variable or if not mentioned make it 3000
var port=process.env.PORT || 3000;
//get crud operation.
app.get('/',function(req,res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});
//Passing variable from the param in the url
app.get('/person/:id',function(req,res){
    res.send('<html><head></head><body><h1>Person:'+ req.params.id+'</h1></body></html>');
});
//Data avaible in url "localhost:3000/api"
app.get('/api',function(req,res ){
   res.json({firstname:'Himanshu', lastname:'Bhushan'}); 
});
app.listen(port);