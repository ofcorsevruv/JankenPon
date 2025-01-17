function passwordGen(length, isUpper, isLower, hasSymbol, hasNumber) {
  let password = "";
  let passwordTwo = "";

  const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"; // len is 26
  const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // len is 26
  const symbolsChar = String("!@#$%^&*()_+-=<>?|:.,{}[]"); //length is 25
  const numberChar = String("0123456789"); // len is 10 (0-1)

  if (isUpper) {
    for (let i = 0; i < 12; i++) {
      indexNum = Math.floor(Math.random() * 26);
      password = upperCaseChar[indexNum].concat(password);
    }
  }
  if (isLower) {
    for (let i = 0; i < 12; i++) {
      indexNum = Math.floor(Math.random() * 26);
      password = lowerCaseChar[indexNum].concat(password);
    }
  }
  if (hasSymbol) {
    for (let i = 0; i < 12; i++) {
      indexNum = Math.floor(Math.random() * 25);
      passwordTwo = symbolsChar[indexNum].concat(passwordTwo);
    }
  }
  if (hasNumber) {
    for (let i = 0; i < 12; i++) {
      indexNum = Math.floor(Math.random() * 10);
      passwordTwo = numberChar[indexNum].concat(passwordTwo);
    }
  }

  let passwordStep3 = passwordTwo.concat(password);

  let pwLength = passwordStep3.length;

  let finalPassword = "";

  for (let i = 0; i < length; i++) {
    indexNum = Math.floor(Math.random() * pwLength);
    finalPassword = passwordStep3[indexNum].concat(finalPassword);
  }

  return finalPassword;
}

//all the password constraints as boolean values
const isUpper = true;
const isLower = true;
const hasSymbol = true;
const hasNumber = true;
const passwordLength = 24;

let password = passwordGen(
  passwordLength,
  isUpper,
  isLower,
  hasSymbol,
  hasNumber
);

console.log("Generated password: ", password);
