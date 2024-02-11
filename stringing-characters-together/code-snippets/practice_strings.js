// console.log("a"+"b" != "ba")

// let str = "abcde"
// let str1 ="Hi there!"
// let str2 ="436.20"
// console.log(str[4]);
// console.log(str.length);
// console.log(str1[3]);
// console.log(str1.length);
// console.log(str2[3]);
// console.log(str2.length);

// let firstName = "Aakash"

// console.log(firstName[3])
// console.log(firstName[5])

// let inti = "Aakash"
// console.log(inti[1])

// inti[1] = "b"
// console.log(inti)

// inti = inti[0]+"sac"
// console.log(inti)

// let food = "pizza"
// console.log(food.length);

// let fruit = "key " + "lime";
// console.log(fruit.length);
// console.log(fruit + " " + food);
// console.log((fruit + " " + food).length);

// let happy = "yaaahhhhhh!"
// console.log(happy.toUpperCase())
// console.log(happy)

// console.log("-----------------------------------------------------------------------------------------")
// let ecs= happy.toUpperCase()
// console.log(ecs)

// console.log("-----------------------------------------------------------------------------------------")
// ecs = happy.toLowerCase()
// console.log(ecs)

// let userInput = "  hitesh"
// console.log(userInput);
// console.log(userInput[0]);

// console.log("-----------------------------------------------------------------------------------------")

// let name = userInput.trim();
// console.log(name);
// console.log(name[0]);

// console.log("-----------------------------------------------------------------------------------------")

// console.log(name[0].toUpperCase());

// console.log("-----------------------------------------------------------------------------------------")


// name = name.replace(name[0],name[0].toUpperCase());
// console.log(name);



let ops = "Launch Code";
// ops = ops.toLowerCase();
console.log(ops.includes(" "));

console.log("-----------------------------------------------------------------------------------------")

let spaceIdx = ops.indexOf(" ");
console.log(spaceIdx);

console.log("-----------------------------------------------------------------------------------------")

ops = ops.slice(0,spaceIdx) + ops.slice(spaceIdx+1);
console.log(ops);
console.log(ops.indexOf(" "));

