// TODO: Import from funcs.js
const morseCode = require("./funcs");


/** TRY OUT INDIVIDUAL FUNCTIONS **/

// let translated;

console.log("Here are a few examples of how the program translates into Morse code: \n");

// TODO: Store a single character in a new variable, char
let char = "k";
// TODO: Call the function and store returned value in a variable, translatedChar
let translatedChar = morseCode.translateChar(char);
console.log(`In Morse code, the letter '${char}' is: \n ${translatedChar}\n`);
console.log(`************************************************************`);

// TODO: Print a sentence that states the character and its translation

// TODO: Store a single word in a new variable, word
let word = "aakash";
// TODO: Call the function and store returned value in a variable, translatedWord
let translatedWord =  morseCode.translateWord(word);
console.log(`In Morse code, the word '${word}' is: \n ${translatedWord}\n`);
console.log(`*************************************************************`);


// TODO: Log a sentence that states the word and its translation

// TODO: Store a phrase in a new variable, phrase
let phrase = "I am the best coder, if copy paste is real included!";

// TODO: Call the function and store returned value in a variable, translatedPhrase
let translatedPharse =  morseCode.translatePhrase(phrase);

// TODO: Print a sentence stating the phrase and its translation
console.log(`In Morse code, the phrase '${phrase}' is: \n ${translatedPharse}\n`);
console.log(`*************************************************************`);