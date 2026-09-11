
// Function declaration

function welcome() {
  console.log("Welcome to JavaScript!");
}

welcome();


// Parameters and return value

function calculateSum(x, y) {
  return x + y;
}

let total = calculateSum(15, 25);
console.log(total);


// Default parameter

function introduce(name = "Marufa") {
  console.log(`Hello, ${name}!`);
}

introduce();
introduce("Marufa");


// Function expression

const multiplyNumbers = function (x, y) {
  return x * y;
};

console.log(multiplyNumbers(6, 5));


// Pass function as an argument

function greetPerson(greetFunction, name) {
  greetFunction(name);
}

function sayWelcome(name) {
  console.log(`Hello, ${name}! Welcome to the class.`);
}

greetPerson(sayWelcome, "Marufa");

