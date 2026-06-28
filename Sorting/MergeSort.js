const Merge = (left, right) => {
  if (!left?.length && !right?.length) return;

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

  while (j < right.length) {
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
