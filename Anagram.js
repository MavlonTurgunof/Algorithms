// Anagrams
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));

// ?Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// !Example 1:

// todo Input: s = "anagram", t = "nagaram"

// todo Output: true

// !Example 2:

// todo Input: s = "rat", t = "car"

// todo Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let letter = first[i];

    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};
