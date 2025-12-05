let happy=document.querySelector('#happy');
let sad=document.querySelector('#sad');
let glass=document.querySelector('#glass');
let angry=document.querySelector('#angry');
let sur=document.querySelector('#sur');
let sleep=document.querySelector('#sleep');
let slide=document.querySelector('#slide');
let box=document.querySelector('#box');

happy.addEventListener('click',function(){
    let happys=document.createElement('span');
    happys.textContent+='😊';
    happys.style.transform=`rotate(${Math.random()*30}deg)`;
    box.appendChild(happy);
  
})
sad.addEventListener('click',function(){
    let sads=document.createElement('span');
    box.textContent+='🥲';
    sads.style.transform=`rotate(${Math.random()*30}deg)`
  
})
sur.addEventListener('click',function(){
    let surs=document.createElement('span');
    box.textContent+='🤩';
    surs.style.transform=`rotate(${Math.random()*30}deg)`
  
})
glass.addEventListener('click',function(){
    let glasss=document.createElement('span');
    box.textContent+='😎';
    glasss.style.transform=`rotate(${Math.random()*30}deg)`
  
})
angry.addEventListener('click',function(){
    let angrys=document.createElement('span');
    box.textContent+='😡';
    angrys.style.transform=`rotate(${Math.random()*30}deg)`
  
})
sleep.addEventListener('click',function(){
    let sleeps=document.createElement('span');
    box.textContent+='😴';
    sleeps.style.transform=`rotate(${Math.random()*30}deg)`
  
})

slide.addEventListener('input',function(){
    box.style.fontSize= slide.value+'px';
    
})

