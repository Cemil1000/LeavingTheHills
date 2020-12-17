let tMinutes = document.getElementById('travailMinutes');
let tSeconds = document.getElementById('travailSeconds');
let pMinutes = document.getElementById('pauseMinutes');
let pSeconds = document.getElementById('pauseSeconds');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let startTimer;

//--------------------Event Boutton--------------------//
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    }
})

reset.addEventListener('click', function(){
    tMinutes.innerText = 25;
    tSeconds.innerText = "00";

    pMinutes.innerText = 5;
    pSeconds.innerText = "00";

    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

//--------------------All fonction for timer--------------------//
function timer(){
    if(tSeconds.innerText != 0){
        tSeconds.innerText--;
    } 
    else if(tMinutes.innerText != 0 && tSeconds.innerText == 0){
        tSeconds.innerText = 59;
        tMinutes.innerText--;
    } 

    else if(tMinutes.innerText == 0 && tSeconds.innerText == 0){
        if(pSeconds.innerText != 0){
            pSeconds.innerText--;
        } 
        else if(pMinutes.innerText != 0 && pSeconds.innerText == 0){
            pSeconds.innerText = 59;
            pMinutes.innerText--;
        }
    }

    else if(tMinutes.innerText == 0 && tSeconds.innerText == 0 && pMinutes.innerText == 0 && pSeconds.innerText == 0){
        tMinutes.innerText = 25;
        tSeconds.innerText = "00";

        pMinutes.innerText = 5;
        pSeconds.innerText = "00";
    }
}

function stopInterval(){
    clearInterval(startTimer);
}