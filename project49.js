let inpu=document.querySelector('#inpu');
let h=document.querySelector('#h');
let m=document.querySelector('#m');
let s=document.querySelector('#s');
let start=document.querySelector('#start');
let pause=document.querySelector('#pause');
let reset=document.querySelector('#reset');

let timeInterval;
let timesec;
let timer;
let timereset;




inpu.addEventListener('input',function(){
 timesec=parseInt(inpu.value)*60*60;
 timereset=timesec;
 
})

start.addEventListener('click',function(){
     timer= setInterval(function() {
     console.log(timesec);
    timesec = timesec - 1;
    h.textContent=Math.floor(timesec/3600);
    m.textContent=Math.floor((timesec%3600)/60);
    s.textContent=timesec%60;
 
 
},1000)})

pause.addEventListener('click',function(){
clearInterval(timer);
timer=null;
})

reset.addEventListener('click',function(){
clearInterval(timer);
timer=null;
timesec=timereset;
 h.textContent=Math.floor(timesec/3600);
 m.textContent=Math.floor((timesec%3600)/60);
 s.textContent=timesec%60;
})