const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0 ;
let numberOfAstronautsAboard = 0 ;
let altitudeOfShuttle = 0;

// let fuelLevelEntered = input.question("Enter the starting fuel level: ")

// /*Exercise #4: Construct while loops to do the following:
//   a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (fuelLevel <= 5000 || fuelLevel >= 30000 || isNaN(fuelLevel)){
 fuelLevel = input.question("Enter the starting fuel level : ") ;
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (numberOfAstronautsAboard <= 0 || numberOfAstronautsAboard >= 7 || isNaN(fuelLevel) ){
  numberOfAstronautsAboard = input.question("Enter the number of astronauts: ")
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

// fuelLevel - 100*numberOfAstronautsAboard
// fuelLevel >= 0

while ( fuelLevel - 100*numberOfAstronautsAboard >= 0 ){
  altitudeOfShuttle += 50;
  fuelLevel -= 100*numberOfAstronautsAboard;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

// console.log(altitudeOfShuttle);
// console.log(fuelLevel);

if (altitudeOfShuttle >= 2000){
  console.log("Orbit achieved!");
} else {
  console.log ("failed to reach orbit");
}