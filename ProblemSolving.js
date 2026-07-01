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
