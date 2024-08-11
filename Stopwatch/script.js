// initializing the variables
let min = 0;
let sec = 0;
let startTime, elapsedTime = 0, intervalId;


const displayTime = document.getElementById('time');

displayTime.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

// get elements for each function
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);


// function to start timer
function startTimer() {
    if (!startTime){
        startTime = Date.now();
        intervalId = setInterval(updateTimer, 1000);
    }
    startBtn.disabled = true; // sanity check to keep buttons functioning properly
    stopBtn.disabled = false;
}


// function to keep the timer running
function updateTimer() {
    const totalSeconds = (elapsedTime + Date.now() - startTime) / 1000;
    min = Math.floor(totalSeconds/60);
    sec = Math.floor(totalSeconds%60);
    displayTime.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

stopBtn.addEventListener('click', stopTimer);


// function to stop the timer
function stopTimer(){
    if (startTime){
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime; // to keep track of time elapsed until now
        startTime = null;
    }
    stopBtn.disabled = true;
    startBtn.disabled = false;
}

resetBtn.addEventListener('click', resetTimer);


// function to reset the timer
function resetTimer() {
    clearInterval(intervalId);
    startTime = null;
    elapsedTime = 0;
    min = 0;
    sec = 0;
    displayTime.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    startBtn.disabled = false;
    stopBtn.disabled = false;
}
