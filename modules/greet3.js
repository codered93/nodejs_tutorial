//Here creating a function cunstructor 
function Greetr(){
    this.greeting='Hello World 3';
    this.greet=function(){
        console.log(this.greeting);
    }
}
//Replace the empty object with own function
//New Object is being created.
module.exports= new Greetr();