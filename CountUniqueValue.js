//Count unique value solution

function CountUniqueSolution(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(CountUniqueSolution([1, 2, 2, 5, 7, 7, 9, 9]));
