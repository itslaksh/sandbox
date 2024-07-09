// CLOCK + TIMER + STOPWATCH PROGRAM

let CurrentFormat = '24hrs';

function hour12() {
    document.getElementById("24hrs").classList.remove('active');
    triggerAnimation();
    document.getElementById("12hrs").classList.add('active');
    CurrentFormat = '12hrs';
    UpdateClock();
}

function hour24() {
    document.getElementById("12hrs").classList.remove('active');
    triggerAnimation();
    document.getElementById("24hrs").classList.add('active');
    CurrentFormat = '24hrs';
    UpdateClock();
}

function UpdateClock() {
    const clock1 = document.getElementById('Bigclk'); // First clock
    const clock2 = document.getElementById('Smolclk');  // Second clock


    if (CurrentFormat === '12hrs') {
        const Cur_time = new Date();
        let hours = Cur_time.getHours();
        const AMPM = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        const minutes = Cur_time.getMinutes().toString().padStart(2, 0);
        const seconds = Cur_time.getSeconds().toString().padStart(2, 0);
        const TimeString = `${hours}:${minutes}:${seconds} ${AMPM}`;
        clock1.textContent = TimeString;
        clock2.textContent = TimeString;
    }
    else if (CurrentFormat === '24hrs') {
        const Cur_time = new Date();
        const hours = Cur_time.getHours().toString().padStart(2, 0);
        const minutes = Cur_time.getMinutes().toString().padStart(2, 0);
        const seconds = Cur_time.getSeconds().toString().padStart(2, 0);
        const TimeString = `${hours}:${minutes}:${seconds}`;
        clock1.textContent = TimeString;
        clock2.textContent = TimeString;
    }

}


function triggerAnimation() {

    const elementIDs = ["Bigclk", "Smolclk"]

    elementIDs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("pop");
            setTimeout(() => {
                element.classList.add("pop");
            }, 10);
        }
    });
}


UpdateClock();

setInterval(function () {
    UpdateClock();
}, 1000);


// --------------------------------TIMER OPEN--------------------------------

function OpenTimer() {
    const timerID = document.getElementById("TimerID");
    const timerBtns = document.getElementById("timer-btns");
    const backBtn = document.getElementById("backID");
    const shrunkClk = document.getElementById('shrunkID');
    const stpwtchBtn = document.getElementById('StopWatchID');


    const BigclkID = document.getElementById("ClockID");
    const ID24 = document.getElementById("24hrs");
    const ID12 = document.getElementById("12hrs");


    stpwtchBtn.classList.remove('active');
    BigclkID.classList.remove('active');


    ID24.classList.remove('active');
    ID12.classList.remove('active');



    setTimeout(() => {
        shrunkClk.classList.add('active');
        shrunkClk.classList.add('appear');
        timerID.classList.remove('Timer-box');
        timerID.classList.add('Expand');

    }, 150);


    setTimeout(() => {
        timerBtns.classList.add('active');
        backBtn.classList.add('active');
    }, 400);
}


// -----------------------------STOPWATCH OPEN-----------------------------

function OpenStopWatch() {
    const stopwatchID = document.getElementById("StopWatchID");
    const stopwatchBtns = document.getElementById("stopwatch-btns");
    const backBtn = document.getElementById("backID");
    const shrunkClk = document.getElementById('shrunkID');
    const timerBtn = document.getElementById('TimerID');

    const BigclkID = document.getElementById("ClockID");
    const ID24 = document.getElementById("24hrs");
    const ID12 = document.getElementById("12hrs");

    timerBtn.classList.remove('active');
    BigclkID.classList.remove('active');


    ID24.classList.remove('active');
    ID12.classList.remove('active');



    setTimeout(() => {
        shrunkClk.classList.add('active');
        shrunkClk.classList.add('appear');
        stopwatchID.classList.remove('StopWatch-box');
        stopwatchID.classList.add('Expand');

    }, 150);


    setTimeout(() => {
        stopwatchBtns.classList.add('active');
        backBtn.classList.add('active');
    }, 400);
}

// --------------------------------GO BACK MAIN-SCREEN--------------------------------

