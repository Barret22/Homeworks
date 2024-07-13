

let countdownTime = 85;
let timeLeft = countdownTime;
let timerInterval;
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "00:00";
        return;
    }
    updateTimerDisplay(timeLeft);
    timeLeft--;
}
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(countdown, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}
updateTimerDisplay(timeLeft);
