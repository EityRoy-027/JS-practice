let box=document.querySelector('#box');
let boxp=document.querySelector('#boxp');
let boxp1=document.querySelector('#boxp1');
let boxp2=document.querySelector('#boxp2');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');
let slide=document.querySelector('#slide');
let start=document.querySelector('#start');
let pause=document.querySelector('#pause');
let reset=document.querySelector('#reset');
let count=1;
let timeStart=5;
let timer;
let timereset=5;

next.addEventListener('click',function(){
if(count==1){
boxp1.style.display='block';
boxp2.style.display='none';
boxp.style.display='none';
box.style.backgroundColor='cadetblue'; 
count++;

}
else if(count==2){
boxp2.style.display='block';
boxp.style.display='none';
boxp1.style.display='none';
box.style.backgroundColor='antiquewhite'; 

}
timeStart=5;
st.textContent='0'+timeStart;
slide.style.width='100%';

})

prev.addEventListener('click', function(){
    if(count==2){
        boxp1.style.display='block';
        boxp.style.display='none';
        boxp2.style.display='none';
        box.style.backgroundColor='cadetblue';
        count--; 
    }
    else if(count==1){
        boxp.style.display='block';
        boxp1.style.display='none';
        boxp2.style.display='none';
        box.style.backgroundColor='antiquewhite';
        count=2;  
    }
    timeStart=5;
    st.textContent='0'+timeStart;
    slide.style.width='100%';
})

start.addEventListener('click',function(){
if(timeStart>0){
timer=setInterval(function(){
console.log(timeStart);
timeStart=timeStart-1;
st.textContent='0'+timeStart;

if(timeStart<=0){
    clearInterval(timer);
    timer=null;
    timeStart=0;
}

slide.style.width=timeStart/5*100+'%';
},1000)}
})
  
pause.addEventListener('click',function(){
    clearInterval(timer);
    timer=null;
})

reset.addEventListener('click',function(){
    clearInterval(timer);
    timer=null;
    timeStart=timereset;
    st.textContent='0'+timeStart;
    slide.style.width='100%';
})
