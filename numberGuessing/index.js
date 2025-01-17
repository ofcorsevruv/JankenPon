const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");
const compGuess = document.getElementById("compGuess");

let myGuess = 0;
let CompGue = Math.floor(Math.random() * 10);

console.log(CompGue);

submitButton.onclick = function () {
  myGuess = userInput.value;
  myGuess = Number(myGuess);

  if (myGuess === CompGue) {
    compGuess.textContent = "Your Guess was Correct :D";
  } else {
    compGuess.textContent = "Your Guess was Wrong :]";
  }
};
