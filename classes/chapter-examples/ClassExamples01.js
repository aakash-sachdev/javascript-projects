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
let newCar = new Car('Tesla', 'Model S', 2019);
console.log(newCar)