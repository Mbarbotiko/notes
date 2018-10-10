// ****************************Variables
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

//*********Primitives
// ECMAScript standards define 7 datatypes: +=Symbol+=Object


//undefined
//A variable that has not been assigned a value has the value undefined

var changeMe
console.log(changeMe);
console.log(typeof changeMe);


//string
// once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example:

// A substring of the original by picking individual letters or using String.substr().
// A concatenation of two strings using the concatenation operator (+) or String.concat().

changeMe = 'I am a string';
console.log(changeMe);
console.log(typeof changeMe);


//number
changeMe = 5;
console.log(changeMe);
console.log(typeof changeMe);


//boolean
//Boolean represents a logical entity and can have two values: true, and false

changeMe = true;
console.log(changeMe);
console.log(typeof changeMe);

//null
//The Null type has exactly one value: null

changeMe = null;
console.log(changeMe);
console.log(typeof changeMe);


//Javascript objects
let person = {
    name: 'Ben',
    age: 24

}
console.log("person is a type of " + typeof person);
console.log(typeof person.name)
console.log(typeof person.age)



//type checking //typeof
console.log(null === undefined)
console.log(null == undefined)
console.log(!null);
console.log(!!null);
console.log(1 + null)
console.log(1 + undefined);
changeMe = 'Back to a string'

//can also check  like this 
if (typeof changeMe === typeof 'null') {
    console.log('its a string')
} else (console.log('not a string'))



// ****************************Math Operations

//*********Basic operations

var price = 10.99;
var taxRate = 0.08;
var total = price + (price * taxRate);

console.log(total);
console.log(Math.round(total));
//nearest integer

console.log(Math.ceil(total));
//rounds up

console.log(Math.floor(total));
//rounds down

console.log((10 / 2) * 10);
//is 50
console.log(10 / 3);
//is 3.33333
console.log(10 % 3);
//is remainder of 1 or modulous of 1

//*********Integer/ Float division ** floats have decimals ;)

//*********Modulus %


var x = 10 / 3
console.log(x);

if ((x === x) && (x % 1 === 0)) {
    console.log("is an integer")
} else {
    console.log('is not an integer but is a float');
}

//or like this

if ((x === x) && (x % 1 !== 0)) {
    console.log('this is not an integer')

} else {
    console.log('this is a float')
}

function isInteger(x) {
    return Number(x) === x && x % 1 === 0;
   //returns true/ false if true its an integer if false it is now 
}

console.log(isInteger(x)); 

if (isInteger(x)===false){
    console.log('this number is not an integer')
}




// ****************************String Operations

//*********charAt
//*********splice
//*********split
//*********substring
//*********toUpperCase


// ****************************Control flow & loops
//*********If else
//********* && || !! == === != !== < > <= >=
//*********Switch statement
//*********For loops (while etc)


// ****************************Functions
//*********Create and return data from functions with multiple parameters
//*********
//*********
//*********

// ****************************Objects
//*********Create simple object with constructor and methods
//*********Using this keyword
//*********Using object prototype to add properties an methods to a class
//*********

// ****************************Arrays
//*********How to push values into an array
//*********How to access elements in an array
//*********
//*********

// ****************************Recursion how to recursion in a function
//*********
//*********
//*********
//*********

// ****************************
//*********
//*********
//*********
//*********