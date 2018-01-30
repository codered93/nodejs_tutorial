// In javascipt the primitive data type is passed by value and Objects are passed by reference.
// For primitive data type the operation is performed on the copy of the variable and the change is not reflected back to the variable
//Pass by Value
function change(b) {
    b++;
}
var a = 1;
change(a);
console.log(a);
// For Objects the reference is passed to functions and the changes are reflected to the original object.
//Pass by reference
function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {};
}
var c = {};
c.prop1 = {};
console.log('before function call ');
console.log(c);
changeObj(c);
console.log('after function call ');
console.log(c);