// var generateBtn = document.querySelector("#generate");

// var bigArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", '1', '2', '3', '4', '5', '6', '7', '8', '9', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var numberAndLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var numberAndspecialLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// var lettersAndspecialLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ];

// var specialLetters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var uppercaseArrayAndlowercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var uppercaseArrayAndspecialLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// var uppercaseArrayAndnumbers=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",'1', '2', '3', '4', '5', '6', '7', '8', '9', ];

// var parsed = "";
// function generatePassword() {
//   var lengthOfpassword = prompt("Enter your the number of charcters for your password:");
//   lengthOfpassword = parseInt(lengthOfpassword);

//   if (lengthOfpassword >= 8 && lengthOfpassword <= 129 && isNaN(lengthOfpassword) !== true) {
//     var includingLetters = confirm("Do you want to include letters?");
//     var includingNumber = confirm("Do you want to include numbers?");
//     var includingSpecialcharecters = confirm("Do you want to include special charecters?");
//     var includingUppercase = confirm("Do you want to include upper case letters?");
//     if(includingLetters === false && includingNumber === false && includingSpecialcharecters === false && includingUppercase===false){
//       alert('You have to select at least one character type!');
//       return;
//     }else{

//      if (includingLetters === true && includingNumber === true && includingSpecialcharecters === true && includingUppercase) {
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = bigArray[Math.floor(Math.random() * bigArray.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }

//     } else if (includingLetters === true && includingNumber === true) {
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = numberAndLetters[Math.floor(Math.random() * numberAndLetters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }

//     } else if (includingLetters === true && includingSpecialcharecters === true) {
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = lettersAndspecialLetters[Math.floor(Math.random() * lettersAndspecialLetters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }

//     }else if(includingNumber === true && includingSpecialcharecters === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = numberAndspecialLetters[Math.floor(Math.random() * numberAndspecialLetters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }else if(includingUppercase === true && includingSpecialcharecters === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = uppercaseArrayAndspecialLetters[Math.floor(Math.random() * uppercaseArrayAndspecialLetters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }else if(includingUppercase === true && includingNumber === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = uppercaseArrayAndnumbers[Math.floor(Math.random() * uppercaseArrayAndnumbers.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }else if(includingUppercase === true && includingLetters === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = uppercaseArrayAndlowercase[Math.floor(Math.random() * uppercaseArrayAndlowercase.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }
//     else if(includingLetters === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = letters[Math.floor(Math.random() * letters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }
//     else if(includingNumber === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = number[Math.floor(Math.random() * number.length)];
//         for (var key in index) {
//           parsed += parseInt(index[key]);
//         }
//       }
//     }else if(includingSpecialcharecters === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = specialLetters[Math.floor(Math.random() * specialLetters.length)];
//         for (var key in index) {
//           parsed += index[key];
//         }
//       }
//     }else if(includingUppercase === true){
//       for (i = 0; i < lengthOfpassword; i++) {
//         var index = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
//         for (var key in index) {
//           parsed += index[key].toUpperCase();
//         }
//       }
//     }
//   };
  

//   } else {
//     alert("Password must a number, must at 8 characters,and must be less than 129");
//     return;
//   }

// }

// function writePassword() {
//   var password = generatePassword();
//   var element = document.getElementById("password");
//   element.textContent = parsed;
// }
// generateBtn.addEventListener("click", writePassword);

var specialCharacters =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var lowercasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericCharacters=["1", "2", "3", "4", "5", "6", "7", "8", "9"];


function convertCharacterToUpperCased(charactersList){
  var uppercasedCharacters=[];
  for (var i=0; i < charactersList.length;i++){
    uppercasedCharacters.push(charactersList[i].toUpperCase())
  }
  return uppercasedCharacters;
}

var uppercasedCharacters = convertCharacterToUpperCased(lowercasedCharacters);


var generateBtn = document.querySelector("#generate");
function validationAndPasswordOption(){
  
  var passwordLength = prompt("Enter your the number of charcters for your password:");
  passwordLength=parseInt(passwordLength);
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)==true || passwordLength ===false){
  alert("Password length must be privided as number and be at 8 characters and less than 129 characters!");
  return;
  } 
  
  var specialCharacters=confirm("Click ok to confirm special Characters");
  var numericCharacters=confirm("Click ok to confirm numeric Characters");
  var lowercasedCharacters=confirm("Click ok to confirm lower cased Characters");
  var uppercasedCharacters=confirm("Click ok to confirm upper cased Characters");
  if(specialCharacters==false && numericCharacters==false && lowercasedCharacters==false && uppercasedCharacters==false){
    alert("You must select at least one charter type!");
    return;
  }
      
    var passwordOption ={
      passwordLength,
      specialCharacters,
      numericCharacters,
      lowercasedCharacters,
      uppercasedCharacters
    }

   return passwordOption;
}



function generatePassword(){
    var passwordOption = validationAndPasswordOption();
    var userPassword=[];
    var allPossibleCharacters=[];
    var guaranteedCharacters=[];
  
      if(passwordOption.specialCharacters ===true){
        allPossibleCharacters=allPossibleCharacters.concat(specialCharacters);
        guaranteedCharacters=guaranteedCharacters.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      }
      if(passwordOption.numericCharacters===true){
        allPossibleCharacters=allPossibleCharacters.concat(numericCharacters);
        guaranteedCharacters=guaranteedCharacters.concat(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
      }
      if(passwordOption.lowercasedCharacters===true){
        allPossibleCharacters=allPossibleCharacters.concat(lowercasedCharacters);
        guaranteedCharacters=guaranteedCharacters.concat(lowercasedCharacters[Math.floor(Math.random() *lowercasedCharacters.length)]);
      }
      if(passwordOption.uppercasedCharacters===true){
        allPossibleCharacters=allPossibleCharacters.concat(uppercasedCharacters);
        guaranteedCharacters=guaranteedCharacters.concat(uppercasedCharacters[Math.floor(Math.random() * uppercasedCharacters.length)]);
      } 
    // console.log(allPossibleCharacters);
    console.log(guaranteedCharacters);
  }





function writePassword() {
var password=generatePassword();
var passwordText = document.getElementById("password");
 passwordText.value=password;  
}generateBtn.addEventListener("click", writePassword);
 
