// 1)
function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(3));

// 2) finding out sum of the range given number

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(5));

// 3 finding out factorial of the given number

function sumRange(num) {
  if (num === 1) return 1;

  return num * sumRange(num - 1);
}

console.log(sumRange(5));

// 4) toq raqamlarni yigish

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
