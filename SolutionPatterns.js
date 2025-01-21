var plusOne = function (digits) {
  let num = BigInt(digits.join("", 10));
  let result = num + 1n;
  let newString = result.toString();
  let arr = newString.split("");
  return arr.map((x) => parseInt(x));
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// Factorial

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

console.log(factorial(8));

function climbStairs(n) {
  if (n <= 2) return n; // Base cases: 1 step = 1 way, 2 steps = 2 ways

  let prev1 = 1; // Number of ways to reach (n-1)
  let prev2 = 2; // Number of ways to reach (n-2)

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2; // Number of ways to reach current step
    prev1 = prev2; // Update prev1 to be prev2 for the next iteration
    prev2 = current; // Update prev2 to current for the next iteration
  }

  return prev2; // prev2 will hold the result for the n-th step
}

// !Start:

// prev1 = 1 (ways to reach step 1).
// prev2 = 2 (ways to reach step 2).
// !At step 3 (i = 3):

// current = prev1 + prev2 = 1 + 2 = 3 (this is the number of ways to reach step 3).
// Update variables for the next iteration:
// prev1 = prev2 = 2.
// prev2 = current = 3.
//! At step 4 (i = 4):

// current = prev1 + prev2 = 2 + 3 = 5 (this is the number of ways to reach step 4).
// Update variables for the next iteration:
// prev1 = prev2 = 3.
// prev2 = current = 5.

//difference between var and let
function scope3(print) {
  if (print) {
    // let insideIf = '12'
    var insideIf = "12";
  }
  console.log(insideIf);
}

scope3(true);

function scope3() {
  // let insideIf = '12'
  var insideIf = 0.4 + 0.3;
  var insideIf2 = 0.7;
  console.log(insideIf === insideIf2);
}

scope3();

function primeFactors(n) {
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  for (var i = 3; i * i <= n; i = i + 2) {
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  if (n > 2) {
    console.log(n);
  }
}

primeFactors(10);

console.log(btoa("Hello my name is Mavlon"));
console.log(atob("SGVsbG8gbXkgbmFtZSBpcyBNYXZsb24="));

//* destructuring array
const arr = [1, 2, 3];

let [x, z] = arr;

console.log(x, z);

//! switching veriables

const temp = x;
x = z;
z = temp;

//? we could change code above to the following, it is the same

[x, z] = [z, x];

console.log(x, z);

//*destructuring objects

//* Nullish: null and undefined (not 0 or "")

const guessNumber = 0;

x = guessNumber ?? 10;

console.log(x);

// * logical Assignment operators

const NewObj = {
  name: "Mavlon",
  age: 24,
};

const NewObj1 = {
  name: "Jahongir",
  age: 24,
  status: "Frontend",
};

NewObj.status = NewObj.status || "Backend";

NewObj1.status = NewObj1.status || "Frontend";

console.log(NewObj);

// *Working with for loops

//! for loop itiration

//backwards

let y = 10;

for (let i = y; i >= 0; i--) {
  console.log(i);
}

const countback = (nums) => {
  if (nums < 0) {
    return nums;
  } else {
    console.log(nums);
    countback(nums - 1);
  }
};

countback(10);

//! for of loop

const arr2 = ["Osh", "Somsa", "Kabob"];

for (let item of arr2) console.log(item);

for (let [el1, el2] of arr2.entries()) console.log(`${el1}: ${el2}`);

//Functions

//!Function declaration

function CalcAge(year) {
  console.log(2025 - year);
}

CalcAge(2002);

//!Function expression

const CalcAge1 = function (year) {
  console.log(2025 - year);
};

CalcAge1(2002);

//? Big difference between declaration and expression is we can call
// ?function declaration before the function however function expression we could not.

//*Functions return functions

const greeting = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};

//!Arrow function of the freeting function
const greating1 = (greating) => (name) => console.log(`${greating} ${name}`);

const greatingFunction = greeting("Hello");

greatingFunction("Mavlon");

greating1("Hi")("Jahongir");

//*Call and apply methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${this.airline}, ${name}, ${flightNum}`);

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

//  lufthansa.book(234, "Mavlon")

//  console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

//!bind method
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();

document
  .querySelector(".buy")
  //!when we use function that has "this" keyword in the event listeners it will show "this" keyword refer to the
  // ! element it is used for example in here it is refering to the button element to solve this we should use bind
  // ! method becouse bind method creates new function call method just invokes it.
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const bookEW = book.bind(eurowings);

bookEW(23, "Mavlon");

//!call
//! book(234, "Mavlon") <= did not work becouse in lufthansa.book function has this keyword when
//!  we declare book function to book veriable it could not find airline and other items so we should use call apply and bind methods

book.call(eurowings, 234, "Mavlon");

console.log(eurowings);

book.call(lufthansa, 234, "Mavlon");

console.log(lufthansa);

const flightData = [23, "Mavlon"];

//!APPLY method

book.apply(lufthansa, flightData);

//!However nowadays apply method no longer used instead:

book.call(lufthansa, ...flightData);

//!Partial application

const Greating = (greating, name) => console.log(`${greating} ${name}`);

const partialApp = Greating.bind(null, "Hello");

partialApp;

const greeting2 = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};

const newBind = greeting2("Hello");

newBind("Mavlon");

//! Closures

function outer() {
  let count = 0; // Variable in the outer scope

  function inner() {
    count++; // Inner function accesses `count`
    console.log(count);
  }

  return inner;
}

const counter = outer(); //*=> const counter = count = 0
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

console.dir(counter);
