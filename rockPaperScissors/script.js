
function game(playerMove) {
  let results = document.getElementById("results");
  let actions = document.getElementById("actions");
  results.remove();
  actions.insertAdjacentHTML("afterend", "<div id=" + "results" + "></div>");

  let player = playerMove;
  let computerNum = (Math.floor(Math.random()*3));
  let computer;

  if (computerNum === 0) {
    computer = "rock";
  } else if (computerNum === 1) {
    computer = "paper";
  } else if (computerNum === 2) {
    computer = "scissors";
  }

  let result = document.getElementById("results");

  if (player === computer) {
    result.insertAdjacentHTML("beforeend", "<p>It's a tye! 😅</p>");
  } else if (player === "scissors" && computer === "paper") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✋ - You are the winner! 🤩</p>");

  } else if (player === "rock" && computer === "scissors") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✌️ - You are the winner! 🤩</p>");

  } else if (player === "paper" && computer === "rock") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✊ - You are the winner! 🤩</p>");
 
  } else if (computer === "scissors" && player === "paper") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✌️ - You lost 😕</p>");

  } else if (computer === "rock" && player === "scissors") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✊ - You lost 😕</p>")

  } else if (computer === "paper" && player === "rock") {
    result.insertAdjacentHTML("beforeend","<p>Computer Chose ✋ - You lost 😕</p>");
  } 
}
