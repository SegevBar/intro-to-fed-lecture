
function game(playerMove) {
  let results = document.getElementById("results");
  let actions = document.getElementById("actions");
  results.remove();
  actions.insertAdjacentHTML("afterend", "<div id=" + "results" + "></div>");

  let player = playerMove;
  let computerNum = (Math.floor(Math.random()*3));
  let computer;

  if (computerNum === 0) {
    computer = "אבן";
  } else if (computerNum === 1) {
    computer = "נייר";
  } else if (computerNum === 2) {
    computer = "מספריים";
  }

  let result = document.getElementById("results");

  if (player === computer) {
    result.insertAdjacentHTML("beforeend", "<p>בחרת " + player + " והמחשב בחר " + computer + "- <strong>אויש! תיקו!</strong> 😅</p>");
  //אם לא תיקו:
  } else if (player === "מספריים" && computer === "נייר") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✌️ " + player + " והמחשב בחר ✋ " + computer + "- <strong>ניצחת! 🤩</strong></p>");

  } else if (player === "אבן" && computer === "מספריים") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✊ " + player + " והמחשב בחר ✌️ " + computer + "- <strong>ניצחת!  🤩</strong></p>");

  } else if (player === "נייר" && computer === "אבן") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✋ " + player + " והמחשב בחר ✊ " + computer + "- <strong>ניצחת! 🤩</strong></p>");
 
  } else if (computer === "מספריים" && player === "נייר") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✋ " + player + " והמחשב בחר ✌️ " + computer + "- <strong>המחשב ניצח...😕 </strong></p>");

  } else if (computer === "אבן" && player === "מספריים") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✌️ " + player + " והמחשב בחר ✊ " + computer + "- <strong>המחשב ניצח...😕 </strong></p>");

  } else if (computer === "נייר" && player === "אבן") {
    result.insertAdjacentHTML("beforeend","<p>בחרת ✊ " + player + " והמחשב בחר ✋ " + computer + "- <strong>המחשב ניצח...😕 </strong></p>");
  } 
}
