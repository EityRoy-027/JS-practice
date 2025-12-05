let button=document.querySelector('button');
let count1=document.querySelector('#count1');
let count=0;

button.addEventListener('click',function(){
  

setInterval(function() {
 count1.textContent=count;
 count++;
}, 500);

count1.style.display='flex';
count1.style.justifyContent='center';
count1.style.alignItems='center';
count1.style.textAlign='center';
count1.style.fontSize='3em';
count1.style.fontWeight='bold';
count1.style.color='red';


})