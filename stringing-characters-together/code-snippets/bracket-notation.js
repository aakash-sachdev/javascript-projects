// Practice Code 1-

// let jsCreator = "Brendan Eich";

// console.log(jsCreator[-1]);
// console.log(jsCreator[42]);


// Practice Code 2-

// let jsCreator = "Brendan Eich";
// let firstInitial = jsCreator[0];
// let lastInitial = jsCreator[8];

// let outputStr = "JavaScript was created by somebody with initials " + 
//    firstInitial + "." +
//    lastInitial + ".";
// console.log(outputStr);


//  Question 1- If phrase = 'Code for fun', then phrase[2] evaluates to:

// let phrase = 'Code for fun';
// console.log(phrase[2])


// Question 2- Which of the following returns true given myStr = 'Index'? Choose all correct answers.

// let myStr = 'Index'
// console.log(myStr[2] === 'n');
// console.log(myStr[4] === 'x');
// console.log(myStr[6] === ' ');
// console.log(myStr[0] === 'I');


// Question 3- What is printed by the following code?

// let phrase = "JavaScript rocks!";
// console.log(phrase[phrase.length - 8]);


// Example 1- 

// let firstName = "Grace";
// let lastName = "Hopper";

// console.log(firstName, "has", firstName.length, "characters");
// console.log(lastName, "has", lastName.length, "characters"); 

// Example 2 - (String method) -

// let nonprofit = "LaunchCode";

// console.log(nonprofit.toUpperCase());
// console.log(nonprofit.toLowerCase());
// console.log(nonprofit);


// Question - 

//  let word = 'Rutabaga';
// console.log(word[8])
// console.log(word.length)

// Word[8] is giving unefined cuz there is no character in index[8] of word. present index values are [0,7].

// Question - 
// cityName = "Vienna";
// stateName = "Virginia";
// location = cityName + ", " +  stateName;

// console.log(location)
// console.log(location.length);

// Exapmle - STRING IMMUTABILITY

// let nonprofit = "Launchcode";

// console.log(nonprofit);
// nonprofit[6] = "C";
// console.log(nonprofit);

// Example - We can set a variable containing a string to a different value.

// let nonprofit = "Launchcode";
// nonprofit = "LaunchCode";

// console.log(nonprofit);

// Question - 

// let pet = "cat";
// console.log(pet + 's');
// pet += 's';

//  Example - STRING METHODS

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result);
// console.log(text.indexOf("e"));
// console.log(text.indexOf("a"));
// console.log(text.indexOf("e",5)); // "e" index starting from 5.

// let text = "Hello world, welcome to the universe.";

// console.log(text);
// console.log(text.trim());
// console.log(text.slice(10,15));
// console.log(text.replace("welcome to", "learn about"));

// Question-

// let word = 'JavaScript';
// console.log(word.toUpperCase());
// console.log(word.slice(4).toUpperCase())

// Question-

// let language = "JavaScript";
// language.replace('J', 'Q');
// language.slice(0,5);
// console.log(language);

// Question-
// let language = "JavaScript";
// console.log(language.slice(1,6))

// Question-
// let org = "  The LaunchCode Foundation ";
// let trimmed = org.trim();
// console.log(trimmed);