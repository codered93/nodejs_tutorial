//Here creating a function cunstructor 
function Greetr(){
    this.greeting='Hello World 4';
    this.greet=function(){
        console.log(this.greeting);
    }
}
//give back the module the ability to create the new object.
module.exports=Greetr;