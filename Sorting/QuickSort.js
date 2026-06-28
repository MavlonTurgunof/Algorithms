function Pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = Pivot(arr, left, right);
    QuickSort(arr, left, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(QuickSort([4, 8, 2, 1, 5, 7, 6, 3]));
