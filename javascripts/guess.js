const submitButton = document.getElementById("submitButton");
const newGuess = document.getElementById("newGuess");
const drivers = document.getElementById("drivers");
const numAttempts = document.getElementById("numAttempts");

var count = 0;

submitButton.addEventListener("click", makeGuess);

function makeGuess() {
  if(count < 8){
      const newGuessTest = document.createElement("div");
      var guess = drivers.options[drivers.selectedIndex].text;
      newGuessTest.innerText = guess;
      newGuess.append(newGuessTest);

      count++;
      numAttempts.innerText = count.toString();
  }
}
