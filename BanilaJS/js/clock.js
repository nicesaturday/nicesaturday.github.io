const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = 
    (`${hours}:${minutes}:${Seconds}`);
}


getClock();
setInterval(getClock, 1000);




const today = new Date();
const xMas = new Date("2023 12 25 00:00:00");
const dDay = xMas-today;

const dDayDate = String(Math.floor(dDay/(1000*60*60*24))).padStart(3,"0");
const dDayH = String(Math.floor((dDay/(1000*60*60)%24))).padStart(2,"0");
const dDayM = String(Math.floor((dDay/(1000*60))%60)).padStart(2,"0");
const dDayS = String(Math.floor(dDay/(1000)%60)).padStart(2,"0");


const a = `${dDayDate}y ${dDayH}h ${dDayM}m ${dDayS}s`;


