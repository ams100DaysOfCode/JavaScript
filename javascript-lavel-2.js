//Object.create
/*
var personProto = {
    calculateAge : function() {
        console.log(2019-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1996;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name : { value : 'Jane' },
    yearOfBirth : { value : '1996' },
    job : { value : 'coder' }

});
*/

// Premitives vs object

// Premitives

let a = 20;
let b = a;
 a = 46;
console.log(a);
console.log(b);

// Object

var obj1 = {
    name: 'Shovon',
    age: 22
};
var obj2 = obj1;
obj1.age = 20;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 30;
var obj = {
    name : 'AMS',
    city : 'Dhaka'
};
function change(a,b){ 
    a.age = 30;
    b.city = 'Dhaka, Bangladesh';
}
change(age,obj);
console.log(age);
console.log(obj.city);
console.log('My name is : '+ obj.name);