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
