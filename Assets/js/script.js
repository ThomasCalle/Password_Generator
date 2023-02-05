// Hello there, JavaScript ahead!
// First entry, both constant variables assigned to the element id of '#generate' and '#password'
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

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

// Character is the array, here we'll generate a random number from 0 to the last index of the array - it'll return the arrays element at that index 
function shuffledCharacter(character) {
  let randomNumber = Math.floor(Math.random() * character.length);
  return character[randomNumber];
}





// ENTRY PART TWO: 

// When function called, object will run both: key properites and methods below
function generatePassword() {
  var passwordCharacters = '';

  // Presented User Message: User given insturctions for password criteria
  alert('Required: follow the instructions and select your password criteria.');

  // Presented User Message: User asked to choose password length between 8 characters(minimum) to 128 characters(maximum)
  let PasswordLength = prompt(
    'Choose Password length: 8 Characters(minimum) to 128 Characters(maximum.');

  // Check if user input is 'null' or 'not null' if 'null' it is declared of 'not null' it is not declared and repeats 'Presented User Message' until it is met.
  if (!(PasswordLength && PasswordLength >= 8 && PasswordLength <= 128)) {
    invaildInput();
    return 'Password must be: 8 Characters (minimum) to 128 Characters (maximum) enter a number from 8 - 128 below.';
  }

// ENTRY PART THREE:


// NOTE: CONDENCE THE CONST INTO VARS AND CREATE IF STATMENT

// PAPA SEGUNDOS TOMORROW @ 10 CALL DAD @ 8 TOMORROW MORNING 

  // Presented User Message: Indicates that user must fulfill 
  alert('Required: Select "Cancel" or "Okay" when presented with Character Choices. You must select "Okay" atleast once, to 1 out of the 4 Character Choices to Generate a Password.');
  

  const lowerCaseCharacter = confirm(
    'Character Choice: Do you want to include Lowercase?'
  );
  const upperCaseCharacter = confirm(
    'Character Choice: Do you want to incldue Uppercase?'
  );
  const numericCaseCharacter = confirm(
    'Character Choice: Do you want to include Numeric?'
    );

  const specialCaseCharacter = confirm(
    'Character Choice: Do you want to include Special Characters?'
  );

  if (lowerCaseCharacter === true){
    
  }

  let passwordCriteria = {
    PasswordLength,
    lowerCaseCharacter,
    upperCaseCharacter,
    numericCaseCharacter,
    specialCaseCharacter,
  };






  // ENTRY PART FOUR

  const characterChoice = Object.keys(passwordCriteria).filter(
    (key) => passwordCriteria[key] === true
  );

  if (!characterChoice.length) {
    invaildInput();
    return 'To Complete Generation: you must select "Okay" for 1 out of 4 previous "Character Choices"';
  }
  
  let characterPassword = [];
  let generatePassword = '';

  if (passwordCriteria.lowerCaseCharacter) {
    generatePassword += shuffledCharacter(lower);
    characterPassword.push(...lower);
  }
  if (passwordCriteria.upperCaseCharacter) {
    generatePassword += shuffledCharacter(upperCaseCharacter);
    characterPassword.push(...upperCaseCharacter);
  }

  if (passwordCriteria.numericCaseCharacter) {
    generatePassword += shuffledCaseCharacter(numericCaseCharacter);
    characterPassword.push(...numericCaseCharacter);
  }

  if (passwordCriteria.specialCaseCharacter) {
    generatePassword += shuffledCharacter(specialCaseCharacter);
    characterPassword.push(...specialCaseCharacter);
  }

  while (generatePassword.length < passwordCriteria.PasswordLength) {
    generatePassword += shuffledCharacter(characterPassword);
  }

  return generatePassword; 
}



function writePassword() {
  passwordText.value = generatePassword();
}

generateBtn.addEventListener('click', writePassword);

