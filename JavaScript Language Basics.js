/***** Hello World *****/
/*
console.log("Hello World!!");

var firstline = 'Hello World';
document.write(firstline + "<br>");
*/




/***** Variable Mutation and Type Coercion *****/
/*
var firstName = 'Ahesanul M.';
var lastName = 'Shovon';
var job = 'Student';
var dept = 'B.Sc in CSE';
document.write('Hello, I am '+ firstName + lastName + '. My Job is ' + job + '. My department : ' +dept); 

// Variable motation
age = 'twenty';
job = 'Teacher';
alert('Hello, I am '+ firstName + lastName + '. My Job is ' + job + '. My department : ' +dept); 
document.write('</br>');

var lastName = prompt('What is your last name?');
document.write('Hello, I am '+ firstName +' ' + lastName);
/*




/***** Basic Operator *****/

/*
var now = 2018;
var yearAge = 1997;
var fullAge = 20;

//Multiple operator
var result = now - yearAge >= fullAge;
document.write(result);

//Grouping 
var amsAge = now - yearAge;
var pAge = 30;
var avgAge = (amsAge + pAge) / 2;
document.write('Average Age is : ' + avgAge);
*/




/************************
    Coding Challenge 1 
*************************/
/*
Coding Challenge 1 in JavaScript

Mark and John are trying to compare their BMI (Body Mass Index), Which is calculate using the formula : BMI = mass/height^2 = mass/(height*height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about weather Mark has a heigher BMI then John.
4. Print a string to the console containing the variable from step 3(Something like "Mark's BMI higher than John's? true").
*/

//SOLUTION
/*
var massMark = 50;
var heightMark = 1.5;

var massJohn = 60;
var heightJohn = 1.6;

var BMIMark = massMark/(heightMark*heightMark);
var BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIJohn , BMIMark);

var bmiResult = (BMIJohn > BMIMark);
console.log('Mark\'s BMI higher than John\'s?' +bmiResult);
*/



/***** if else statement *****/


//Coding Challenge 1 (if else statement) in JavaScript
/*
var massMark = 50;
var heightMark = 1.5;

var massJohn = 60;
var heightJohn = 1.6;

var BMIMark = massMark/(heightMark*heightMark);
var BMIJohn = massJohn/(heightJohn*heightJohn);

if(BMIJohn > BMIMark){
    console.log('John\'s BMI higher than Mark\'s');
}else{
    console.log('Mark\'s BMI higher than John\'s');
}
*/



/***** Boolean statement *****/

/*
var firstName = 'Shovon';
var age = 20;

if(age < 13){
    console.log(firstName +' is a boy.');
}else if(age >= 13 && age < 20) {
    console.log(firstName +' is a teenager.');
}else if(age >= 20 && age < 30) {
    console.log(firstName +' is a young man.');
}else{
    console.log(firstName +' is man.');
}
*/



/***** Ternary Operator and Switch Statements *****/
/*
var firstName = 'Shovon';
var age = 22;
//Ternary Operator
age >= 18 ? console.log(firstName +' drink beer.') : console.log(firstName +' drink juice');

//Switch statement
var job = 'student'
switch(job){
    case 'teacher':
        console.log(firstName +' is a Teacher in Javascript.');
        break;
    case 'student':
        console.log(firstName +' is a Study in Javascript.');
        break;
    case 'driver':
        console.log(firstName +' is a driver Uber in Dhaka.');
        break;
    default:
        console.log(firstName +' is a person.');
}



age = 15;
switch(true){
    case age < 13 :
        console.log(firstName +' is a boy.');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName +' is a teenager.'); 
        break;
    case age >= 20 && age < 30 :
        console.log(firstName +' is a young man.');
        break;
    default :
        console.log(firstName +' is man.');
}


//Type Coercion

var firstName = 'Mickel';
var age = 20;
    console.log(firstName + ' ' + age);
var job = 'developer';
    console.log(firstName +" is "+ age + " years old." +" He is a "+ job );
var job = ' teacher';
    console.log(firstName +" is "+ age + " years old." +" He is a "+ job );
var lastName = prompt("Please Enter your Last Name");
    console.log(firstName + " "+ lastName);
*/



