// Rectangles
// makeLine(size) function :

function makeLine(size){
    let columns = "";
    for (let i = 0; i < size; i++) {
        columns += "#";
    } return columns;
}
console.log(makeLine(5));
console.log("----------------------------------------------------------------");

// Square
// makeSquare(size) function :

function makeSquare(size){
    
    let rows = ""; //  if I use \n it is given two lines with some space 
       for (let j = 0; j < size; j++){
        rows += makeLine(size);
        rows += "\n";
    } 
    // return rows
    return rows.slice(0,-1);
}
console.log(makeSquare(5));
console.log("----------------------------------------------------------------");

// makeRectangle(width, height)

function makeRectangle (width,height){
        let rectangle = "";
        for (let i = 0; i<height ; i++){
            rectangle += makeLine(width);
            rectangle += "\n";
        }
        return rectangle.slice(0,-1);   
}

console.log(makeRectangle(5,3));
console.log("--------------------------------------------------------------");

//makeDownwardStairs(height)

function makeDownwardStairs(height){
    let stairs = "";
    for (let i = 0; i<height; i++){
    stairs += makeLine(i+1);
    stairs +="\n" ;
    }return stairs.slice(0,-1);
}

console.log(makeDownwardStairs(5));
console.log("-----------------------------------------------------------------")

// makeSpaceLine(numSpaces, numChars)

function makeSpaceLine(numSpaces, numChars){
    
    let spaces = "" ;
    for ( let i=0; i<numSpaces ;i++) {    
    spaces += " ";
    }
  
    // for (let i = 0; i < numChars; i++) {
    //     spaces += "#";
    // }

    spaces += makeLine(numChars);


    for ( let i=0; i<numSpaces ;i++) {    
        spaces += " ";
        }

//         spaces += makeLine(numChars - i);
return spaces;
 }
console.log(makeSpaceLine(3,5));
console.log("-----------------------------------------------------------------");

// makeIsoscelesTriangle(height) function

function makeIsoscelesTriangle(height){

    let triangle = "";
    for (i = 0; i< height; i++ ){
    triangle += makeSpaceLine((height - i - 1),(2 * i + 1))+ "\n"
    }
    return triangle.slice(0,-1);
} 
console.log(makeIsoscelesTriangle(5));
console.log("-----------------------------------------------------------------");

//Diamonds


function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return reverse(str) === str;
}

function makeDiamond(height){

    let diamonds="";
    diamonds += makeIsoscelesTriangle(height) +"\n"+ reverse(makeIsoscelesTriangle(height));

    return diamonds;
}
    
console.log(makeDiamond (5));
console.log("-----------------------------------------------------------------");
