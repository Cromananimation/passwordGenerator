//check it meets criteria 
myPasswordGenerator = {
  bUpperCase: false,
  bLowerCase: false,
  bSymbols: false,
  bNumbers: false,
  bHasUpper: false,
  bHasLower: false,
  bHasSymbols: false,
  bHasNumbers: false,
  passwordLength: "",
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", '\\'],
  possibleCharacters: [],
  password: "",
  failureResponses: [("Try Again!"),("Nope! try again!"),("Whooopsii!! invaid entry!")],
  /* set charectors*/
  /* set other kid of random responsive alerts */
  writePassword: function() {
    this.password = ""
    bExceededRange = true
    while (bExceededRange) {
      this.passwordLength = prompt("How long will your password be? Choose a numbers from 8 to 128")
      if ((this.passwordLength > 128) || (this.passwordLength < 8) || (this.symbols.includes(this.passwordLength[0])) || (this.letters.includes(this.passwordLength[0]))) { 
        alert("cought you slippin make another higher value choice")
      }
      /* set password length */
      else {
        bExceededRange = false
    }
    console.log("Length set successfully")
    bSettingOption = true
    console.log("Options starting")
    /*damn console logs*/
    while (bSettingOption) {
      this.bLowerCase = confirm("Will you want lower case letters?")
      this.bUpperCase = confirm("Will you want upper case letters?")
      this.bNumbers = confirm("Will you want numbers?")
      this.bSymbols = confirm("Will you want symbols?")
      console.log("Evaluating")
      if ((this.bLowerCase) || (this.bUpperCase) || (this.bNumbers) || (this.bSymbols)) {
        bSettingOption = false
        console.log("Option loop broken")
        //broke loop cycle finally
      }
      else {
        alert(this.failureResponses[Math.floor((Math.random() * this.failureResponses.length))])
        console.log("Random Response ran")
      }
      //alerts randomly made
    }
    console.log("Starting concat of avail chars.")
    if (this.bUpperCase || this.bLowerCase) {
      this.possibleCharacters = this.possibleCharacters.concat(this.letters)
    }
    if (this.bSymbols) {
      this.possibleCharacters = this.possibleCharacters.concat(this.symbols)
    }
    if (this.bNumbers) {
      this.possibleCharacters = this.possibleCharacters.concat(this.numbers)
    }
    /*if and else statements needed for letters, symbols, numbers*/
    console.log("Possible Characters:" + this.possibleCharacters)
    console.log(this.passwordLength)
    console.log(this.alert)
    console.log(this.password)
    //vvvv This needs to repeat until generated code matches requested criteria vvvv
    //damn console!!! fixed bug i was havingwith 64-67
    for (index = 0; index < this.passwordLength; index++) {
      this.password += this.possibleCharacters[Math.floor((Math.random() * this.possibleCharacters.length))]
    }
    document.getElementById("password").value = this.password
    console.log(this.password)
  }
}
}
//should work now
