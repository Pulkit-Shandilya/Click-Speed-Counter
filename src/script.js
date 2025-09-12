
// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

            let isOriginal = true;
            let count = 0;
            let start = document.getElementById('clicker')
            let timer = document.getElementById('timer');
            let reset = document.getElementById('reset');
            let timeEnter = document.getElementById('time-enter');


            

            reset.addEventListener('click', function () {                
                count = 0;
                isOriginal = true;
                document.getElementById("myHeading").innerHTML = "Click Counter";
                resetStopwatch();
                document.getElementById('clicker').style.display = 'inline-block';
                document.getElementById('clicker').disabled = false;
                document.getElementById('clicker').style.backgroundColor = '';
            });
        start.addEventListener('click', function () {



            console.log(isOriginal);
            if (isOriginal) {
                isOriginal = false;  
                console.log(isOriginal);   
                console.log("Button clicked1");
                document.getElementById("myHeading").innerHTML = ++count;
            } else {
                console.log("Button clicked2");
                document.getElementById("myHeading").innerHTML = ++count;
            }
});

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function updateDisplay() {
    const currentTime = Date.now() - startTime + elapsedTime;
    const seconds = (currentTime / 1000).toFixed(3);
    document.getElementById("timer").textContent = seconds;
    if (seconds >= parseFloat(timeEnter.value) && timeEnter.value !== "") {
        stopStopwatch();
        document.getElementById('clicker').disabled = true;
        document.getElementById("myHeading").innerHTML = "Time's up! Your score: " + count + " Your CPS is " + (count / parseFloat(timeEnter.value)).toFixed(2);
        document.getElementById('clicker').style.backgroundColor = 'grey';
    }
}

function startStopwatch() {
    if (timerInterval) return; // Prevent multiple intervals
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);

}

function stopStopwatch() {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime += Date.now() - startTime;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById("timer").textContent = "timer : 0.000";
}

function handleClick() {
    if (!timerInterval) {
        startStopwatch();
    } 

}

document.getElementById("clicker").addEventListener("click", function() {

    if (timeEnter.value === "" || isNaN(timeEnter.value) || parseFloat(timeEnter.value) <= 0) {
            document.getElementById("myHeading").innerHTML = "Please enter a valid time";
            document.getElementById('clicker').style.backgroundColor = 'grey';
            } else {
                document.getElementById('clicker').disabled = false;
                document.getElementById('clicker').style.backgroundColor = '';
                handleClick();
            }
});



