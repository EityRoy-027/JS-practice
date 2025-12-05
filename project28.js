let box=document.querySelector('#box');
let span=document.querySelector('span');

let buttonone=document.querySelector('#buttonone');
count=1;

buttonone.addEventListener('click',function(){
    
     setInterval(function(){
       if(count>box.style.width){
        
        span.style.marginTop='20px';
        span.style.marginLeft='0px';

    }  
      span.style.marginLeft=count+'px';
      count+=5;  
      
      console.log(box.style.width);
    },100);
   
})