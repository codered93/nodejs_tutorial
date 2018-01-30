//Creating object literal ehich will be later used to create object.
var person={
    firstname:'',
    lastname:'',
    greet: function(){
        return this.firstname+' '+this.lastname;
    }
}
//Object.create uses object literal defined earlier to create object of same type for any number of times with same prop.
var john=Object.create(person);
john.firstname='John';
john.lastname='Doe';

var jane=Object.create(person);
jane.firstname='Jane';
jane.lastname='Doe';

console.log(john.greet());
console.log(jane.greet());