/************************
    Coding Challenge 2
*************************/
/* Compare John, Mike, Marry score. 

var scoreJohn = (89 + 120 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMarry = (97 + 134 + 105)/3;

console.log(scoreJohn, scoreMike, scoreMarry);

if(scoreJohn > scoreMike && scoreJohn > scoreMarry){
    console.log('John team win by '+scoreJohn+' points');
}else if(scoreMike > scoreJohn && scoreMike > scoreMarry){
    console.log('John team win by '+scoreMike+' points');
}else if(scoreMarry > scoreJohn && scoreMarry > scoreMike){
    console.log('John team win by '+scoreMarry+' points');
}else{
    console.log('The Match is drow...');
}


// Compare John and Mike score

if(scoreJohn > scoreMike){
    console.log('John team win the game..');
}else if(scoreMike > scoreJohn){
    console.log('Mike team win the game..');
}else{
    console.log('The game is drow');
}




/***** functions *****/
/*
function calculateAge (birthYear){
    return 2018 - (birthYear);
}
var john = calculateAge(1990);
var mike = calculateAge(1972);
var deni = calculateAge(1950);
console.log(john, mike, deni);

function yearOfRetairment(year, firstName){
    var age = calculateAge(year);
    var retairAge = 70 - age;
// console.log(firstName + ' retire in ' + retairAge +' years.');

    if(retairAge > 0){
        console.log(firstName + ' retire in ' + retairAge +' years.');
    }else{
        console.log(firstName + ' Already retired.');
    }

}
yearOfRetairment(1990, 'John');
yearOfRetairment(1972, 'Mike');
yearOfRetairment(1940, 'Deni');
*/


/***** functions Expression *****/
/*
var whatPrint = function(job, firstName){
    switch(job){
        case 'teacher':
            return(firstName +' teach how to code.');
        case 'driver':
            return(firstName+ ' drive the car.');
        case 'designer':
            return(firstName+ ' teach how to design.');
        default:
            return(firstName+ ' Already Retired job.');
    }

}
console.log(whatPrint('teacher', 'John'));
console.log(whatPrint('driver', 'Mike'));
console.log(whatPrint('designer', 'Deni'));
console.log(whatPrint('art', 'Smith'));
*/



/************************
    Coding Challenge 3
*************************/
/*
function tipCalculate(bill){
    var parcentage;
    if(bill < 50){
        parcentage = .2;
    }else if(bill > 50 && bill < 200){
        parcentage = 0.15;
    }else{
        parcentage = 0.1;
    }
    return (parcentage * bill);
}

var bills = [124, 48, 268];
var tip = [ tipCalculate(bills[0]), tipCalculate(bills[1]), tipCalculate(bills[2])];

var totalTipBill = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2] ];
console.log(tip, totalTipBill);
*/



/************************
    Coding Challenge 4
*************************/
/*
var john = {
    fullName: 'John Smith',
    mass: 90,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 100,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

//john.calcBMI();
//mark.calcBMI();

if(john.calcBMI() > mark.calcBMI()){
   console.log(john.fullName + ' has a heighr BMI of  '+ john.bmi);
}else if(mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName + ' has a heighr BMI of  '+ mark.bmi);
}else{
    console.log('They have the same BMI');
}

*/

/********************************
    Coding Challenge 5(part-01)
*********************************/
/*
var shovon = {
    fullName: 'Ahesanul Mahbub',
    bills: [124, 48, 268, 180, 42],
    calctip: function() {
        this.tips = [];
        this.finalValue = [];

        for(i = 0; i < this.bills.length; i++) 
        {
            //Determine percentage based on tipping rules
            var percenage;
            var bill = this.bills[i];

            if(bill < 50){
                percenage = .2;
            }else if(bill > 50 && bill < 200){
                percenage = .15;
            }else{
                percenage = .1;
            }

            // Add results to the corresponding
            
            this.tips[i] = bill * percenage;
            this.finalValue[i] = bill + bill * percenage; 
        }
    }
}




var ams = {
    fullName: 'AMS Shovon',
    bills: [77, 375, 110, 45],
    calctip: function() {
        this.tips = [];
        this.finalValue = [];

        for(i = 0; i < this.bills.length; i++) 
        {
            //Determine percentage based on tipping rules
            var percenage;
            var bill = this.bills[i];

            if(bill < 100){
                percenage = .2;
            }else if(bill >= 100 && bill < 300){
                percenage = .1;
            }else{
                percenage = .25;
            }

            // Add results to the corresponding
            
            this.tips[i] = bill * percenage;
            this.finalValue[i] = bill + bill * percenage; 
        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for(i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

shovon.calctip();
ams.calctip();

shovon.average = calcAverage(shovon.tips);
ams.average = calcAverage(ams.tips);

console.log(shovon, ams);

if(shovon.average > ams.average){
    console.log(shovon.fullName +'\'s family pays higher tips, with an average of $' +shovon.average);
}else if(ams.average > shovon.average){
    console.log(ams.fullName +'\'s family pays higher tips, with an average of $' +ams.average);
}
*/

/***** Scoping and Scope chain *****/

var a = 'Hello,';
first();

function first(){
    var b = 'Hi';
    second();

    function second(){
        var c = 'Hey';
        third()
    }
}

function third(){
    var d = 'Shovon';
    console.log(a+d);
}



/***** ( This ) Keyword *****/

var john = {
    name: 'John',
    birthOfYear: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.birthOfYear);
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    birthOfYear: 1960
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();