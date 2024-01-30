const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsFromA = function(n) {
  return n.slice(0,1) === "a";
};
console.log(getValidInput('Enter a name starts with "a":', startsFromA));

// TODO 2: write a validator 
// that ensures input is a vowel
// let vowels = ['a', 'e', 'i', 'o', 'u'];

let inputIsVowel = function(n) {
  return n === "aeiou";
};
console.log(getValidInput('Enter a name starts with a vowel:', inputIsVowel));

// Be sure to test your code!
