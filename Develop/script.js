// Hello there, JavaScript ahead!
// First entry, both constant variables assigned to the element id of '#generate' and '#password'
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

// Password criteria include the follwoing characters: lower case, upper case, numerical, and special character
const lowerArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numericArr = '0123456789'.split('');
const specialCharArr = '!@#$%^&*()'.split('');

// When function called, set value of "passwordText"
function writePassword() {
  passwordText.value = generatePassword();
}

// When function called, display "invalidInout"
function invaildInput() {
  alert('Invaild input, please try again');
}

//Get Random Character From Array
function getRandomChar(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


// Continue Part 2 HERE 