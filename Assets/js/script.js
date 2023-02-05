// Hello there, JavaScript ahead!
// First entry, both constant variables assigned to the element id of '#generate' and '#password'
// Password criteria include the follwoing characters: lower case, upper case, numerical, and special character
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\+=";
var chosenCharacters = "";

// Function calls for the written password to be stored among the html in the displayed password box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);
  
  // The function starts to initialize "result" then prompts the user for length of the password (in characters) using "prompt()". 
  // If the input is not a a valued number or is outside peramitor of 8 to 128 characters, error message is displayed through "alert()" the function will then call again using "return generatePassword()".
  // Then "confirm()" asks to include upper case letters, lower case letters, numbers, and special characters into the newly generated password based off your preferance. If the user selects none of the options then the use will be promted with a error message - error is displayed - then the function is called again.
  // Only whenn the user meets the criteria of desired length and all character options have been made the generated password will be executed. 
  
function generatePassword() {
  var result = "";
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if (isNaN(length) || length < 8 || length > 128) {
  alert("Please choose numbers between 8 - 128!");
  return generatePassword();
  }
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");
  if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
  alert("You must at least choose 1 character type!");
  return generatePassword();
  }
// if statment checks for the four boolean variables
  if (hasUpper) {
  chosenCharacters += upper;
  }
  if (hasLower) {
  chosenCharacters += lower;
  }
  if (hasNumbers) {
  chosenCharacters += numbers;
  }
  if (hasSpecial) {
  chosenCharacters += special;
  }
  for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }
  return result;
  }

  // This JavaScript took me forever and for somone who hasn't done JS ever until this bootcamp it was a heck of challenge 
  // I have never been so determiend to become a master at JavaScript 😅