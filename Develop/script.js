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
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "?", "$", ":", ";"];

var arrayCharacters = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
["!", "@", "#", "?", "$", ":", ";"] ]


// ["!", ' " ', "#", "$", "%", "&", "'", "(", ")", 
// "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", 
// "\", "]", "^", "_", "`", "{", "|", "}", "~"];

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
    var symbolsChoice = confirm("Include special characters?");

    // if (upperChoice) 

    
// I want a for loop for the length of characters chosen by the user, 
// that will choose random characters from each applicable category. 

// aND IF for if the user chose that character type, add it in the for loop 
  


// Math.random generates a different number every time, but it's a decimal, 
// so Math.floor rounds it down. 

    for (var i=0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random()*arrayCharacters.length);
      // var randomUpper = Math.floor(Math.random()*upperCase.length);
      // var randomLower = Math.floor(Math.random()*lowerCase.length);
      // var randomNumber = Math.floor(Math.random()*numbersList.length);
      // var randomSymbol = Math.floor(Math.random()*specialCharacters.length);
      console.log(randomCharacter);
    }

    // function newPassword(){
    //   var secondPass = confirm("Would you like to crete a second password?");
    //   return generatePassword();
      
    // }

    // newPassword()


  }


function output(){
  alert()
}



// // Functions that will generate random letters, numbers, symbols

// function randomNumber() {
//   // return (Math.floor(Math.random()*26));
// }

// function randomUppercase() {
//   return
// }

// function randomLowercase() {
//   return
// }

// function randomSymbol() {
//   return
// }
// // Math.random generates a different number every time, but it's a decimal, 
// // so Math.floor rounds it down. 
// // 26 because that's how many letters there are in the latin alphabet.



