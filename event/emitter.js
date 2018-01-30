//Function constructor to create multiple events.
//events is the property here.
function Emitter(){
    this.events={};
}
Emitter.prototype.on=function(type,listener){
    //This line checks if there is an proprty array of "type" and if its not then cretae one. 
    this.events[type]=this.events[type]||[];
    this.events[type].push(listener); 
}
//Emit a particular type event.
Emitter.prototype.emit=function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listner){
            listner();
        });
    }
}
module.exports=Emitter;