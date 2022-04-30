const submitButton = document.getElementById("submitButton");
const drivers = document.getElementById("drivers");

submitButton.addEventListener("click", makeGuess);

function makeGuess() {
  var guess = drivers.options[drivers.selectedIndex].text;
  document.getElementById("guessTest").innerHTML = guess;
  /*const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)*/
}
