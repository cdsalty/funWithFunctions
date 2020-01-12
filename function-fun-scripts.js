/*
1. Write a isValidPassword function; It should accept two arguements(password and username);
 Password must:
	- be at least 8 characters
  - cannot contain spaces
  - cannot contain the username
 If all requirements are met, return true.
Otherwise: false

 isValidPassword('89Fjj1nms', 'dogLuvr'); // true
 isValidPassword('dogLuvr123!', 'dogLuvr') //false
 isValidPassword('hello1', 'dogLuvr') //false
*/
function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// console.log(isValidPassword("happy1", "christopher"));
// console.log(isValidPassword("happyness1", "christopher"));

function isValidPassword2(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

// console.log(isValidPassword2("Bones4ever", "Daisy")); // true -> passes
// console.log(isValidPassword2("LoveBones", "Daisy")); // true -> passes
// console.log(isValidPassword2("LoveCat", "Daisy")); // false -> doesn't pass
// or a straight-forward ternary operator would work as well

function isValidPassword3(password, username) {
  const tooshort = password.length < 8;
  const has2MuchSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooshort || has2MuchSpace || tooSimilar) return false;
  return true;
}

// console.log(isValidPassword3("LoveBones", "Daisy")); // true -> passes
// console.log(isValidPassword3("LoveCat", "Daisy")); // false -> doesn't pass

/* ----------------------------------------------------_
2. Write a function to find the average value in an array of numbers
avg([0, 50]) should return 25
*/
function avg(array) {
  let total = 0;
  for (let num of array) {
    // add them together
    // total += num;
    total = num + total;
  }
  let result = total / array.length;
  return result;
  // return total/array.length;
}
// console.log(avg([3, 14, 17, 25, 77]));
// console.log(avg([25, 50, 75, 100]));

// write function using forEach loop

/* ----------------------------------------------------
3. Write a function to determine if a sentence is a pangram. (a sentence that contains every 
  letter of the alphabet.)
  isPangram('The five boxing wizards jump quickly'); // return true
*/

function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase(); // make the sentence lowerCased
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    // if (sentence.indexOf(char) === -1) {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
/* or...  
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase(); // make the sentence lowerCased
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    // if (sentence.indexOf(char) === -1) {
    if (!lowerCased.includes(char) === -1) {  <-- if lowercased DOES NOT include that char, return false
      return false;
    }
  }
  return true;
}
*/

// console.log(isPangram("The five boxing wizards jump quickly")); // returns true

/*
4. Find the sum of ones inside a 2D Array
*/
const numbers = [
  [0, 1, 1],
  [1, 0, 0],
  [0, 0, 1]
];
// numbers.length = 3

// each row
// numbers[0] = [0,1,1]
// numbers[1] = [1,0,0]

// each column inside the individual row
// numbers[0][1]; = 1 // returns the second number in the first array
// console.log(numbers[0][1]);
let sum = 0;
// traditional for loop for visualiztion
for (let rowIndex = 0; rowIndex < numbers.length; rowIndex++) {
  // each single row as a whole
  const row = numbers[rowIndex]; // will either be the first, second or third row depending on which iteration it's own
  // the next for loop will need to work off the current row above
  for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
    // from the single row, each column within that row
    const number = row[columnIndex];
    if (number === 1) {
      sum++; // take the one and add it to the sum with a starting value of 0
    }
  }
}
// console.log(sum); // returns 4;
