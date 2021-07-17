const tempo = document.querySelectorAll(".tempo");
const btnStartPause = document.querySelectorAll(".start");
const btnReset = document.querySelectorAll(".reset");

let workTime = 24
let breakTime = 4
let seconds = 60;
let cron;

btnStartPause[0].onclick = () => toggleStartPause(workTime);
btnStartPause[1].onclick = () => toggleStartPause(breakTime);

btnReset[0].onclick = () => reset(workTime);
btnReset[1].onclick = () => reset(breakTime);

const estado = {
    estadoButton: true,
}



function start(value) {
    cron = setInterval(() => time(value), 1000);
    console.log(value)
}
function pause() {
    clearInterval(cron);
}
function reset(value) {
    
    clearInterval(cron);

    if (value > 4) {
        workTime = 24;
        seconds = 60;
        
        tempo[0].innerHTML = `25:00`
        
        //reseta o estado do button
        estado.estadoButtonWork = true;
        btnStartPause[0].classList = "start";
        btnStartPause[0].innerText = "Start";
        
    }
    
    if (value <= 4) {
        breakTime = 4;
        seconds = 60;
        
        //reseta o estado do button
        estado.estadoButtonWork = true;
        btnStartPause[1].classList = "start";
        btnStartPause[1].innerText = "Start";
        
        tempo[1].innerText = `05:00`
    }
        
}
function time(value) {
    seconds--;

    if(value > 4) {
        if (seconds == 0) {
            value--;
            if (value == 0) {
                return;
            }
            seconds = 60;
        }

        tempo[0].innerText = `${("0" + value).slice(-2)}:${("0" + seconds).slice(-2)}`
    }

    if (value <=4) {
        if (seconds == 0) {
            value--;
            if (value == 0) {
                return;
            }
            seconds = 60;
        }

        tempo[1].innerText = `${("0" + value).slice(-2)}:${("0" + seconds).slice(-2)}`
    }

    

}

function toggleStartPause(value) {
    estado.estadoButton = !estado.estadoButton;
    if (!estado.estadoButton) {
        if (value > 4){
            btnStartPause[0].classList = "stop";
            btnStartPause[0].innerText = "Pause";

        }else if (value <= 4) {
            btnStartPause[1].classList = "stop";
            btnStartPause[1].innerText = "Pause";
        }
        start(value);
    } else {
        if (value > 4){
            btnStartPause[0].classList = "start";
            btnStartPause[0].innerText = "Start";

        }else if (value <= 4) {
            btnStartPause[1].classList = "start";
            btnStartPause[1].innerText = "Start";
        }
        pause(value);
    }
}

