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

var containsDuplicate = function (nums) {
  for (let i = 0; nums.length >= i; i++) {
    for (let j = 1; nums.length >= j; j++)
      if (nums[i] === nums[j]) {
        return true;
      } else {
        return false;
      }
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
