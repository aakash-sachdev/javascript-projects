// const input = require('readline-sync');

// let firstName = input.question("what is your first name :");
// let lastName = input.question("what is your last name :");

// console.log("First Name:,"+ firstName)
// console.log("Last Name : "+ lastName +"!")
// console.log("Last,First:"+ (lastName+","+firstName))

const input = require('readline-sync');

let num1 = Number(input.question("Enter a number: "));
let num2 = Number(input.question("Enter another number: "));

console.log(num1 + num2);