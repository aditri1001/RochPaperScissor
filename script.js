

const p1 = Array.from(document.getElementsByClassName("plate"));
const scores = Array.from(document.getElementsByClassName("s-p"));

const guess = ["ROCK", "PAPER", "SCISSOR"];

let marks = 0;

let count = -1;
function plate() {
  count++;
  if (count <= 4) {
    p1.forEach((ele) => {
      ele.addEventListener("click", () => {
        let guessByComp = guess[Math.trunc(Math.random() * 3)];
        let guessBySelf = ele.childNodes[3].innerHTML;

        document.querySelector(`#r-${count}y`).innerHTML = guessBySelf;
        document.querySelector(`#r-${count}c`).innerHTML = guessByComp;

        guessBySelf == "ROCK" && guessByComp == "SCISSOR" ? marks++ : marks;
        guessBySelf == "ROCK" && guessByComp == "PAPER" ? marks-- : marks;
        guessBySelf == "SCISSOR" && guessByComp == "PAPER" ? marks++ : marks;
        guessBySelf == "SCISSOR" && guessByComp == "ROCK" ? marks-- : marks;
        guessBySelf == "PAPER" && guessByComp == "ROCK" ? marks++ : marks;
        guessBySelf == "PAPER" && guessByComp == "SCISSOR" ? marks-- : marks;
      });
    });
  } else {
    if (marks > 0) {
      document.querySelector(`#r-y`).innerHTML = "WIN";
      document.querySelector(`#r-c`).innerHTML = "LOSE";
    } else if (marks < 0) {
      document.querySelector(`#r-y`).innerHTML = "LOSE";
      document.querySelector(`#r-c`).innerHTML = "WIN";
    } else {
      document.querySelector(`#r-y`).innerHTML = "DRAW";
      document.querySelector(`#r-c`).innerHTML = "DRAW";
    }
    console.log(marks);
  }
}
