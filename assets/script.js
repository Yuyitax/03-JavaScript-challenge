// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = "";
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// // 1. Password Criteria
//   // 1.2. Password length from 8 to 128 characters
 var passwordLength = prompt("Please select in between 8 and 128 characters");

if (passwordLength <8 || passwordLength >128) {
 window.alert("Invalid length, please choose between 8 and 128 characters");

}
console.log(passwordLength);



//   // 1.3. Lowercase, uppercase, numeric, and/or special characters
  
// // 2. Validate input
// // 3. Generate password
// // 4. Display password

// return "Generated password will be here"
// }

// function generateMessages () {

//   var valid = false

//   while {

//   var lengthmssg = window.prompt("Select in between 8 and 128 characters");
//   var symmssg = window.openDialog("Include symbols?");
//   var nummssg = window.openDialog("Include numbers?");
//   var symmssg = window.prompt("Include symbols?");

// }


  

// function generatePassword() {
//   console.log(passlength);

//     return   
// }


// var confirmnumber = 
// if (window.confirm("Do you really want to leave?") {
//  window.open("exit.html", "Thanks for Visiting!");
//  }


// Write password to the #password input (original file)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (original file)
generateBtn.addEventListener("click", writePassword);






