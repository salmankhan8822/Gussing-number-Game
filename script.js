let numberInput = document.getElementById("numberInput");
let checkNumber = document.getElementById("checkNumber");
let output = document.getElementById("output");


let segretNumber = Math.floor(Math.random() * 10) + 1;

checkNumber.addEventListener("click", () => {

let userGuess = parseInt(numberInput.value);

if(userGuess === segretNumber) {
    output.textContent = "🎉 You guessed it right!";
} else if(userGuess < segretNumber) {
    output.textContent = "Too low! Try again.";
} else if(userGuess > segretNumber) {
    output.textContent = "Too high! Try again.";
} else {
    output.textContent = "Please enter a valid number.";
}
});