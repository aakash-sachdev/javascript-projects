// throw Error('You cannot divide by zero!');

// throw SyntaxError("That is the incorrect syntax");

const g = 32.17;

function timeToGround (height) {
    if (isNaN(Number(height))) {
        throw new TypeError ("Height must be a number!");
    }
    return Math.sqrt(2 * Number(height) / g);
}

console.log (timeToGround("Thirty"));