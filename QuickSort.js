function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  var pivot = arr[start];
  var swapIndx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
  }

  swap(arr, start, swapIndx);
  return swapIndx;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) { 
    let pivotIndex = pivot(arr, left, right);
    QuickSort(arr, left, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(QuickSort([4, 8, 2, 1, 5, 7, 6, 3]));
