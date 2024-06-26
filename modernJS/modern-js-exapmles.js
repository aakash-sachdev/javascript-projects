// Class 17 Lecture: The Modern JavaScript Landscape

/** TERNARY OPERATOR **/

let pikeInChair = true; // otherwise Spock is in command
let phrase;

if (pikeInChair) {
  phrase = 'Hit it!';
} else {
  phrase = 'I would like the ship to go... now.';
}

// TODO: Write an equivalent expression for the if/else block above using a ternary expression

let phrase2 = pikeInChair ? 'Hit it!' : 'I would like the ship to go... now.';
// TODO: Print the phrase generated by the ternary expression

console.log(phrase2);
console.log("**************************************************************************************************");
/** SPREAD OPERATOR **/

let crew1 = ['Captain Pike', 'Number One', 'Spock'];
let crew2 = ['Uhura', "La'an", 'Ortegas', 'Hemmer', 'Kyle'];
let crew3 = ["Dr. M'Benga", 'Nurse Chapel'];

// TODO: Use the spread operator to combine all Enterprise members into a single array
let crew4 = [...crew1 ,...crew2 , ...crew3];
// TODO: Print the new array
console.log(crew4);
console.log("**************************************************************************************************");

/** DESTRUCTURING **/

/* Destructuring Arrays */

// TODO: Create variables doctor and nurse from crew3, then print each
let [doctor, nurse] = crew3;
console.log(doctor);
console.log(nurse);
// TODO: Create variables captain and scienceOfficer from crew1
// Use an extra comma to skip over Number One
let [captain, ,scienceOfficer] = crew1;
console.log(captain);
console.log(scienceOfficer);

console.log("**************************************************************************************************");
/* Destructuring Objects */

let enterprise = {
  shipName: 'Enterprise',
  registryNumber: 'NCC-1701',
  class: 'Constitution',
};

// TODO: Create variables shipName and registry from enterprise, then print each
const {shipName, registryNumber : registry} = enterprise;
console.log(shipName);
console.log(registry);

console.log("**************************************************************************************************");

/** FOR...OF LOOPS **/
/* With a Simple Array */

// TODO: Iterate over crew2 and print each name
for (let crew of crew2) {
    console.log(crew);
}
console.log("**************************************************************************************************");

/* With a Map Class Object */

let federationFounders = [
  [1, 'United Earth'],
  [2, 'Confederacy of Vulcan'],
  [3, 'Andorian Empire'],
  [4, 'United Planets of Tellar'],
  [5, 'Alpha Centauri Concordium'],
];

let fedFoundersMap = new Map(federationFounders);

// TODO: Print the map to see its structure
console.log(federationFounders);
console.log(fedFoundersMap);
console.log(typeof (fedFoundersMap));
console.log("**************************************************************************************************");

// TODO: Use a for...of loop to print each member as an ordered list
for (let [number, letter] of fedFoundersMap) {
    console.log(`letter ${number} is ${letter}`);
}
console.log("**************************************************************************************************");

/** ARROW FUNCTIONS **/

function explore(planet) {
  console.log(`Let's go boldly toward ${planet}`);
}

// TODO: Rewrite explore() as an arrow function stored in goBoldly
const goBoldly = planet => console.log(`Let's go boldly toward ${planet}`);

// TODO: Call goBoldly with the planet Nibiru
goBoldly("Nibiru");

function makeItGo(speedFactor, type = 'impulse') {
  if (type === 'warp') {
    console.log(`Warp factor ${speedFactor}`);
  } else {
    console.log(`${speedFactor} impulse`);
  }
}

// TODO: Rewrite makeItGo() as an arrow function stored in hitIt
// Use a ternary expression for logging the correct phrase
const hitIt = (speedFactor, type = 'impulse') => console.log (type === 'warp' ? `Warp factor ${speedFactor}` : `${speedFactor} impulse`);
// TODO: Call hitIt() with full/impulse and again with 8/warp
hitIt(8, 'warp');
console.log("**************************************************************************************************");

/** MAPPING OVER AN ARRAY **/

let planets = ['Andoria', 'Vulcan', 'Earth', 'Kronos', 'Risa'];

// TODO: Create a new array where all planet names are all caps
let capPlanets = planets.map(planet => planet.toUpperCase());
// TODO: Print the new array
console.log(capPlanets);
console.log("**************************************************************************************************");

