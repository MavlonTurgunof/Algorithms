//*1 problem

function generatePascalsTriangle(numRows) {
  const triangle = [];
  const x = numRows; //[[1],]

  for (let i = 0; i < numRows; i++) {
    const row = [1];
    //
    if (i > 0) {
      const prevRow = triangle[i - 1]; //[1]
      for (let j = 1; j < prevRow.length; j++) {
        row.push(prevRow[j - 1] + prevRow[j]); //[1,1]
      }
      row.push(1);
    }
    //
    triangle.push(row);
  }
  console.log(triangle[-1]);
  const selectedRow = triangle.slice(numRows - 1, numRows)[0];
  return selectedRow;
}

// Example usage
const numRows = 3;
console.log(generatePascalsTriangle(numRows));

//*2

//? You are given an array prices where prices[i] is the price of a given stock on the ith day.

//? You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//? Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//! Example 1:

//! Input: prices = [7,1,5,3,6,4]
//! Output: 5
//! Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//! Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// const prices = [7,1,5,3,6,4]

function maxProfit(prices) {
  let minPrice = Infinity; //7
  let maxProfit = 0; //4

  for (let price of prices) {
    //1         //7
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

// Example usage
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

//* Palindrome numbers
var isPalindrome = function (s) {
  let cleaned = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = cleaned.split("").reverse().join("");

  if (cleaned === reverse) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

//* Single Number

//*Remove duplicates

const head = [1, 1, 2, 3, 3];

var deleteDuplicates = function (head) {
  const newSet = new Set(head);
  return newSet;
};

console.log(deleteDuplicates([1, 1, 2, 3, 3]));

var deleteDuplicates = function (head) {
  if (!head) return null;

  const newSet = new Set();
  let current = head;

  while (current) {
    newSet.add(current.val);
    current = current.next;
  }

  const dummy = { next: null };
  let newCurrent = dummy;

  for (const value of newSet) {
    newCurrent.next = { val: value, next: null };
    newCurrent = newCurrent.next;
  }

  return dummy.next;
};
