// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Defining varibles
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = "`~!@#$%^&*()-_=+[]{}|;:',.<>/?";
var passwordCombination = [];
var password = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
