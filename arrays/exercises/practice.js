// //practice

// let cars = [];

// // Adding

// cars[0] = "Mustang";
// console.log (typeof(cars));
// console.log (cars);
// cars[1] = "Charger";
// console.log(cars)

// console.log ("**************************************************************************");

// //Index of Element

// console.log (cars[0].indexOf("t"));

// console.log ("**************************************************************************");

// // Replacing

// let plays = ["Othello", "Hamlet"];
// plays[1] = "King Lear";
// console.log(plays);

// console.log ("**************************************************************************");

// let books;
// console.log(typeof(books));
// // books[0] = "Harry Potter";  // Error - Cuz JS doesn't know Books is an array. 

// console.log ("**************************************************************************");

// let sups = ["Batman", "Spiderman", "Superman", "Ironman", "Thor"];
// console.log(sups.length);

// console.log ("**************************************************************************");

// let femaleSups = ["Ironlady", "Catwoman", "Supergirl"];
// femaleSups[0] = "Harley Q";
// femaleSups[3] = "Scarlet"
// console.log(femaleSups);

// console.log ("**************************************************************************");

// let sports = ["Football", "Baseball", "Cricket", "Rugby"];
// console.log(sports.includes("Golf"));
// console.log(sports.includes("football")); // casesensitive
// console.log(sports.includes("Football"));

// console.log ("**************************************************************************");

// console.log(sports.indexOf("Cricket"));
// console.log(sports.indexOf("Golf"))
// console.log(sports.indexOf("Rugby"))

// console.log ("**************************************************************************");

// console.log(sports.reverse());
// // console.log(sports.reverse());
// console.log(sports);
// console.log(sports.reverse());

// console.log ("**************************************************************************");

// console.log (sports.sort());
// console.log (sports);

// let nums = [1,4,6,1000,88,2222,19];
// console.log(nums.sort());
// console.log(nums);

// console.log ("**************************************************************************");

// let array1 = ["Frasier", "Niles", "Marty", "Daphne", "Roz", "Eddie"];

// array1.splice(2,0,"Bulldog");
// console.log(array1);

// console.log ("**************************************************************************");

// array1.splice(3,1,"Bulldog");
// console.log(array1);

// console.log ("**************************************************************************");

// array1.splice(2,2,"Pity");
// console.log(array1);

// console.log ("**************************************************************************");

// array1.splice(3,2);
// console.log(array1);


let array1 = ["Frasier", "Niles", "Marty", "Daphne", "Roz", "Eddie"];
let sups = ["Batman", "Spiderman", "Superman", "Ironman", "Thor"];

console.log ("**************************************************************************");

console.log(array1.slice(1,4));
console.log(array1);

console.log ("**************************************************************************");

console.log(array1.slice());
console.log(array1);

console.log ("**************************************************************************");

let combinedArray = array1.concat(sups);
console.log(combinedArray);

console.log ("**************************************************************************");


let strSups = sups.join(" ");
console.log(strSups);
console.log(sups);

console.log ("**************************************************************************");


let supsCopy = strSups.split(" ");
console.log(supsCopy);

