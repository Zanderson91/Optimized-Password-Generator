// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const numbArray = Math.floor(Math.random() * choices.length)
    const characterArray[]



    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);