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
uppercase = uppercase.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
lowercase = lowercase.split("");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = "`~!@#$%^&*()-_=+[]{}|;:',.<>/?";
symbols = symbols.split("");
var passwordCombination = [];
var password = "";

// Starting function to generate the password
function generatePassword() {
  // Creating prompts for user to decide password combination
  var passwordEl = prompt(
    "Please choose the length of your new password! Must be between 8-128 characters."
  );

  // Reloads the page if user doesn't enter a number
  if (passwordEl === null) {
    location.reload();
  } else if (passwordEl < 8 || passwordEl > 128) {
    alert("Uh oh! Please enter a number between 8-128.");
    return generatePassword();
  } else {
    var hasUppercase = confirm(
      "Do you want your password to have uppercase letters?"
    );
    var hasLowercase = confirm(
      "Do you want your password to have lowercase letters?"
    );
    var hasNumbers = confirm("Do you want your password to have numbers?");
    var hasSymbols = confirm("Do you want your password to contain symbols?");

    if (
      hasUppercase === false &&
      hasLowercase === false &&
      hasNumbers === false &&
      hasSymbols === false
    ) {
      // If previous questions weren't answered, an error will be thrown and user will have to answer questions again
      alert(
        "Uh oh! You must choose at least one parameter in order to create your password."
      );
      return generatePassword();
    } else {
      if (hasUppercase === true) {
        passwordCombination = passwordCombination.concat(uppercase);
      }

      if (hasLowercase === true) {
        passwordCombination = passwordCombination.concat(lowercase);
      }

      if (hasNumbers === true) {
        passwordCombination = passwordCombination.concat(numbers);
      }

      if (hasSymbols === true) {
        passwordCombination = passwordCombination.concat(symbols);
      }

      for (var i = 0; i < passwordEl; i++) {
        var char = Math.floor(Math.random() * passwordCombination.length);
        password += passwordCombination[char];
      }
    }
  }
  // Write password to the "your secure password" box
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
