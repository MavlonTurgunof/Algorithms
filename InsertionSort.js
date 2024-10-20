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
