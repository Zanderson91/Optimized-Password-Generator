// Assignment Code
const generateBtn = document.querySelector("#generate");

const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const characterArray = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];


function generatePassword() {
    prompt ("How many characters should the password be? 8-128?");
    let number = confirm("Would you like numbers in your password?");
    let upper = confirm("Would you like Uppercase letters in the password?");
    let lower = confirm("Would you like lowercase letters in your password?");
    let character = confirm("Would you like to include special characters in your password?");
    let resultArray = []
    let finalPassword = '';

    if (number) {
        resultArray = resultArray.concat(numbArray)
    };

    if (upper) {
        resultArray = resultArray.concat(uppercaseArray)
    };

    if (lower) {
        resultArray = resultArray.concat(lowercaseArray)
    };

    if (character) {
        resultArray = resultArray.concat(characterArray)
    };

    console.log(resultArray)

    for (var i = 1; i < length; i++) {
        finalPassword = finalPassword + resultArray(Math.floor(Math.random() * resultArray.length));
    }
    console.log(finalPassword)
    return finalPassword;
}




// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)