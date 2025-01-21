//!Destructuring Objects
const NewObj = { name: "Mavlon", lastName: "Turgunov", age: 22 };

//* const { name, lastName, age } = NewObj;

// console.log(name, lastName, age);

//?changing names

//* const { name: Ism, lastName: familya, age: yosh } = NewObj;

// console.log(Ism, familya, yosh);

//?Default values

//* const { name, lastName, age, school = [] } = NewObj;

// console.log(name, lastName, age, school);

//?Mutating values

let a = 22;
let b = 34;

const obj = { a: 33, b: 66 };

// ({ a, b } = obj);

// console.log(a, b);

//!Enhenced object literals

const EnhencedObjecs = {
  first: 1,
  second: 2,
  obj, //*This is the enhenced object literals it can be like {obj:obj}
};

for (const [key, value] of Object.entries(EnhencedObjecs.obj)) {
  console.log(`${key}:${value}`);
}

console.log(Object.entries(EnhencedObjecs));
