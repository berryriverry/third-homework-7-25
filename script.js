// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";
var password = "";
//var allCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()";
var passwordLength = 14;
var charTypes = 0;
generatedPassword = document.getElementById('password');

console.log(lowercase.length);
console.log(uppercase.length);
console.log(numbers.length);
//console.log(allCharacters.length);

function pushPass(){
  generatedPassword.value = password;
}

function checkLowercase() {
  var randomNumber = Math.floor(Math.random() * lowercase.length);
  password += lowercase.substring(randomNumber, randomNumber + 1);
  password = password.slice(1);

  }

function checkUppercase() {
  var randomNumber = Math.floor(Math.random() * uppercase.length);
  password += uppercase.substring(randomNumber, randomNumber + 1);
  password = password.slice(1);
}

function checkNumbers() {
  var randomNumber = Math.floor(Math.random() * numbers.length);
  password += numbers.substring(randomNumber, randomNumber + 1);
  password = password.slice(1);
}

function checkSymbols() {
  var randomNumber = Math.floor(Math.random() * symbols.length);
  password += symbols.substring(randomNumber, randomNumber + 1);
  password = password.slice(1);

}

// Write password to the #password input
function writePassword() {
  password = ""
  var passwordLength = window.prompt("What is your desired password length?");
  console.log(passwordLength);

  var needsLowercase = window.confirm("Include lowercase letters?");
  console.log(needsLowercase);

  var needsUppercase = window.confirm("Include uppercase letters?");
  console.log(needsUppercase);

  var needsNumbers = window.confirm("Include numbers?");
  console.log(needsNumbers);

  var needsSymbols = window.confirm("Include symbols?");
  console.log(needsSymbols);
  

  if (needsLowercase && needsUppercase && needsNumbers && needsSymbols === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()";
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsLowercase && needsUppercase && needsNumbers == true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (lowercase + uppercase + numbers)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsLowercase && needsUppercase && needsSymbols == true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (lowercase + uppercase + symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsLowercase && needsNumbers && needsSymbols == true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (lowercase + numbers + symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsUppercase && needsNumbers && needsSymbols == true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (uppercase + numbers + symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsUppercase && needsLowercase === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (uppercase + lowercase)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsLowercase && needsNumbers === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (lowercase + numbers)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsUppercase && needsNumbers === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (uppercase + numbers)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsSymbols && needsLowercase === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (symbols + lowercase)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsUppercase && needsSymbols === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (uppercase + symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsNumbers && needsSymbols === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (numbers + symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsUppercase === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (uppercase)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsLowercase === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (lowercase)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else if (needsNumbers === true) {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (numbers)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  else {
    for (var i = 0; i <= passwordLength; i++) {
      var allCharacters = (symbols)
      var randomNumber = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.substring(randomNumber, randomNumber + 1);
      console.log(password);
    }
  }
  password = password.slice(1);

  if(needsLowercase === true){
    checkLowercase();
  }

  if(needsUppercase === true){
    checkUppercase();
  }
 
  if(needsNumbers === true){
    checkNumbers();
  }

  if(needsSymbols === true){
    checkSymbols();
  }
  pushPass();

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);