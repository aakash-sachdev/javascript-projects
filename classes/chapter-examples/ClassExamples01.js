//Try adding new properties inside constructor.

class Astronaut {
  constructor(name, age, mass = 54){
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);


let tortoise = new Astronaut('Speedy', 120);
console.log(tortoise.name, tortoise.age, tortoise.mass);

//Car example

class Car {
  constructor(make, model, year, color, mpg){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.mpg = mpg;
  }
}

let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
console.log(typeof myCar.year)
let newCar = new Car('Tesla', 'Model S', 2019);
console.log(newCar)

// let fox = {
//   name: 'Fox',
//   age: 7,
//   mass: 12,
//   catchPhrase: function(repeats) {
//      let phrase = 'LaunchCode';
//      for (let i = 0; i < repeats; i++) {
//         phrase += ' Rocks';
//      }
//      return phrase;
//   }
// }

// console.log(`${fox.name} is ${fox.age} years old and has a mass of ${fox.mass} kg.`);
// console.log(`${fox.name} says, "${fox.catchPhrase(3)}."`);
// console.log(typeof fox);