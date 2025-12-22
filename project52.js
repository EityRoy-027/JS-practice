let sub=document.querySelector('#sub');
let st=document.querySelector('#st');
let st2=document.querySelector('#st2');
let acp=document.querySelector('#acp');
let timeStart=30;
let timer;
let timereset=30;


timer=setInterval(function(){
if((timeStart>=0)&&(timeStart<=30)){
console.log(timeStart);
timeStart=timeStart-1;
st2.textContent=timeStart;
}

if(timeStart<=0){
    clearInterval(timer);
    timer=null;
    acp.style.color='red';
}

},1000)  




document.addEventListener('mousemove',function(){
clearInterval(timer)
 timer=null;
 timeStart=30;
 acp.textContent='Active';

st2.textContent=timereset;
timer=setInterval(function(){
if((timeStart>=0)&&(timeStart<=30)){
console.log(timeStart);
timeStart=timeStart-1;
st2.textContent=timeStart;
}


if(timeStart<=10){
acp.textContent='Warning:About to logout!';
acp.style.color='red';
console.log('h');
}

if(timeStart<=0){
    clearInterval(timer);
    timer=null;
   let newdiv=document.createElement('div');
   let h=document.createElement('h');
   let p=document.createElement('p');
   let newdiv2=document.createElement('div');
   let p1=document.createElement('p');
   let p2=document.createElement('p');

   h.textContent='Session Expired';
    p.textContent='Session Locked';
    p1.textContent='Session Expired.'
    p2.textContent='Please login again.'
    
    newdiv.style.backgroundColor='white';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='column';
    newdiv.style.gap='10px';

    newdiv2.style.backgroundColor='red';
    newdiv2.style.display='flex';
    newdiv2.style.flexDirection='column';
    newdiv.style.padding='15px';

    p1.style.color='white';
    p2.style.color='white';

    newdiv2.appendChild(p1);
     newdiv2.appendChild(p2);
     newdiv.appendChild(newdiv2);
     acp.innerHTML=newdiv.innerHTML;

   
   



}
},1000)  

if(timeStart<=10){
acp.textContent='Warning:About to logout!';
}

})


