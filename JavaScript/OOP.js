//!PARADIGM => simply means Style of the code. "how" we write and organize the code

//!Constructor function
const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  console.log(this);
};

const mavlon = new Person("Mavlon", "Turgunov", 22);

//!Prototypes

Person.prototype.calcAge = function () {
  console.log(this.age);
};

console.log(Person.prototype.calcAge);

mavlon.calcAge();

console.log(mavlon.__proto__);

//!Prototype is belong to the instances not the constructor function
