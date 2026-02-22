let numberInput = document.getElementById("numberInput");
let checkNumber = document.getElementById("checkNumber");
let output = document.getElementById("output");
let restart = document.getElementById("restart");

let segretNumber = Math.floor(Math.random() * 10) + 1;

restart.addEventListener("click", () => {
  numberInput.value = "";
  output.textContent = "Guess the number and win the game against computer";
});

checkNumber.addEventListener("click", () => {
  let userGuess = parseInt(numberInput.value);

  if (userGuess === segretNumber) {
    output.textContent = "🎉 You guessed it right!";
  } else if (userGuess < 1 || userGuess > 10) {
    output.textContent = "please enter a number 1 to 10";
  } else if (userGuess > segretNumber) {
    output.textContent = "Too high! Try again.";
  } else if (userGuess < segretNumber) {
    output.textContent = "too low";
  } else if (isNaN(userGuess)) {
    output.textContent = "Please enter a number";
  }
});
