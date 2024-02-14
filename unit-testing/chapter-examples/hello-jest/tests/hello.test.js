const {msPerYear, spiderman, isAlphaOnly} = require('../hello.js');

// describe("hello world test", function(){

//       test("should return a custom message when name is specified", function(){
//          expect(hello("Jest")).toBe("Hello, Jest!");
//       });

//       it("should return a general greeting when name is not specified", function(){
//         expect(hello()).toBe("Hello, World!");
//     });

// });

// describe("do strings match", function(){

//     test("should return a custom message 'Strings match!'when string matched", function(){
//     expect(test1('Flower','Flower')).toBe('Strings match!');
//     });

//     it("should return a custom message 'No match!'when string don't match", function(){
//     expect(test1('Flower','flower')).toBe('No match!');
//     });
      
// });
      

// describe("The addTwoNums function", function(){

//           it("Should return adding the Nums", function(){
//              expect(sumNums(2,5)).toBe(7);
//              expect(sumNums(-36,6)).toBe(-30);
//              expect(sumNums(-36,-4)).toBe(-40);
//           });
    
//         //   it("should return negative statement as well", function(){
//         //     expect(sumNums(-36,6)).toBe(-30);
//         // });
    
//     });


// describe("The .push() function", function(){
//     it("Should return add an element to an array", function(){
//        let nums = [1, 3, 5, 7]; // set up data
//        let prevLength =  nums.length; // for comparison
//        nums.push(9);
//        expect(nums).toContain(9);
//        expect(nums.length === prevLength + 1).toBe(true);
//     });
// });
    

describe("The msPerYear Variable", function(){

    it("Should have a value of 31557600000", function(){
        // console.log(msPerYear);
        expect(msPerYear).toEqual(31557600000);        
    });
});    

describe("The Spider-Man object ", function(){

    it("Should have a property called 'realName' with value 'Peter Parker'", function(){
        // console.log(msPerYear);
        expect(spiderman.realName).toEqual('Peter Parker');
    });
  

    it("Should have a property called 'nickName' with value 'Spidey'", function(){
        // console.log(msPerYear);
        expect(spiderman.nickName).toEqual('Spidy');
        expect(spiderman.nickName).not.toEqual('Spider');
    });
    
    
    it("Should have an array called 'Powers' with values 'Web, Flexible, Sticky'", function(){

        expect(spiderman.powers).toContain('Web');
        expect(spiderman.powers).toContain('Flexible');
        expect(spiderman.powers).toContain('Sticky');
    });
    
    
    it("Should have a property called 'age' with value greater 30 and under 40", function(){
    
        // console.log(spiderman.age);
        expect(spiderman.age).toBeGreaterThan(30);
        expect(spiderman.age).toBeLessThan(40);
    });
    
    
    it("Should have a property called 'isSup' that is true", function(){
        
        expect(spiderman.isSup).toBe(true);
    
    });
    
}); 

let batman;
beforeEach (function () {
    batman = {
        fullName: "Bruce Wayne",
        nickName: "Bat",
        age: Math.round((new Date() - new Date(1990, 11, 7)) / msPerYear),
        superPowers: ["Billionair", "Gadget", "Cars", "Willpower", "Intelligence!"]
    };
});


describe("The isAlphaOnly Function", function(){

    it("Should return true if an alpha-only string is passed in", function(){
        expect(isAlphaOnly(batman.nickName)).toBe(true);
    });

    it("Should return false if the string has numeric value", function(){
       batman.age = String(batman.age);
        expect(isAlphaOnly(batman.age)).toBe(false);
    });

});   