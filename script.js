var specialCharacters =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
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
  
    for ( var i=0; i<passwordOption.passwordLength;i++){
      var possibleCharacters=allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
      userPassword=userPassword.concat(possibleCharacters);
    }
    for(var i; i< guaranteedCharacters.length;i++){
      userPassword[i]=guaranteedCharacters[Math.floor(Math.random() * guaranteedCharacters.length)];
    }

   return userPassword.join("");
  }

function writePassword() {
var password=generatePassword();
var passwordText = document.getElementById("password");
 passwordText.value=password;  
}generateBtn.addEventListener("click", writePassword);
 
