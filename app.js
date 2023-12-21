const newYear = "1/1/2024";

const daysEl = document.querySelector(".day");
const hoursEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondsEl = document.querySelector(".seconds")


let countdownInterval; // Declare countdownInterval variable


function timeCountDown(){
    const nowDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - nowDate) / 1000;

    const days = Math.floor(totalSeconds  / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.textContent = formatTime(days);
    hoursEl.textContent = formatTime(hours);
    minuteEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);

// Check if it's New Year's Eve
if (totalSeconds <= 0) {
    fireworks.start(); // Start fireworks animation
    clearInterval(countdownInterval); // Stop the countdown
    }
}


function formatTime(time) {
    return time >= 10 ? `${time}` : `0${time}`;
  }
  
timeCountDown()
setInterval(timeCountDown, 1000);



//for redDot
const redDot = document.getElementById('redDot');

function toggleRedDot() {
    redDot.style.display = (redDot.style.display === 'none') ? 'block' : 'none';
}

// Appel à la fonction toutes les secondes (1000 millisecondes)
setInterval(toggleRedDot, 1000);



// Create a new instance of the Fireworks class
const fireworks = new Fireworks({
    autoresize: true,
    boundaries: {
        visible: false,
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    speed: 5,
    explosion: 5,
    gravity: 1,
    opacity: 0.5,
    particles: 50,
    friction: 0.95,
    rocketsPoint: 50,
    acceleration: 1.05,
    hue: { min: 0, max: 360 },
});
