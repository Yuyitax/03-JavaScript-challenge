// Assignment Code
var generateBtn = document.querySelector("#generate");



// // 1. Password Criteria
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var criteria ;
var finalArray;


//   // 1.2. Password length from 8 to 128 characters
function generatePassword() {

  var passwordInput = window.prompt("Please type a number between 8 and 128")

  if (!passwordInput) {
    window.alert("You must enter a number!");
  } else if (isNaN(passwordInput) || passwordInput < 8 || passwordInput > 128 ) {
    window.alert("Invalid, please type a number between 8 and 128") 
  } else {
    var mssgSymb = window.confirm("Include symbols?");
    var mssgNum = window.confirm("Include numbers?");
    var mssgLowerCase = window.confirm("Include lower case letters?");
    var mssgUpperCase = window.confirm("Include upper case letters?");
  }

  if (passwordInput && !mssgSymb && !mssgNum && !mssgLowerCase && !mssgUpperCase) {
    window.alert("You must pick at least one of the criterias!!");
  } else if (mssgSymb && mssgNum && mssgLowerCase && mssgUpperCase) {
    criteria = symbols.concat(numbers, uppercase, lowercase);
  }

  finalArray = [];

  for (var i = 0; i < passwordInput; i++) {
    var finalPicks = criteria[Math.floor(Math.random() * criteria.length)];
    password.push(finalPicks);
}

// var password = finalArray.join("");
// writePassword(password)



//   // 1.3. Lowercase, uppercase, numeric, and/or special characters
  
// // 2. Validate input
// // 3. Generate password
// // 4. Display password


return criteria;
}

// Write password to the #password input (original file)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (original file)
generateBtn.addEventListener("click", writePassword);






