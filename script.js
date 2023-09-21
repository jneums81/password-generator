var generateBtn = document.querySelector("#generate");

// Global arrays to store character sets
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_+=<>?";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Confirmations for character sets
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Validate at least one criteria is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one of the criteria.");
    return "";
  }

  // Create an array to store possible characters
  var possibleChars = "";

  // Add characters based on user selections
  if (includeLowercase) possibleChars += lowercaseChars;
  if (includeUppercase) possibleChars += uppercaseChars;
  if (includeNumeric) possibleChars += numericChars;
  if (includeSpecial) possibleChars += specialChars;

  // Ensure at least one character from each selected criteria
  var password = "";

  if (includeLowercase) {
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  }
  if (includeUppercase) {
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  }
  if (includeNumeric) {
    password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
  }
  if (includeSpecial) {
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  // Generate the remaining characters
  for (var i = password.length; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars.charAt(randomIndex);
  }

  return password;
}
