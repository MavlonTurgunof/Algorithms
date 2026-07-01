// Sliding Window — bu array yoki string ichida ketma-ket keladigan elementlar bo‘yicha masalalarni tez yechish pattern’i.

// Masalan, shunday savollar uchun ishlatiladi:

// “Ketma-ket kelgan k ta element ichida eng katta yig‘indi topilsin”
// “Eng uzun substring topilsin”
// “Subarray / substring condition’ga mos keladimi?”

function maxSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let right = k; right < arr.length; right++) {
    windowSum = windowSum - arr[right - k] + arr[right];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9

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
