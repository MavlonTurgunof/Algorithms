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

//  ?You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//?and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//  ?Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//  ?The final sorted array should not be returned by the function, but instead be
//   ?stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// !Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// !Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// !Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

var merge = function (nums1, m, nums2, n) {
  if (m <= 0 && n <= 0) return 0;
  arr1 = nums1.slice(0, m);
  arr2 = nums2.slice(0, n);

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
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
