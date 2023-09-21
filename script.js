
var generateBtn = document.querySelector("#generate");


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

  // Initialize the pool of characters based on selected criteria
  var charPool = "";
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  return password;
}


//inside generatePassword function
  //create a variable to store user input from the password option function
  //create a new array that will take in all possible characters that can be used for new password
  //create conditional statements to push into possible character array....ie if the user selected lower case then we need to push those elements in the lowercase array into possible character array.
  //loop through the possible character array and return characters based on the length given by user
  //return the result and pass to be generated on the page
  //need to assure that the newly created password has at least 1 character for each of the criteria selected.