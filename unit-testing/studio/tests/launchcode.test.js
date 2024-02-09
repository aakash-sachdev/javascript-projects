// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("Value of Organistation", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("Value of executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  
  test("Value of percentageCoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  
  test("Value of programsOffered", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  
});

describe("Testing launhOutput function", function(){

  test("Num is divisible by 2 ", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("Num is divisible by 2 ", function() {
    expect(launchcode.launchOutput(12)).toBe('Code!');
  });

});