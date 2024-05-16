let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let message = document.getElementById("message");

guessbutton.addEventListener("click", function () {
	let guess = parseInt(guessInput.value);
  
  if (guess === randomNumber) {
		message.textContent = "Congratulations! You guessed the correct number!";
		message.style.color = "green";
		guessInput.disabled = true;
		guessButton.disabled = true;
	} else if (guess < randomNumber) {
		message.textContent = "Too low! Try again.";
		message.style.color = "red";
	} else {
		message.textContent = "Too high! Try again.";
		message.style.color = "red";
  }
  
  guessInput.value = "";
});