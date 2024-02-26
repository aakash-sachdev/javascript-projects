// Example 1:

let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"],
    sign: function() {
        return this.name + " is a " + this.species;
    }
};
console.log(tortoiseOne.sign());
console.log("********************************************************************");


// Example 2:
// USing both way to access propert
console.log(tortoiseOne["name"]);
console.log(tortoiseOne.name);
console.log("********************************************************************");


// Modify the value of an object:

console.log(tortoiseOne["weight"]);
console.log(tortoiseOne.weight);

newWeight = tortoiseOne.weight + 10;
// console.log(tortoiseOne.weight + 10);

console.log(newWeight);
tortoiseOne["weight"] = newWeight;
console.log(tortoiseOne["weight"]);
console.log("********************************************************************");

//Add New key/value pairs:
let tortoiseTwo = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919
};

console.log(tortoiseTwo);

tortoiseTwo["speed"] = 'Faster than the hare.';
console.log(tortoiseTwo);

tortoiseTwo["age"] = 120;
console.log(tortoiseTwo.age);
console.log(tortoiseTwo);
console.log("********************************************************************");


// Giraffe example:
let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};

giraffe["birthday"] = function () {return giraffe.age = giraffe.age + 1;};
console.log(giraffe.birthday());
console.log("********************************************************************");


// Coding with object
let tortoise1 = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoise2 = {
    species: "Galapagos Tortoise",
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoise1 === tortoise2);
console.log(tortoise1.species === tortoise2.species);
console.log("********************************************************************");

//Iterating Through Objects:
let giraffe1 = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
};

for (keys in giraffe1) {
    console.log(keys + " - " + giraffe1[keys]);
}
console.log("********************************************************************");

//Objects and Functions:
let giraffe2 = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves"
  };

  function birthday(animal) {
      animal.age = animal.age + 1;
      return animal;
  }

  console.log(giraffe2.age);
  birthday(giraffe2);
  console.log(giraffe2.age);
