const  Eldays  = document.getElementById('days');
const  Elhours = document.getElementById('hours'); 
const  Elmins  = document.getElementById('mins');
const  ElsecS = document.getElementById('seconds');




const newYears = "1 Jan 2025";


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%60;
    const Sec = Math.floor(seconds)%60;
    // console.log(days,hours,minutes,Sec);
    Eldays.innerHTML = days;
    Elhours.innerHTML = hours;
    Elmins.innerHTML = minutes;
    ElsecS.innerHTML = Sec;
}

countdown();
setInterval(countdown, 1000)