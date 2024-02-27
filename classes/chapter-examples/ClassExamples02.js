// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
  constructor(name, age, mass = 100){
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

console.log(Astronaut);

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let lion = new Astronaut('Simba', 25, 89, "King");

console.log(lion);
