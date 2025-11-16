let reddiv=document.querySelector('#reddiv2');
let bluediv=document.querySelector('#bluediv2');
let orangediv=document.querySelector('#orangediv2');
let match=document.querySelector('#match');
let array=['red','blue','orange'];
let tracker=0;



document.body.addEventListener('click',function(){

    
reddiv.style.backgroundColor=array[Math.floor(Math.random()*array.length)];

bluediv.style.backgroundColor=array[Math.floor(Math.random()*array.length)]

orangediv.style.backgroundColor=array[Math.floor(Math.random()*array.length)]

if(reddiv.style.backgroundColor=='red'){
tracker++;
}
if(bluediv.style.backgroundColor=='blue'){
tracker++;
}
if(orangediv.style.backgroundColor=='orange'){
tracker++;
}

match.textContent=tracker/3*100;
tracker=0;


})



