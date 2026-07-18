let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let idx = [];
let h2 = document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"];
let gbtn = document.querySelectorAll(".btn");

document.addEventListener('keypress', () => {
    started = true;
    levelUp();
});
function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // random color generate
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashBtn(randomBtn);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}
function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
            console.log("same value");
        }
    }
    else {
        console.log("game over");
        h2.innerText = `Your Score is ${level} press any key to start`;
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    let userBtnColor = btn.getAttribute("id");
    userSeq.push(userBtnColor);
    checkAns(userSeq.length - 1);
}
for (btn of gbtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}