// Anagrams
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));

//Multiple pointers example

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

//Count unique value solution

function CountUniqueSolution(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(CountUniqueSolution([1, 2, 2, 5, 7, 7, 9, 9]));

//Sliding window pattern

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

//Recursive example (simple)

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));

// return 3 + sumRange(2);
//            return 2 + sumRange(1);
//                       return 1;

// Factorial

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

console.log(factorial(8));

// binarySearch

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== el && start <= end) {
    if (el < arr[middle]) end = middle - 1;
    else start = middle + 1;
    return (middle = Math.floor((start + end) / 2));
  }
  return arr[middle] === el ? middle : -1;
}

//Naive string Search

function naiveSearch(long, short) {
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

// Selection Sort

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

//Insertion Sort
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([0, 2, 34, 22, 10, 19, 17]));

//Merge Sorting algorithm
//version 1 with two sorted arrays

function MergeSorting(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // Merge the two arrays into result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Concatenate any remaining elements from arr1 or arr2
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function MergeAlgorithm(arr) {
  // Base case: if the array is empty or has one element, it's already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // Correctly get the left half
  const right = arr.slice(mid); // Correctly get the right half

  // Recursively sort both halves
  const sortedLeft = MergeAlgorithm(left);
  const sortedRight = MergeAlgorithm(right);

  // Merge the sorted halves
  return MergeSorting(sortedLeft, sortedRight);
}

console.log(MergeAlgorithm([1, 3, 5, 2, 4, 6, 8]));
