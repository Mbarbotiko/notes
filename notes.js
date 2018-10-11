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

//loop that stops once a match is found, in this example even number passing in array as argument, arr as parameter
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


function multiply(a, b) {
    return a * b
}

console.log(multiply(1, 6));



// ****************************Functions

//*********Create and return data from functions with multiple parameters
//*********
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
    //use parse int if number is entered as a string will return it as an integer.
    //use split to turn number into an array of substrings
    //use sort to put them into order ascending
    //use reverse to put them into reverse order
    //use join to put them back into one whole number

}
console.log(descendingOrder(75836352));


//*********

function runARandom(n) {
    return Math.floor(Math.random() * n);
    //returns a random integer between 0 and whatever the argument passed is.
    //if 2 is argument will return between 0 & 1, if 10 , 0-9
}
console.log(runARandom(2));

var counter = 0;

function hollerAtMe(name, age, movie) {

    return name + ' ' + age + ' ' + movie + ' ' + ' ' + counter++;
    //takes in name age movie parameters, and returns them along with a counter that is tracking how many entries have been made
}

console.log(hollerAtMe('Margarita', 32, 'Killer Klowns'));
console.log(hollerAtMe('Margarita', 32, 'Killer Klowns'));
console.log(hollerAtMe('Margarita', 32, 'Killer Klowns'));
console.log(hollerAtMe('Margarita', 32, 'Killer Klowns'));
console.log(hollerAtMe('Margarita', 32, 'Killer Klowns'));


//*********
function multiplierReturn(x, y, z) {
    return x * y * z;
}
//simple function takes in 3 parameters and multiplies them together returns the result

console.log(multiplierReturn(6, 3, 1));

//*********
// Creates a Function called "isString" that takes three arguments (x, y, z).
function isString(x, y, z) {

    // isString checks if each argument is a string using typeof.

    // If each argument is a string it will note that.
    if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
        console.log("Yep. They are all strings");
    }

    // If anyone of them is NOT a string... it will note that.
    else {
        console.log("No... I don't believe these are all strings.");
    }
}

isString('yes', 5, 'yes i am');

//*********
// Creates a Function called "vowelChecker" that takes in a single argument (x).
function vowelChecker(x) {

    // vowelChecker will grab the first letter (character)...
    var firstChar = x.toLowerCase().charAt(0);

    // Then check if that first letter is a vowel.
    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {

        // If so... it will log that.
        console.log("OMG. The first letter is a vowel!");

    }

    else {

        // If not... it will log that.
        console.log("First letter is NOT a vowel. *sadface*");

    }
}

vowelChecker('Words')
vowelChecker('Okay');


// ****************************Objects
//*********Create simple object with constructor and methods
var threeObjects = [
    {
      name: "Digital Destructor",
      brand: "Honda",
      carsDestroyed: 2001
    },
    {
      name: "Turbulent Combuster",
      brand: "Toyota",
      carsDestroyed: 500
    },
    {
      name: "Sams Man",
      brand: "Honda",
      carsDestroyed: 2
    }
  ];
  

threeObjects.forEach(function(name, brand, carsDestroyed){
    console.log(name, brand, carsDestroyed);
});

console.log(threeObjects[0].name);


//filter()
//map()
//sort()
//reduce()




  //couple of different ways to create objects below, creating a model/ blue print is the easiest/ fastest

let personSix = new Object();
personSix.name = "Dan";
personSix.eyeColor = "Green";
personSix.age = 27;
personSix.updateAge = function () {
    return ++personSix.age;
}

console.log(personSix.age);
personSix.updateAge();
console.log(personSix.age);


//constructors:
//set up the Person object blue print

function PersonTwo(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function () {
        return ++this.age;
    };
}

let person01 = new PersonTwo("Mike", "Green", 27)
let person02 = new PersonTwo("John", "Blue", 28)
let person03 = new PersonTwo("Janet", "Brown", 29)

console.log(person01.name);
console.log(person01.updateAge());

//may also be written like this



