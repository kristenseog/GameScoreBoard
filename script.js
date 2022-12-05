//let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

//let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


let periodEl = document.getElementById("periodBtn")
let period = 0
function increasePeriodBtnOne() {
    period += 1
    periodEl.textContent = period
}
let resetEl = document.getElementById("periodResetBtn")
function periodReset() {
    periodEl.textContent = 0;
    period = 0;
}

const timeDisplay = document.querySelector("#timeDisplay"); //id timeDisplay 00:00:00
const startBtn = document.querySelector("#startBtn"); //id startBtn Start
const pauseBtn = document.querySelector("#pauseBtn"); //id pauseBtn Pause
const resetBtn = document.querySelector("#resetBtn"); //id resetBtn Reset

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

// https://www.youtube.com/watch?v=8Nsb9cjmOVA





















/*
const tens = 00;
const seconds = 00;
const minutes = 00;

const outputTens= document.getElementById("tens");
const outputSeconds = document.getElementById("second");
const outputMinutes = document.getElementById("minute");

const buttonStart = document.getElementById("startBtn");
const buttonPause = document.getElementById("pauseBtn");
const buttonReset = document.getElementById("resetBtn");


const Interval;

buttonStart.addEventListener('click', () => ){
    clearInterval(Interval);
    Interval = setInterval(StartTimer, 10); //milliseconds 10 = 0.01 second
}

buttonPause.addEventListener('click', () => ){
    
}


buttonReset.addEventListener('click', () => ){
    
}

function StartTimer() {
    tens++;
    if(tens <=9) {
        outputTens.innerHTML = "0" + tens;
    }
    
    if(tens > 9) {
        outputTens.innerHTML = tens;
    }
 
    if(tens > 99) {
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + 0;
    }

    if(seconds > 9) {
        outputSeconds.innerHTML = seconds;
    }

    if(seconds > 99) {
        minutes++;
        outputMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        outputSeconds.innerHTML =  "0" + 0;
        tens = 0;
        outputTens.innerHTML = "0" + 0;
    }

}*/
