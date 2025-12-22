
let slide=document.querySelector('#slide');
let st=document.querySelector('#st');
let pt=document.querySelector('#pt');
let b3=document.querySelector('#b3');
let b4=document.querySelector('#b4');
let b5=document.querySelector('#b5');
timeStart=5;
let timer;

timer=setInterval(function(){
console.log(timeStart);
timeStart=timeStart-1;

if(timeStart>=0){
st.textContent=timeStart+'s';
b4.addEventListener('click',function(){
pt.textContent='Good';
pt.style.fontSize='1.8em';
pt.style.color='brown';
})}

if(timeStart<0){
    clearInterval(timer);
    timer=null;
    timeStart=0;
    pt.textContent='Try Nexttime!';
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
    }
   
   slide.style.width=timeStart/5*100+'%';
   },1000);






