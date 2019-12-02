//Constructor 
// function Person(name, email){
//     this.name = name;
//     this.email = email;
//     this.out = function() {
//         console.log('Name : ' + this.name);
//     }
// }
// let p1 = new Person('AM Shovon', 'shovon@gmail.com');
// let p2 = new Person('Islamul H', 'islamul@gmail.com');
// let p3 = new Person('Siddiqur R', 'siddik@gmail.com');

// // console.log('Nmer :'+ p1.name);
// // console.log('Email :'+ p1.email);

// var People = [p1, p2, p3];
// // console.log(People);


// People.forEach(function(Person){
//     console.log('Email Address : ' + Person.email);
//     Person.out();
// });


function books(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var books = new books('javascript', 'Maicle', '$50');
console.log(books.constructor);





