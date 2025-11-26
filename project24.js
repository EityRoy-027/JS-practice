let buttons=document.querySelector('button');
let circle1=document.querySelector('#circle');
let circle2=document.querySelector('#circle2');
count=0;

buttons.addEventListener('click',function(){
    count++;
    circle2.style.width=count/5*100+'%';
})