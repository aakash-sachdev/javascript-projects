/** IMPORTS **/

const input = require('readline-sync');


/** DATA **/

let maxHearts = 3;
let currHearts = 3;

let inventory = [];
let rupees = 0;


/** MINOR FUNCTION DEFINITIONS **/

// Define a function to describe Hyrule. It does not need any input; it should simply return a string.
function describeHyrule() {
	return `It's 1986, and the kingdom of Hyrule is in chaos. The evil prince of darkness, Ganon, has stolen the Triforce of Power and is holding Princess Zelda captive in Death Mountain.

	Link, you must gather the 8 pieces of the Triforce of Wisdom, defeat Ganon, and rescue the Princess! Only then can order be restored to Hyrule.`;
}

// Define a function that takes two parameters, char and message, and returns a string with the character saying the message provided to Link when he enters an occupied cave or secret room.
function getCharResponse(char,message){
	return`
	***********************************************
Link sees ${char} standing before him, saying, ${message}
	***********************************************
	`;
}

// Define a function that adds an item to inventory and returns a string that announces it.


// Define a function called dodgeEnemy() that takes two parameters, type and num, which will determine if Link loses any hearts trying to avoid them
function dodgeEnemy(type, num) {
	while (num > 0) {
		if (Math.random() < 0.2) {
			// link gets hit
		currHearts -= 0.5;
		console.log(`That's a hit! Link loses 1/2 heart and now has ${currHearts} hearts remaining.`);
		break;
		} else {
		console.log(`Phew! The ${type} missed.`);
		}
		num--;
	}
}

// Define a function called fightEnemy() that takes two parameters, type and num, which will loop through a fight sequence and also include dodging enemies between Link's own attacks. Upon each defeat of an enemy, Link should get a chance at a reward.

function fightEnemy(type, num) {
	if (!inventory.includes("sword")) {
		console.log("Link cannot attack without a sword.");
		dodgeEnemy(type, num);
		return;
	}	
	// loop to attack each enemy
	while (num > 0){
	   //attack
	   console.log(`Link attacks! That's one ${type} down.`);
	   num--;
	   // try for reward
	   getReward();
	   //Dodge before next attack
	   dodgeEnemy(type, num);
	}
}


// Define a function to give Link a chance at a reward when he defeats an enemy
function getReward() {
	let chances = Math.random(0);
	if (chances > 0.8) {
		// Link gets a heart
		currHearts++;
		if (currHearts > maxHearts) {
			currHearts = maxHearts;
		}
		console.log(`Link found a heart! He now has ${currHearts} hearts.`);
	} else if (chances > 0.4) {
		// Link gets a rupee
		rupees++;
		console.log(`Link found a rupee! He now has ${rupees} rupees.`);
	}
}

// Refactor fightEnemy() with early return if Link doesn't have a sword yet

// Refactor to reduce repetition in two places below by creating a new function that handles the decision of whether to fight or not. Consider what parameters it will need.
function fightOrDodge(type, num) {
	let response = input.question("Will Link fight? Y or N \n");
	if (response.toUpperCase() === "Y") {
		fightEnemy(type, num);
	} else {
		dodgeEnemy(type, num);
	}
}


// Refactor to reduce repetition in two other places below by creating a new function that handles the decision to enter a cave or not. Consider what parameters it will require and which might be optional.

function enterCaveOrSkip(char, message, item = '') {
	let response = input.question("Would you like Link to enter? Y or N\n");
	if (response.toUpperCase() === "Y") {
		console.log(getCharResponse(char, message));
		if (item) {
			inventory.push(item);	
		}
	}
}

/** EXECUTE PROGRAM **/

/* 
	NOTE: Instead of putting the following code inside a runProgram() function I am just leaving it out, so everything from here down runs sequentially top to bottom!
*/

// Call the function that returns the opening description of Hyrule and print it
console.log(describeHyrule());
	
// Un-comment the following:
console.log("\nLink sees a cave opening in front of him.\n");

// Ask the user whether they'd like to enter the cave. If so, listen to the old man's response and then put his gift into inventory

// let firstCaveResponse = input.question("Would you like Link to enter? Y or N \n");
// if (firstCaveResponse.toUpperCase() === "Y"){
	// Listen to old man
	let swordMsg = `"It's dangerous to go alone! Take this."`;
	// console.log(getCharResponse("an old man", swordMsg));
	// Put gift in inventory
	// 	inventory.push("sword");
// }
enterCaveOrSkip("an old man", swordMsg, "sword");

// Un-comment the following:
console.log("\nLink walks west and sees four tektites hopping around.\n");

// Ask the user if they want Link to fight the octoroks. If yes, call the fightEnemy() function. If no, call the dodgeEnemy() function.

fightOrDodge("tektie", 4);

// Un-comment the following:
console.log("\nLink heads north and sees another cave opening. But four octoroks are coming at him quickly!\n");

// Ask the user if they want to fight the octoroks. If yes, call the fightEnemy() function. If no, call the dodgeEnemy() function.
fightOrDodge("octorok", 4);

// Un-comment the following:
console.log("\nLink heads into the cave.\n");

// Ask the user if Link should go in the cave, and if so, have the shop owner greet Link and tell him what's on offer — a magic shield for 160 rupees, a key for 100 rupees, and a blue candle for 60 rupees.
let shopMsg = `"Buy somethin' will ya!"

 		Magic Shield - 160
 		Key - 100
 		Blue Candle - 60
`;

enterCaveOrSkip("the shop owner", shopMsg);
// Un-comment the following:
console.log(`Link doesn't have enough money to do any shopping yet, unfortunately. Better get back to slaying octoroks, tektites, and moblins!`);