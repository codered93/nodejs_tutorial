var express =require('express');
var app= express();
//importing body-parser module.
var bodyParser = require('body-parser');
//we dnt want to parse body for every http request, only for post.
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mysql=require('mysql');

var jsonParser=bodyParser.json();
//assing the value of environment variable to port variable or if not mentioned make it 3000
var port=process.env.PORT || 3000;
//using a middleware and allowing a static file to be downloaded in /assets.
//Also it means whenever reference to assets is given, it will go to public folder and search for the file there.
app.use('/assets',express.static(__dirname+'/public'));

app.set('view engine','ejs');
//making your own middleware. Callback when route is matched.
app.use('/',function(req,res,next){
   console.log('Request url: '+req.url);
    var conn=mysql.createConnection({
        host: "localhost",
        user: "himanshu",
        password: "bhushan117323",
        database: "addressbook"
    });
    conn.query('select People.ID,FirstName,LastName,Address from People INNER JOIN PersonAddresses ON People.ID=PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressId=Addresses.ID;',function(err,rows){
        if(err)
            throw err;
        console.log(rows);
    });
    next();
});
//using the downloaded file in the api.
app.get('/',function(req,res){
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World!</h1></body></html>');
    //render method of ejs. This finds the file with name index and extension ejs mentioned in app.set();
    res.render('index');
});

app.get('/post',function(req,res){
    res.render('formpost');
});

app.get('/postjson',function(req,res){
    res.render('jsonpost');
});
//Passing variable from the param in the url
app.get('/person/:id',function(req,res){
    //res.send('<html><head></head><body><h1>Person:'+ req.params.id+'</h1></body></html>');
    //rendered the person.ejs file and passed the values to it.
    //req.query.qstr value is taken from the url having the variable name qstr.
    res.render('person',{ID: req.params.id, Qstr: req.query.qstr});
});
//Post request
app.post('/person',urlencodedParser,function(req,res){
    res.send('Thank You');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson',jsonParser,function(req,res){
    res.send('Thank you for JSON data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
//Data avaible in url "localhost:3000/api"
app.get('/api',function(req,res ){
   res.json({firstname:'Himanshu', lastname:'Bhushan'}); 
});
app.listen(port);