function goBack() {
    const timerID = document.getElementById("TimerID");
    const timerBtns = document.getElementById("timer-btns");
    const backBtn = document.getElementById("backID");
    const shrunkClk = document.getElementById('shrunkID');
    const stopWID = document.getElementById('StopWatchID');
    const stopWBtns = document.getElementById('stopwatch-btns')
    const BigclkID = document.getElementById("ClockID");
    const ID24 = document.getElementById("24hrs");
    const ID12 = document.getElementById("12hrs");



    shrunkClk.classList.remove('appear');

    stopWID.classList.add('active');
    shrunkClk.classList.remove('active');
    backBtn.classList.remove('active');
    ID24.classList.add('active');
    ID12.classList.remove('active');
    BigclkID.classList.add('active');

    timerID.classList.remove('Expand')
    timerID.classList.add('Timer-box');
    timerBtns.classList.remove('active');

    stopWID.classList.remove('Expand');
    stopWID.classList.add('StopWatch-box');
    stopWBtns.classList.remove('active');
    timerID.classList.add('active');
}

// -----------------------------STOPWATCH PROGRAM-----------------------------

const SWdisplay = document.getElementById('StopWatch');
let SWtimer = null;
let SWstartTime = 0;
let SWelapsedTime = 0;
let isSWRunning = false;

function SWstart() {
    if (!isSWRunning) {
        SWstartTime = Date.now() - SWelapsedTime;
        SWtimer = setInterval(SWupdate, 10);
        isSWRunning = true;
    }


}

function SWstop() {
    if (isSWRunning) {
        clearInterval(SWtimer);
        SWelapsedTime = Date.now() - SWstartTime;
        isSWRunning = false;
    }

}

function SWreset() {
    clearInterval(SWtimer);
    SWstartTime = 0;
    SWelapsedTime = 0;
    isSWRunning = false;
    SWdisplay.textContent = "00:00:00:00";

}

function SWupdate() {

    const SWcurrTime = Date.now();
    SWelapsedTime = SWcurrTime - SWstartTime;
    let SWhours = Math.floor(SWelapsedTime / (1000 * 60 * 60));
    let SWminutes = Math.floor(SWelapsedTime / (1000 * 60) % 60);
    let SWseconds = Math.floor(SWelapsedTime / 1000 % 60);
    let SWmiliseconds = Math.floor(SWelapsedTime % 1000 / 10);

    SWhours = String(SWhours).padStart(2, "0");
    SWminutes = String(SWminutes).padStart(2, "0");
    SWseconds = String(SWseconds).padStart(2, "0");
    SWmiliseconds = String(SWmiliseconds).padStart(2, "0");

    SWdisplay.textContent = `${SWhours}:${SWminutes}:${SWseconds}:${SWmiliseconds}`;

}

// ----------------------------------------TIMER PROGRAM----------------------------------------


function SetTimer() {
    document.getElementById('Setting-box').classList.add('active');
    document.getElementById('cover').classList.add('active');
}


function closeSetting() {
    document.getElementById('Setting-box').classList.remove('active');
    document.getElementById('cover').classList.remove('active');


}

let countdownInterval;
let endTime;
let remainingTime = 0;

const TIdisplay = document.getElementById('Timer');
const alarmSound = document.getElementById('alarmSound');

function TIstart() {
    const hoursInput = parseInt(document.getElementById('hoursInput').value, 10) || 0;
    const minutesInput = parseInt(document.getElementById('minutesInput').value, 10) || 0;
    const secondsInput = parseInt(document.getElementById('secondsInput').value, 10) || 0;

    const totalMilliseconds = (hoursInput * 3600000) + (minutesInput * 60000) + (secondsInput * 1000);

    if (remainingTime > 0) {
        endTime = Date.now() + remainingTime;
    } else {
        endTime = Date.now() + totalMilliseconds;
    }

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(updateCountdown, 100);
}

function TIStop() {
    clearInterval(countdownInterval);
    remainingTime = endTime - Date.now();
}

function TIreset() {
    clearInterval(countdownInterval);
    TIdisplay.textContent = "00:00:00";
    document.getElementById('hoursInput').value = "";
    document.getElementById('minutesInput').value = "";
    document.getElementById('secondsInput').value = "";
    remainingTime = 0;
}

function updateCountdown() {
    const now = Date.now();

    if (now >= endTime) {
        clearInterval(countdownInterval);
        TIdisplay.textContent = "00:00:00";
        remainingTime = 0;
        alarmSound.play();
        return;
    }

    remainingTime = endTime - now;

    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    TIdisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function handleDoneClick() {
    closeSetting();
    const hoursInput = parseInt(document.getElementById('hoursInput').value, 10) || 0;
    const minutesInput = parseInt(document.getElementById('minutesInput').value, 10) || 0;
    const secondsInput = parseInt(document.getElementById('secondsInput').value, 10) || 0;

    const hours = String(hoursInput).padStart(2, "0");
    const minutes = String(minutesInput).padStart(2, "0");
    const seconds = String(secondsInput).padStart(2, "0");

    TIdisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
