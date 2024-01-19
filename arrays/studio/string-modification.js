const input = require ('readline-sync');

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strla = str.slice(0,3)
// console.log (strla) 
let strCode = str.slice(3,10)
// console.log(strCode)
let strNew = strCode + strla;
console.log (`We used slice method, created two variable and concatenate them to make ${strNew}`)

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numOfLetterToBeChanged = input.question(" Enter the number of letters that will be relocated? ")
let newStr = str.slice(0,numOfLetterToBeChanged)
 // console.log(newStr)

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numOfLetterToBeChanged < str.length){
   console.log(newStr) 
}else{
    console.log(strNew)
}
