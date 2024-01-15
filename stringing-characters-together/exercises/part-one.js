let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let num1 = String(num);
let numOfDigits = num1.length;

console.log(`The lenght of num variable is ${numOfDigits}.`);

// Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
// Modify your code to print out the length of a decimal value EXCLUDING the period.

let decimalNum = 420.19;
let decimalNum1 = String(decimalNum);

console.log(decimalNum1.slice(1,6).length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let num2 = 112.098

if (String(num2).includes('.')){
    console.log(String(num2).length-1);
    } else {
    console.log(String(num2).length);
    }