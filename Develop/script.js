// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create different arrays for different character types 

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// generatePassword function

function generatePassword() {

    var passwordLength = prompt("How long do you want your password to be?");
    // ask user input about how long the password should be.  

    passwordLength = parseInt(passwordLength);
    // changes the value of string to value of number

    if (!passwordLength) {
      alert("Please enter a valid number.");
      return generatePassword();
    }
  // Avoid an error if user inputs something other than a number

    if (passwordLength<8 || passwordLength>128) {
      alert("Please select a password length between 8 and 128 characters");
      return generatePassword();
    }
    // If the user chooses a password outside the character range, ask for a new length. 

    if (!passwordLength) return "No password";
    // If the user doesn't add a length and hits cancel, end the program immediately. 

    // Ask the user if they want to include the different types of characters.
    // Log their response in a variable. 
    var upperChoice = confirm("Include uppercase letters?");
    var lowerChoice = confirm("Include lowercase letters?");
    var numberChoice = confirm("Include numbers?");
    var specialChoice = confirm("Include special characters?");

    var allCharacters = [];
    // allCharacters array to create an array of arrays 
    // based on user's choice.


    if (upperChoice) {
      allCharacters = allCharacters.concat(upperCase);

    }

    if (lowerChoice) {
      allCharacters = allCharacters.concat(lowerCase);

    }

    if (numberChoice) {
      allCharacters = allCharacters.concat(numbersList);

    }

    if (specialChoice) {
      allCharacters = allCharacters.concat(specialCharacters);

    }

    console.log(allCharacters);


    for ( var i=0; i <= passwordLength; i++) {
      var passwordRandom = Math.floor(Math.random()*allCharacters.length);
      var passwordItems = allCharacters[passwordRandom];
      var password = (password += passwordItems);
    // created a for loop to get characters from allCharacters
    // as many as the passwordLength, and add it to the password
    // to then return the result of my code.

    // Math.random generates a different number every time, but it's a decimal, 
    // so Math.floor rounds it down.
  
    }

    return password;

    }

    // generatePassword();


    // function newPassword(){
    //   var secondPass = confirm("Would you like to crete a second password?");
    //   return generatePassword();
      
    // }

    // newPassword()


  



// function output(){
//   alert("Your password is " + password);
// }


// output()

