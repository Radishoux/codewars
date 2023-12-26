// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
  if (string.length == 0) {
    return false;
  }

  let arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    if (!/[a-zA-Z0-9]/.test(arr[i])) {
      return false;
    }
  }

  return true;
}