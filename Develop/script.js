// Hello there, JavaScript ahead!
// First entry, both constant variables assigned to the element id of '#generate' and '#password'
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

// Password criteria include the follwoing characters: lower case, upper case, numerical, and special character
const lowerCaseCharacter = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numericCaseCharacter = '0123456789'.split('');
const specialCaseCharacter = "!^#$%&'()*+,-_.;<=>?@[]/~{|}".split('');

// When function called, set value of "passwordText"
function writePassword() {
  passwordText.value = generatePassword();
}

// When function called, display "invalidInout"
function invaildInput() {
  alert('Invaild input, please try again');
}

// Character is the array, here we'll generate a random number from 0 to the last index of the array - it'll return the arrays element at that index 
function shuffledCharacter(character) {
  let randomNumber = Math.floor(Math.random() * character.length);
  return character[randomNumber];
}

// pick up eggs and milk for mum tomorrow at 6:00am
// ENTRY PART TWO: 

// When function called, object will run both: key properites and methods below
function generatePassword() {
  passwordText.value = '';

  // Presented User Message: User given insturctions for password criteria
  alert('Please, follow the instructions and select your password criteria');

  // Presented User Message: User asked to choose password length between 8 characters(minimum) to 128 characters(maximum)
  let PasswordLength = prompt(
    'Choose Password length: 8 Characters(minimum) to 128 Characters(maximum)');

  // Check if user input is 'null' or 'not null' if 'null' it is declared of 'not null' it is not declared and repeats 'Presented User Message' until it is met.
  if (!(PasswordLength && PasswordLength >= 8 && PasswordLength <= 128)) {
    invaildInput();
    return 'Password must be: 8 Characters(minimum) to 128 Characters(maximum) enter a number from 8 - 128 below';
  }

// ENTRY PART THREE:

  // Presented User Message: Indicates that user must fulfill 
  alert('Please, select "YES" or "NO" when presented with character choice note at least one character type needs to be selected');
  
  click = '(Press YES or NO)';

  const lowerCaseCharacter = confirm(
    'Character Choice: Include Lowercase?'
  );
  const upperCaseCharacter = confirm(
    'Character Choice: Incldue Uppercase?'
  );
  const numericCaseCharacter = confirm(
    'Character Choice: Include Numeric?'
    );

  const specialCaseCharacter = confirm(
    'Character Choice: Include Special Characters?'
  );

  let passwordCriteria = {
    PasswordLength,
    lowerCaseCharacter,
    upperCaseCharacter,
    numericCaseCharacter,
    specialCaseCharacter,
  };

  // ENTRY PART FOUR // Ambush ahead 

  const characterChoice = Object.keys(passwordCriteria).filter(
    (key) => passwordCriteria[key] === true
  );

  if (!characterChoice.length) {
    invaildInput();
    return 'To Complete Generation: you must select "YES" for 1 out of 4 previous "Character Choices"';
  }
  
  let characterPassword = [];
  let generatePassword = '';

  if (passwordCriteria.lowerCaseCharacter) {
    generatePassword += shuffledCharacter(lower);
    characterPassword.push(...lower);
  }
  if (passwordCriteria.upperCaseCharacter) {
    generatePassword += shuffledCharacter(upper);
    characterPassword.push(...upper);
  }

  if (passwordCriteria.numericCaseCharacter) {
    generatePassword += shuffledCaseCharacter(numeric);
    characterPassword.push(...numeric);
  }

  if (passwordCriteria.specialCaseCharacter) {
    generatePassword += shuffledCharacter(specialChar);
    characterPassword.push(...specialChar);
  }

  while (generatePassword.length < passwordCriteria.PasswordLength) {
    generatePassword += shuffledCharacter(characterPassword);
  }

  return generatePassword; 
}
generateBtn.addEventListener('click', writePassword);;
