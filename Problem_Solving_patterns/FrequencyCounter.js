// Bu pattern elementlar necha marta qatnashganini sanash uchun ishlatiladi.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1);
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 9, 1]));

// Masala:

// Array ichida duplicate bormi?

// [1,2,3,1]

const hasDuplicate = (arr) => {
  if (arr.length === 0) return false;

  const lookup = {};

  for (let num of arr) {
    if (lookup[num]) {
      return true;
    } else {
      lookup[num] = 1;
    }
  }

  return false;
};

console.log(hasDuplicate([1, 2, 3, 1]));
