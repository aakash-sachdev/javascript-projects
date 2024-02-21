// Calling vs Defining
console.log("Calling vs Defining:");

function greetUser (name) {
    let msg = `Hello, ${name}!`;
    return msg;
}

function formatEmail (email) {
    return `email address: ${email}`;
}

console.log(greetUser('Emily'));
console.log(formatEmail('aakashsachdev@king.com'));
console.log('****************************************************************************************');

// Input: Parameters & Arguments
console.log("Input: Parameters & Arguments:");

function formatPhoneNumber (pNo1,pNo2,pNo3) { // Parameters
    return `Phone Number: ${pNo1}-${pNo2}-${pNo3}`;
}
console.log(formatPhoneNumber(123,345,8546)); // Arguments
console.log(typeof(formatPhoneNumber(123,345,8546))); // convert to string

function formatDate (weekday,mm,dd,yyyy) { // Parameters
    return `Date: ${weekday}, ${mm}/${dd}/${yyyy}`;
}
let formattedDate = formatDate("Saturday",11,13,1986);
console.log(formattedDate); // Arguments
formattedDate = formatDate("Monday",1,15,1996);
console.log(formattedDate); // Arguments
console.log(formatDate("Friday",12,29,1946)); // Arguments
console.log('****************************************************************************************');

// Flexible Functions
console.log("Flexible Functions:");

function getFullName(fName, lName, title = "") {
    let fullName = "";
    if (title !== "") { // if(title) is also correct as it's saying that if title exist then true
        fullName += `${title}. `;
    } 
    fullName += `${fName} ${lName}`;
    return fullName;
}

console.log(getFullName("Aakash","Sachdev"));
console.log(getFullName("Aakash","Sachdev","Dr"));
console.log('****************************************************************************************');

// Output: To Return or Not To Return?
console.log("Making use of Return values:");

function addThreeNums (num1, num2, num3) {
    return num1+num2+num3;
}

// Storing the sum in a variable, then print it in template literal
console.log('\nStoring the sum in a variable, then print it in template literal:');

let sumOfThree = addThreeNums(2,6,2);
console.log(`The sum is ${sumOfThree}.`);

//Print the value directly
console.log('\nPrint the value directly:');

console.log(addThreeNums(10,10,10));

//Call the function from with in template literal as you print it
console.log('\nCall the function from with in template literal as you print it:');

console.log(`The sum of 4, and 5 is ${addThreeNums(4,6,5)}.`);
console.log('****************************************************************************************');

// Return keyword is optional:
console.log("Return keyword is optional:");

let allPrepWork = [];
let startedPrepWork = false;

function submitPrepWork(word){
    allPrepWork.push(word);
    return startedPrepWork = true;
}

//Call the function
submitPrepWork("Study");

//Print value of startedPrepWork
console.log(startedPrepWork);

//Call the function again
submitPrepWork("Code");

//Print value of allPrepWork
console.log(allPrepWork);
console.log('****************************************************************************************');


//Stopping a Function Early:
console.log("Stopping a Function Early:");
function divideNums (numOne, numTwo) {
    if (numTwo === 0){
        return `To ${numOne/numTwo} and beyond!`;
    }
    return numOne/numTwo;
}

console.log(divideNums(6,3));
console.log(divideNums(4,0));
console.log('****************************************************************************************');

