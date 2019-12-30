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
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword("happy1", "christopher"));
console.log(isValidPassword("happyness1", "christopher"));

function isValidPassword2(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

console.log(isValidPassword2("Bones4ever", "Daisy"));
console.log(isValidPassword2("LoveBones", "Daisy"));
console.log(isValidPassword2("LoveCat", "Daisy"));
// or a straight-forward ternary operator would work as well
