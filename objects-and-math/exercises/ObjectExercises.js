let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let youngAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 	0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
youngAnimal["astronautID"] = 5;

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, youngAnimal];

// Print out the relevant information about each animal.
function crewReports (animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

console.log(crewReports(superChimpOne));

// Start an animal race!

function fitnessTest (arr) {
   let turnToComplete = [];
 
   for (let i = 0; i < arr.length; i++){
   let numSteps = 0;
   let turns = 0;
 
   while (numSteps < 20) {
      numSteps = numSteps + arr[i].move();
      turns++;
   }
 
   turnToComplete.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);

   }
   return turnToComplete;
}

console.log(fitnessTest(crew));