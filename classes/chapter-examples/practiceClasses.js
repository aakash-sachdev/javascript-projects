// Fruit class:
class Fruit{
    constructor (name, color, isCitrus = false) {
        this.name = name;
        this.color = color;
        this.isCitrus = isCitrus;
        this.numSlice = null;
        this.describe = function() {
            return `${this.color} ${this.name}` ;
        }
    }
    cut (num) {
        this.numSlice = num ;
        console.log(`The ${this.describe()} is now in ${this.numSlice} pieces!`);
    }
}

// Create fruits:
let fuji = new Fruit("Fuji apple", "red");
let dragonFruit = new Fruit("Dragon fruit", "pink");
let navel = new Fruit("Navel orange", "orange", true);


// Print objects:
console.log("Print objects :");
console.log(fuji);
console.log(dragonFruit);
console.log(navel);
console.log("*************************************************************************");

// Property of object:
console.log("Property of object :");
console.log(navel.color);
console.log("*************************************************************************");

// Decribe fruits:
console.log("Describe fruits :");
console.log(fuji.describe());
console.log("*************************************************************************");

// Cut the Fruits:
console.log("Cut the Fruits :");
fuji.cut(6);
dragonFruit.cut(12);
console.log("*************************************************************************");

// Inheritance :
console.log ("Inheritance -");
class Beverage {
    constructor (name, ounce, container) {
        this.name = name;
        this.ounce = ounce;
        this.container = container;
        this.recycled = false;
    }

    recycle() {
        this.recycled = true;
        console.log(`That was delicious! I rinsed and recycled the ${this.container} of ${this.name}.`);
    }

    describe () {
        let status = this.recycled ? "had" : "have";
        console.log(`I ${status} a ${this.ounce}-oz, ${this.container} of ${this.name}.`);
    }

}

class Juice extends Beverage {
    constructor (name, ounce, container, fruits, veggies = []) {
        super(name, ounce, container) ;
        this.fruits = fruits;
        this.veggies = veggies;
    }
    describe(){
        super.describe();
        console.log("It contains the following:");
        let ingredients = this.fruits.concat(this.veggies);
        for (let i=0; i < ingredients.length; i++){
            console.log(`\t${ingredients[i]}`)
        }
    }
}

class Soda extends Beverage {
    constructor (name, ounce, container, hasCaffeien) {
        super(name, ounce, container) ;
        this.hasCaffeien = hasCaffeien;
    }
    
    describe () {
        let haveOrHad = this.recycled ? "had" : "have";
        let caffeineStatus = this.hasCaffeien ? "Caffeinated" : "Caffeine-free";
        console.log(`I ${haveOrHad} a ${this.ounce}-oz, ${this.container} of ${caffeineStatus} ${this.name}.`);
    }

}

class DietSoda extends Soda {
    constructor (name, ounce, container, hasCaffeien, sweetner) {
        super(name, ounce, container, hasCaffeien);
        this.sweetner = sweetner;
    }
    
    describe () {
        super.describe() 
        console.log(`It is sweetened with ${this.sweetner}.`);
    }
}

// Print objects:
console.log("Print objects :");
let water = new Beverage ("water", 20, "bottle");
console.log(water);
console.log("*************************************************************************");

// Decribe water:
console.log("Describe water :");
console.log(water.describe());
console.log("*************************************************************************");

//  Recycle the water:
console.log("Recycle the water:");
water.recycle();
console.log("*************************************************************************");


// Decribe water again:
console.log("Describe water again :");
console.log(water.describe());
console.log("*************************************************************************");

// Print objects:
console.log("Print objects :");
let orangeJuice = new Juice("orange juice", 16, "bottle", ["oranges"]);
let appleJuice = new Juice("apple juice", 14, "can", ["apples"]);
let v8 = new Juice("v8", 24, "glass bottle", ["tomatoes"],["carrots", "celery", "beets", "parsley", "lettuce", "watercress", "spinach"]);

console.log(orangeJuice);
console.log(appleJuice);
console.log(v8);
console.log("*************************************************************************");

// Decribe v8:
console.log("Describe v8 :");
v8.describe();
console.log("*************************************************************************");

//  Recycle the appleJuice:
console.log("Recycle the apple juice:");
appleJuice.recycle();
console.log(appleJuice);
console.log("*************************************************************************");

// Print objects:
console.log("Print objects :");
let drPapper = new Soda("Dr Papper", 12, "can", true);
let sprite = new Soda("Sprite", 20, "can", false);
console.log(drPapper);
console.log(sprite);
console.log("*************************************************************************");

//  change property of the sprite:
console.log("change property of the sprite:");
sprite.container = "bottle";
console.log(sprite);
console.log("*************************************************************************");

// Decribe sprite:
console.log("Describe sprite :");
sprite.describe()
console.log("*************************************************************************");

//  Recycle the dr papper:
console.log("Recycle the dr papper:");
drPapper.recycle();
console.log("*************************************************************************");


// Print objects:
console.log("Print objects :");
let cokeZero = new DietSoda("Coke Zero", 12, "can", true, "aspartame");
let caffeineFreeDietCoke = new DietSoda("Caffeine-Free Diet Coke", 10, "bottle", false, "aspartame");
let dietPepsi = new DietSoda("Diet Pepsi", 20, "bottle", true, "sucrolose");
console.log(cokeZero);
console.log(caffeineFreeDietCoke);
console.log(dietPepsi);
console.log("*************************************************************************");

// Decribe coke zero :
console.log("Describe coke zero :");
cokeZero .describe();
console.log("*************************************************************************");

// Recycle Diet Pepsi :
console.log("Recycle Diet Pepsi :");
dietPepsi.recycle();
console.log(dietPepsi);
console.log("*************************************************************************");

// Verifying Class identity :
console.log("Verifying Class identity :");
console.log(drPapper instanceof Soda);
console.log(water instanceof Juice);
console.log(dietPepsi instanceof Beverage);
console.log(dietPepsi instanceof Soda);
console.log(dietPepsi instanceof DietSoda);
console.log("*************************************************************************");