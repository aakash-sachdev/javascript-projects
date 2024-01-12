// Initialize Variables below

const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg	= 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg =crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit =	850000;
let fuelTempCelsius	= -225;
const minimumFuelTemp	= -300;
const maximumFuelTemp	= -150;
let fuelLevel =	"100%" ;
let weatherStatus =	"clear" ;
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    ("astronautStatus :", astronautStatus )
    preparedForLiftOff = true;
} else {
    ("astronautStatus :","Not", astronautStatus )
    preparedForLiftOff = false;
}

if (totalMassKg < maximumMassLimit){
    ( "astronautStatus :", astronautStatus )
    preparedForLiftOff = true;
} else {
    ("astronautStatus :","Not", astronautStatus )
    preparedForLiftOff = false;
}

if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    ( "astronautStatus :", astronautStatus )
    preparedForLiftOff = true;
}    else {
        ("astronautStatus :","Not", astronautStatus )
        preparedForLiftOff = false;
}

if(fuelLevel === "100%"){
    ( "astronautStatus :", astronautStatus )
    preparedForLiftOff = true;
} else {
    ("astronautStatus :","Not", astronautStatus )
    preparedForLiftOff = false;
}

if(weatherStatus ==="clear"){
    ( "astronautStatus :", astronautStatus )
    preparedForLiftOff = true;
} else {
    ("astronautStatus :","Not", astronautStatus )
    preparedForLiftOff = false;
}
let liftOffReady = (astronautStatus === preparedForLiftOff)

 if (liftOffReady === true)
 {
console.log("\nAll systems are ready to go! Initiating space shuttle launch sequence.")
console.log("date:", date)
console.log("time:" , time)
console.log("astronautCount:" ,astronautCount)
console.log("crewMassKg:", crewMassKg)
console.log("fuelMassKg:", fuelMassKg)
console.log("shuttleMassKg:", shuttleMassKg)
console.log("totalMassKg:", totalMassKg)
console.log("fuelTempCelsius:",fuelTempCelsius)
console.log("weatherStatus:", weatherStatus)
console.log("Wish a safe flight astronauts!")
 } else{
    console.log("Mission abort!!!")
 }