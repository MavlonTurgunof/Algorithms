//* Array Methods
//!Slice method
//? Slice method creates new array

const arr = ["a", "b", "c", "d", "e"];

const arr1 = arr.slice(1, 4);

//!Splice method
//?Splice method did not create new array istead it mutates array

arr.splice(1, 2);

//! Reverse method
//? it creates new array

const arr2 = ["v", "g", "h", "j", "t"];

const reverseArr = arr2.reverse();

//! Concat method
//? creates new array

const ConcatArr = arr.concat(arr2);

let newArr = [...arr, ...arr2];

//!At method

// console.log(arr2.at(-1));

//!ForEach loop

const nums = ["1", "2", "3", "4", "5", "6", "7", "8"];
const numdouble = [];

nums.forEach(function (num) {
  num == 1 ? numdouble.push(String(num * 2)) : numdouble.push(num);
});

// console.log(numdouble);

const letters = new Map([
  ["a", "a"],
  ["b", "b"],
  ["c", "c"],
]);

letters.forEach(function (value, key, map) {
  // console.log(`${key} equal to the ${value}`);
});

//!Map method

const newMap = [1, 2, 3, 4, 5, 6, 7, 8];

const exp1 = newMap.map((map) => map * 2);

// console.log(exp1);

//!Filter method

const newFilter = newMap.filter((map) => map > 2);

console.log(newFilter);

//! Reduce method

const movements = [1, 2, 3, 4, 5, 6, 7, 8];

const balance = movements.reduce((acc, cur) => acc + cur, 0);

//!Chaining methods

const chainingMethod = movements
  .filter((mov) => mov > 2)
  .map((mov) => mov * 2)
  .reduce((acc, mov) => mov + acc, 0);

console.log(chainingMethod);

//!Find method

const findMethod = movements.find((mov) => mov > 4);

console.log(findMethod);

//!Flat and flat map

const nestedArr = [1, 2, 3, [4, [5, 6]]];

const flattenArr = nestedArr.flat();
const flattenArr2 = nestedArr.flat(2);

console.log(flattenArr2);

const newObj = {
  name: "Mavlon",
  lastName: "Turgunov",
};

console.log([...Object.entries(newObj)]);

//!For of loop
const obj = { name: "Alice", age: 25, country: "USA" };

for (let [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//!For in loop

const obj2 = { name: "Alice", age: 25, country: "USA" };

for (let key in obj2) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}

//!Destructuring arrays in JS

const desArr = [2, 3, 4];

// const [x, y, z] = desArr; // this equal to the

const x = desArr[0];
const y = desArr[1];
const z = desArr[2];

console.log(x, y, z);
