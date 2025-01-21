//!Converting and Checking numbers

console.log(0.1 + 0.2);

//?Converting
console.log(Number.parseInt("45px"));
console.log(+"45");

//?Checking is value is number

const num = 20; //? True
const numString = "20"; //? False

console.log(Number.isFinite(num));

//!Remainder operator

console.log(5 % 2); //?Remainder is 1

//!Numeric seperator

const Num1 = 12_000_000; //? res: 12,000,000

console.log(Num1);

//! BigInt

const huge = 23435353464356456456456n;
const num2 = 23;

console.log(huge * BigInt(num2));

console.log(1000n * 1000n);

console.log(20n > 15); //?true
console.log(20n === 20); //?false
console.log(typeof 20n); //?BigInt
console.log(20n == 20); //?true

//!Creating Dates
const now = new Date();
const InternationalDate = new Intl.DateTimeFormat("ar-Sy").format(now);
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

console.log(new Date("Jan 16 2024 18:05:41"));

const date2 = new Date(2025 * 1 * 24 * 15 * 23 * 5);
console.log(date);

const day = `${now.getDay()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();

console.log(`${day}/${month}/${year}`);

//!Ineternationaliztion in Date

const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("ar-Sy").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
const options = {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Australia/Sydney",
};
console.log(new Intl.DateTimeFormat("ar-Sy", options).format(date));
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"

//!SetTimeOut

setTimeout(function () {
  console.log("Pizza is arriving");
}, 3000);

console.log("Waiting...");
