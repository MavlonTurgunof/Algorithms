// Problem: Flatten Array

// Ichma-ich arraylarni bitta tekis arrayga aylantir.

// Example
// flatten([1, [2, [3, 4], 5]])

function flatten(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flatten(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// Given an integer array nums, return all the triplets
//  [nums[i], nums[j], nums[k]] such that i != j, i != k,
//   and j != k, and nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort ascending

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the fixed element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Early exit: smallest possible sum is already > 0
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need a larger value
      } else {
        right--; // Need a smaller value
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// -------------------------------------///

const Merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < left.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return Merge(left, right);
}

var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return 0;

  let windowSum = 0;
  let result = [];

  for (let i = 0; i < 3; i++) {
    windowSum = windowSum + nums[i];
  }

  result.push(windowSum);

  for (let k = 3; k < nums.length; k++) {
    windowSum = windowSum - nums[k - 3] + nums[k];
    result.push(windowSum);
  }

  if (result.length > 1) {
    result.push(target);
    result = mergeSort(result);
    let i = result.indexOf(target);
    return result[i + 1];
  } else {
    result = mergeSort(result);
    return result[0];
  }
};

console.log(threeSumClosest([0, 0, 0], 1));

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          // Skip duplicates for left and right
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

console.log(fourSum([-2, -1, 0, 0, 1, 2], 2));

let name = "John";

const user = {
  name: "Mavlon",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
