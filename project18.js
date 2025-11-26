let inputone=document.querySelector('#inputone');
let button=document.querySelector('button');
let result=document.querySelector('#result');


button.addEventListener('click',function(){
 result.textContent=Math.floor(Math.random()*(10-0));

 if(inputone.value==result.textContent){
    result.textContent='alert:match!'
 }

 else if(inputone.value!=result.textContent){
    result.textContent='doesnt match !'
 }
})