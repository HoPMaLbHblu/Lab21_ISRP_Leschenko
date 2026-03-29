let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const time = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    time.textContent = `${h}:${m}:${s}`;
}

startBtn.onclick = function () {
    if (timer !== null) return;
    timer = setInterval(updateTime, 1000);
};

stopBtn.onclick = function () {
    clearInterval(timer);
    timer = null;
};

resetBtn.onclick = function () {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    time.textContent = "00:00:00";
};
