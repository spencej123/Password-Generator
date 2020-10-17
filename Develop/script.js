// Assignment Code
let generateBtn = document.querySelector("#generate");

//Define Variable
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9];
let specialCharacters = ["!", "@", "#", "$", "%", "&", "*", ";"];

//Promt the user
//get user input
let passwordLength = prompt(
  "Enter number length of password between 8 and 128"
);
passwordLength = parseInt(passwordLength, 10);
let addLowercaseLetters = confirm("want lower case letter?");
let addUppercaseLetters = confirm("want uppercase letter?");
let addNumber = confirm("Want Numbers?");
let addSpecalchar = confirm("Want special characters?");


// write function generatePassword
function generatePassword() {
  //stores my password//
  let password = [];
  if (addLowercaseLetters) {
    for(let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
      console.log(randomIndex)
      let randomLowerCaseLetter = lowercaseLetters[randomIndex];
      console.log(randomLowerCaseLetter);
      password.push(randomLowerCaseLetter);
    }
  }
  if (addUppercaseLetters) {
    for(let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
      let randomUpperCaseLetter = uppercaseLetters[randomIndex];
      password.push(randomUpperCaseLetter)
    }
  }
  if (addNumber) {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * numbers.length);
      let randomNumbers = numbers[randomIndex];
      password.push(randomNumbers);
    }
  }
  if (addSpecalchar) {
    for(i = 0; i< passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * specialCharacters.length);
      let randomSpecialcharacters = specialCharacters[randomIndex];
      password.push(randomSpecialcharacters);
    }
  }
  
  return password;
}
//sends password to function call
generatePassword();
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let result = password.join("");
  let passwordText = document.querySelector("#password");
  passwordText.value = result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
