/*
Function : A function is basically a block of code that can execute a specific TextTrackList.  The value of action performed by a function can be achieved when we call or invoke a function. A function consist of function name (to write function name we have to follow the rules of writing identifies). A function contains a paranthesis where parameters can be conatined.

There are 3 ways to declare functions. 
1. function declaration
**
syntax ::
Function funcname(parameters) {
    //code : statment to be executed
    }
**
EXAMPLE::
*/

function greeting(){
    console.log("hello world");
}
greeting();

// There are 2 major function:
// i. Unparameterized
// ii. Parameterized

function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Rame");
sayHello("Hari");
sayHello("Name1");

// add function to show charaterstics of function
// i. --Function declaration are hoisted :: Declaration can be done before declaration of function
add(2,5) 
function add(num1){
    console.log(num1 + num2);
}
console.log(add(5, 10)); //there is no return keyword in upper layer of function so it will return undefined

// if there is no return keyword then it will always return undefined 
//-- return keyword --
// No block under return keyword will be executed what ever the value is 
function calcAge(birthYear)
{
    let thisYear = 2024;
    let age = thisYear - birthYear;
    return age;
    // {a : 1 , b:2 }; This object is not returned cuz it is under return keyword

    // return {
         // {a : 1 , b:2 };   these 3 blocks of code will returned 
    // }
}
const myAge = calcAge(1999);

/*
 ------------------------------------------------------------------------------------------------
// 2. function expression (also known as anonymous function)

syntax ::
variableType identifier = function(){
    //code to be executed
}
Example of function expression - the unparameterized 
*/

let greetings = function(){
    console.log("Hello world !");
}
greetings();

// although variable declared with var will be hoisted but only variable is hoisted not the value. 
//output :: greetings is not the function cuz after = it will be value which wont be assigned only variable defined like this :

// var greetinggs 
greetinggs();  // we are calling here a variable not function
var greetinggs = function(){
    console.log("Hello world !");
}


// 3. arrow function (also known as fat arrow)

// The major differnce between them is syntax. 


// 1 eg :
