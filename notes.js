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
//https://www.w3schools.com/js/js_math.asp

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

if (isInteger(x) === false) {
    console.log('this number is not an integer')
}




// ****************************String Operations
//https://www.w3schools.com/jsref/jsref_obj_string.asp

//*********charAt
//The charAt() method returns the character at the specified index in a string.

var words = "I AM WORDS";
console.log(words.charAt(3));
//will be M spaces also count and take the space of an index example 4 would be empty because its space between M and W.  You can pull one letter out at a time
var M = words.charAt(3);
console.log(M);

//return last character in string
console.log(words.charAt(words.length - 1));//will be S

for (i = 0; i < words.length; i++) {
    console.log(words.charAt(i));
    //prints each letter & space in words 
}

//*********slice
//The slice() method extracts parts of a string and returns the extracted parts in a new string.
console.log(words.slice(5, 9))//removes WORD


//*********split

console.log(words.split(' '));
//["I", "AM", "WORDS"]

//using limit parameter
console.log(words.split(' ', 1));
//["I"]

//separate at a specific letter
console.log(words.split('W'));
// ["I AM ", "ORDS"]


//*********substring
//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

//This method extracts the characters in a string between "start" and "end", not including "end" itself.
console.log(words.substring(0, 4))


//*********toUpperCase
console.log(words.toLowerCase());
//i am words

console.log(words.substring(0, 4).toLowerCase());
//i am

// toLowerCase()	Converts a string to lowercase letters
// toString()	Returns the value of a String object
// toUpperCase()	Converts a string to uppercase letters
// trim()	Removes whitespace from both ends of a string
// valueOf()	Returns the primitive value of a String object


// ****************************Control flow & loops & operators
//https://www.w3schools.com/jsref/jsref_statements.asp
//*********If else
// if (condition1) {
//     block of code to be executed if condition1 is true
// } else if (condition2) {
//     block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     block of code to be executed if the condition1 is false and condition2 is false
// }


//********* && || !! == === != !== < > <= >=

var a = 'a';
var b = 'b';
var c

if ((typeof a === typeof 'string') || (typeof b === typeof 'string') || (typeof c === typeof 'string')) {
    console.log('there is atleast one string');
    //there is atleast one string.  ||= OR
}

if ((typeof a === typeof 'string') && (typeof b === typeof 'string') && (typeof c === typeof 'string')) {
    console.log('there is atleast one string');
    //these are all strings && = and
} else {
    console.log('one or more of these is not a string');
}


// ==	equal to	x == 8	false	
// x == 5	true	
// ===	equal value and equal type	x === "5"	false	
// x === 5	true
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== "5"	true	
// x !== 5	false	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true
// &&	and	(x < 10 && y > 1) is true	
// ||	or	(x === 5 || y === 5) is false	
// !	not	!(x === y) is true



//*********Switch statement
//	(expression) is required. Specifies an expression to be evaluated. The expression is evaluated once. The value of the expression is compared with the values of each case labels in the structure. If there is a match, the associated block of code is executed

// switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         default code block
// }

var input = 4
switch (input) {
    case 1: console.log('input is equal to 1')
        break;
    case 2: console.log('input is equal to 2')
        break;
    case 3: console.log('input is equal to 3')
        break;
    case 4: console.log('input is equal to 4')
        break;
    default: console.log('input isnt equal')

}



//*********For loops (while etc)
//http://2ality.com/2011/04/iterating-over-arrays-and-objects-in.html
//for ([start]; [condition]; [final-expression])statement
var genre = ['rock', 'classic', 'pop', 'polka'];
for (var i = 0; i < genre.length; i++) {
    console.log(genre[i]);
    //loops through the entire array
}
console.log(genre.indexOf('polka'))
//returns index of where polka is (3)

for (var i = 0; i < 2; i++) {
    console.log(genre[i]);
    //loops through only 2 indexes of the array, 0 and 1
}
var numbersArr = [2.5, 4.6, 10.1, 20];
var numbersArr2 = [1, 18, 3, 5, 7, 9, 11, 15];

function findEvenNumber(arr) {

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            console.log("Found: " + arr[i]);
            break;
        }

        console.log("No even number found.");
    }
    console.log("DONE");
}
findEvenNumber(numbersArr);
findEvenNumber(numbersArr2);;


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
var fruits = ['strawberry', 'apple', 'banana'];
console.log(fruits);
fruits.push('blueberry')
//adds
console.log(fruits);

for (var indexVal in fruits) {
    console.log('Index is ' + indexVal + ' value is ' + fruits[indexVal]);
    //indexVal =  0, 1, 2, 3
}


var strawberry = {
    seeds: true,
    color: 'red',
    type: 'fruit',
    //property: value
}

for (var key in strawberry) {
    console.log('Property is ' + key + ' value is ' + (strawberry[key]));
    //keys =  seeds, color, type
}



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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
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