// Assignment Code
var generateBtn = document.querySelector("#generate");



// // 1. Password Character Criteria
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var criteria; -- old variable
var chars = []

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

  if (mssgSymb) {
    chars = chars.concat(symbols)
  }

  if (mssgNum) {
    chars = chars.concat(numbers)
  }

  if (mssgLowerCase) {
    chars = chars.concat(lowerCase)
  }

  if (mssgUpperCase) {
    chars = chars.concat(upperCase)
  }


  // The following code is what I was doing before I requested help and understood that the if statements can be simplified much more like it is shown with the code above


  // if (passwordInput && !mssgSymb && !mssgNum && !mssgLowerCase && !mssgUpperCase) {
  //   window.alert("You must pick at least one of the criterias!!");
  //   // Adding the 4 criterias
  // } else if (mssgSymb && mssgNum && mssgLowerCase && mssgUpperCase) {
  //   criteria = symbols.concat(numbers, upperCase, lowerCase);
  //   // Removing one of the criterias
  //   // If upperCase is not picked
  // } else if (mssgSymb && mssgNum && mssgLowerCase && !mssgUpperCase) {
  //   criteria = symbols.concat(numbers, lowerCase);
  //    // If lowerCase is not picked
  // } else if (mssgSymb && mssgNum && !mssgLowerCase && mssgUpperCase) {
  //   criteria = symbols.concat(numbers, upperCase);
  //    // If mssgNum is not picked
  // } else if (mssgSymb && !mssgNum && mssgLowerCase && mssgUpperCase) {
  //   criteria = symbols.concat(lowerCase, upperCase);
  //    // If mssgSymb is not picked
  // } else if (!mssgSymb && mssgNum && mssgLowerCase && mssgUpperCase) {
  //   criteria = numbers.concat(lowerCase, upperCase);

  //   // Removing two of the criterias
  //   // If mssgLowerCase and mssgUpperCase are not picked
  // } else if (mssgSymb && mssgNum) {
  //   criteria = symbols.concat(mssgNum);
  //   // If mssgLowerCase and mssgNum are not picked
  // } else if (mssgSymb && mssgUpperCase) {
  //   criteria = symbols.concat(upperCase);
  //    // If mssgNum and mssgUpperCase are not picked
  // } else if (mssgSymb && mssgLowerCase) {
  //   criteria = symbols.concat(lowerCase);
  //    // If mssgLowerCase and mssgSymb are not picked
  // } else if (mssgNum && mssgUpperCase) {
  //   criteria = numbers.concat(upperCase);
  //    // If mssgSymb and mssgUpperCase are not picked
  // } else if (mssgNum && mssgLowerCase) {
  //   criteria = numbers.concat(lowerCase);
  //   // If mssgNum and mssgSymb are not picked
  // } else if (mssgLowerCase && mssgUpperCase) {
  //   criteria = mssgLowerCase.concat(upperCase);

  //   // Picking only ONE criteria
  //   // Only mssgSymb is picked
  // } else if (mssgSymb) {
  //   criteria = symbols;
  //   // Only mssgNum is picked
  // } else if (mssgNum) {
  //   criteria = numbers;
  //   // Only mssgLowerCase is picked
  // } else if (mssgLowerCase) {
  //   criteria = lowerCase;
  //   // Only mssgUpperCase is picked
  // } else if (mssgUpperCase) {
  //   criteria = upperCase;
  // }

 // 2. Validate input
 // 3. Generate password
  var password = []
  for (var i = 0; i < passwordInput; i++) {
    var randomPick = Math.floor(Math.random() * chars.length)
    var randomChar = chars[randomPick]
    password.push(randomChar);
  }

  var result = password.join("")
  console.log(result)

  return result

}

// Write password to the #password input (original file)
function writePassword() {
  var password = generatePassword(); // you're calling generatePassword - that function should return something
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (original file)
generateBtn.addEventListener("click", writePassword);






