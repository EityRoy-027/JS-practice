let circle1=document.querySelector('#circle1');
let circle2=document.querySelector('#circle2');
let circle3=document.querySelector('#circle3');
let red=document.querySelector('#red');
let yellow=document.querySelector('#yellow');
let green=document.querySelector('#green');
let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let count=1;

red.addEventListener('click',function(){
circle1.style.backgroundColor='red';
circle2.style.backgroundColor= 'rgb(10, 10, 10)';
circle3.style.backgroundColor=' rgb(10, 10, 10)';

})
yellow.addEventListener('click',function(){
circle2.style.backgroundColor='yellow';
circle1.style.backgroundColor=' rgb(10, 10, 10)';
circle3.style.backgroundColor=' rgb(10, 10, 10)';
})
green.addEventListener('click',function(){
circle3.style.backgroundColor='green';
circle2.style.backgroundColor=' rgb(10, 10, 10)';
circle1.style.backgroundColor=' rgb(10, 10, 10)';
})

start.addEventListener('click',function(){
    
    setInterval(function(){
        if(count==1){
    circle1.style.backgroundColor='red';
    circle2.style.backgroundColor= 'rgb(10, 10, 10)';
    circle3.style.backgroundColor=' rgb(10, 10, 10)'; 
    count++;
    }
    else if(count==2){
    
    circle2.style.backgroundColor='yellow';
    circle1.style.backgroundColor= 'rgb(10, 10, 10)';
    circle3.style.backgroundColor=' rgb(10, 10, 10)';
    count++;
    }
     
    else if(count==3){
     
    circle3.style.backgroundColor='green';
    circle1.style.backgroundColor= 'rgb(10, 10, 10)';
    circle2.style.backgroundColor=' rgb(10, 10, 10)';
    count=1;
     
}
console.log(count);
},500)})

stop.addEventListener('click',function(){
    count=0;
})