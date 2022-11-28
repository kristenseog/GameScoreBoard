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
