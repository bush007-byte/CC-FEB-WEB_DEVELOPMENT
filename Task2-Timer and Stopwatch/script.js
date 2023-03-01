const addTrailingZero = (num) => {
    return num < 10 ? "0" + num : num;
};



// Stopwatch

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}




//Timer

let time = 0,
    timerHours=0,
    timerMinutes=0,
    timerSeconds=0,
    timerMiliseconds = 0,
    timerInterval;

const getTime = () => {
    time = prompt("Enter the time in minutes");
    time = time* 60;
    setTime();
};

const setTime = () =>{
    timerHours = Math.floor(time / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);
    timerMiliseconds = Math.floor((time * 1000)%60);

    $("#timer-hour").html(addTrailingZero(timerHours));
    $("#timer-min").html(addTrailingZero(timerMinutes));
    $("#timer-sec").html(addTrailingZero(timerSeconds));
    $("#timer-ms").html(addTrailingZero(timerMiliseconds));
};

const timer = () => {

    timerMiliseconds--;

    if(timerMiliseconds == -1){
        timerMiliseconds = 99;
        timerSeconds--;
    }
    if(timerSeconds == -1){
        timerSeconds =59;
        timerMinutes--;
    }
    if(timerMinutes == -1){
        timerMinutes = 59;
        timerHours--;
    }

    $("#timer-hour").html(addTrailingZero(timerHours));
    $("#timer-min").html(addTrailingZero(timerMinutes));
    $("#timer-sec").html(addTrailingZero(timerSeconds));
    $("#timer-ms").html(addTrailingZero(timerMiliseconds));

    timeUp();
};

const startTimer = ()=>{
    if(timerHours==0 && timerMinutes == 0 && timerSeconds==0 && timerMiliseconds==0){
        getTime();
    }else {
        timerInterval = setInterval(timer,10);
        $(".start-timer").hide();
        $(".stop-timer").show();
    }
};


const stopTimer=()=>{
    clearInterval(timerInterval);
    $(".start-timer").show();
    $(".stop-timer").hide();

};

const resetTimer = ()=>{
    stopTimer();
    time=0;
    setTime();
};

const timeUp = ()=>{
    if(timeHours == 0 &&
        timerMinutes == 0 &&
        timerSeconds == 0 &&
        timerMiliseconds == 0 
        ){
            resetTimer();
            alert("Time's up");
            
        }
};

$(".start-timer").click(function () {
    startTimer();
});

$(".stop-timer").click(function () {
    stopTimer();
});

$(".reset-timer").click(function () {
    resetTimer();
});
