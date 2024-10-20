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
