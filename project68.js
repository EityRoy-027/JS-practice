let design=document.querySelector('#design');
let code=document.querySelector('#code');
let meet=document.querySelector('#meet');
let test=document.querySelector('#test');
let morn=document.querySelector('#morn');
let after=document.querySelector('#after');
let even=document.querySelector('#even');

let tasks=document.querySelectorAll('.tasks');
let time=document.querySelectorAll('.time');

let mop2=document.querySelectorAll('#mop2');
let afp2=document.querySelectorAll('#afp2');
let evp2=document.querySelectorAll('#evp2');

let designslider=document.querySelector('#designslider');
let designslide=document.querySelector('#designslide');
let codslider=document.querySelector('#codslider');
let codslide=document.querySelector('#codslide');
let meetslider=document.querySelector('#meetslider');
let meetslide=document.querySelector('#meetslide');
let testslider=document.querySelector('#testslider');
let testslide=document.querySelector('#testslide');

let timer=0;


for(i=0;i<tasks.length;i++){
    tasks[i].addEventListener('dragstart',function(routine){
   let selected=routine.target;
  
 
    morn.addEventListener('dragover',function(day){
        day.preventDefault();
    })
    morn.addEventListener('drop',function(){
        if(!selected){
            return;
        }

        console.log(designslider);
       if(selected.id==='design'){
        designslider.style.display='block';

        let timestart=setInterval(function(){
            console.log(timer);
        designslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }

       else if(selected.id==='code'){
        codslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        codslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }

       else if(selected.id==='meet'){
        meetslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        meetslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='test'){
        testslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        testslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
        morn.appendChild(selected);
     selected=null;
    })
   
   after.addEventListener('dragover',function(day){
        day.preventDefault();
    })
    after.addEventListener('drop',function(){
        if(!selected){
            return;
        }
        console.log(selected);
        if(selected.id==='design'){
        designslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        designslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='code'){
        codslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        codslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='meet'){
        meetslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        meetslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='test'){
        testslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        testslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
      after.appendChild(selected);

      
     selected=null;
    })


    even.addEventListener('dragover',function(day){
        day.preventDefault();
    })
    even.addEventListener('drop',function(){
        if(!selected){
            return;
        }
        console.log(selected);
        if(selected.id==='design'){
        designslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        designslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='code'){
        codslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        codslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='meet'){
        meetslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        meetslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
       else if(selected.id==='test'){
        testslider.style.display='block';
        let timestart=setInterval(function(){
            console.log(timer);
        testslide.style.width=timer +'%'; 
        timer++; 

        if(timer==100){
            clearInterval(timestart);
            timestart=null;
        }
         },500)
       }
      even.appendChild(selected);
      
    
    selected=null;
    })

    })
}


