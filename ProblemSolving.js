// Problem: Flatten Array

// Ichma-ich arraylarni bitta tekis arrayga aylantir.

// Example
// flatten([1, [2, [3, 4], 5]])

function flatten(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flatten(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}
