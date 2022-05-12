// Task 1

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // true (get value from rabbit) (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // null (rabbit's value was deleted, so get value from parent animal) (2)

delete animal.jumps;

alert( rabbit.jumps ); // undefined (both animal and rabbit values are deleted) (3)

//-------------
// Task 2

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log( pockets.pen ); // 3
console.log( bed.glasses ); // 1
console.log( table.money ); // undefined

//answer 2. It has no time difference between pockets.glasses or head.glasses

//-------------
// Task 3

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();

//answer: rabbit (rabbit is 'this' which called eat() )

//-------------
// Task 4

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // ""

//They are full because both are using parent stomach array. If we add stomach[] in each object, then 'this' will put to
//their own stomach[]

//-------------
// Task 5

//1.
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true (rabbit didn't change)

//2.
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false (rabbit's parent was changed)

//3.
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true (rabbit.eats was deleted, but parent's eats value is still there

//4.
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined (value is deleted)

//-------------
// Task 6

function f() {
    alert("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

f.defer(1000); // shows "Hello!" after 1 second

//-------------
// Task 7

function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
}

f.defer(1000)(1, 2); // shows 3 after 1 second

//wrapper
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

let user = {
    name: "John",
    sayHi() {
        alert(this.name);
    }
}

user.sayHi = user.sayHi.defer(1000);

user.sayHi();

//-------------
// Task 8

let dictionary = Object.create(null, {
    toString: { // define toString property
        value() { // the value is a function
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for(let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
alert(dictionary); // "apple,__proto__"

//-------------
// Task 9

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined (Rabbit obj haven't created yet)
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined (don't have sayHi() in __proto__)

