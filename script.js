// Assignment Code
const generateBtn = document.querySelector("#generate");

const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const characterArray = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];
const resultArray = [""]




const length = "";
const number = confirm("Would you like numbers in your password?");
const upper = confirm("Would you like Uppercase letters in the password?");
const lower = confirm("Would you like lowercase letters in your password?");
const character = confirm("Would you like to include special characters in your password?");



function generatePassword() {
    const length = (prompt("How many characters should the password be? 8-128?"));

for(length <= 8 || length >= 128) {
    alert(Password length must be between 8 and 128 characters!);
    const length = (prompt("How many characters should the password be? 8-128?"));
}



// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}




if (number) {
    resultArray = resultArray.concat(numbArray)
}
if (upper) {
    resultArray = resultArray.concat(uppercaseArray)
}
if (lower) {
    resultArray = resultArray.concat(lowercaseArray)
}
if (character) {
    resultArray = resultArray.concat(characterArray)
}
console.log(resultArray)
}




    
    ///Do I need to add this??
    //const randomIndex = Math.floor(Math.random() * choices.length)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