// //*********Using object prototype to add properties and methods to a class

function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nAge: " + this.age + "\nLanguages: " + this.language);
};

Programmer.prototype.nameAge = function () {
    return this.name + this.age;
   
};



//you can add methods to a prototype but you cannot add properties, you can only add onto the function.  Example after this.language =  language you can add a property of height 



// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();

bob.nationality = 'Russian'
//adding a property to bob

console.log(bob)
console.log(bob.nameAge());//calling the nameAge method on bob our created object

delete bob.age;
//deletes the age property

console.log(bob);

//*********

var Pokemon = function () {
    this.hungry = false;
    this.happy = false;
    this.strength = 1;
    this.level = 1;
    this.feed = function () {
      if (this.hungry) {
        console.log('Thanks for feeding me,  I am happy and not Hungry!');
        this.hungry = false;
        this.happy = true;
      }

    }
    this.train = function () {
      this.strength++;
      this.hungry = true;
      this.happy = false;
      console.log('I am feeling this strong:  ' + this.strength + ' but I am a little hungry now');

    }
    //putting the function in the object makes it accessible by other objects created in the future

  }

  var pokemon = new Pokemon();
  //creating pokemon object
  pokemon.pikachu = new Pokemon();
  pokemon.charmander = new Pokemon();
  pokemon.bulbasaur = new Pokemon();
  pokemon.squirtle = new Pokemon();
  // adding different types of pokemon to pokemon object
  console.log(pokemon);
  console.log(pokemon.pikachu);
  console.log(pokemon.pikachu.strength);
  // accessing different properties for object

  pokemon.pikachu.shock = function () {
    this.strength--;
    this.hungry = true;
    this.happy = false;
    console.log('I am feeling this strong:  ' + this.strength + 'I feel weaker than before');
    //setting a function that can be called on specific pokemon object (can set as many unique functions as needed)

  }
  pokemon.pikachu.shock();
  pokemon.pikachu.shock();
  pokemon.pikachu.shock();
  pokemon.pikachu.shock();
  console.log(pokemon.pikachu)
  pokemon.pikachu.train();
  pokemon.pikachu.train();
  pokemon.pikachu.train();
  pokemon.pikachu.train();
  pokemon.pikachu.train();
  console.log(pokemon.pikachu)
  // pokemon.charmander.shock();
  //this one be recognised as an attack for other pokemon because it hasnt been assigned the function

  Pokemon.prototype.printInfo = function () {
  console.log("Hungry: " + this.hungry + "\nHappy: " + this.happy +
      "\nStrength: " + this.strength + "\nLevel: " + this.level);
};




//*********Using this keyword

let dog = {
    sound: 'bark',
    talk :function(){
      console.log(this.sound);
      // you can use this to refert to the object properties within the object
    }
  }
  
  dog.talk();

  let talkFunction = dog.talk// will be undefined
  let bindFunction = talkFunction.bind(dog)//if you bind
  bindFunction();//you access dog again and call its talk function
  
  
  // if outside need to call it by dog. whatever property
  




// ****************************Arrays
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//*********How to push values into an array


//*********How to access elements in an array
var coolPeople = ["bruce lee", "arnold schwarzenegger", "will smith", "esther", "marie curie", "joan of arc"];

// Then use console.log to print each of the names listed inside.
// ...
console.log(coolPeople[0,1,2,3,4,5]);
console.log(coolPeople);



// ****************************Recursion how to recursion in a function
//*********function calls itsself until it doesnt / stops
// https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f

function countDown(num){
    if (num ===0) return;//stop the function or it'll go forever
    console.log(num)
    countDown(num-1)
}

countDown(10);

function addHundred(num){
    if (num >10000) return;
    console.log(num);
    addHundred(num * 10);
}

addHundred(1);

function reverse( str ) {
    console.log(str);
    if ( str.length <= 1 ) {
      return str;
    }
    return reverse( str.substr( 1 ) ) + str[ 0 ];
    
  }

  console.log(reverse('MARGARITA'));

