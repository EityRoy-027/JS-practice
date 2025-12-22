let firstq=document.querySelector('#firstq');
let secq=document.querySelector('#secq');
let five=document.querySelector('#five');
let b8=document.querySelector('#b8');
let b10=document.querySelector('#b10');
let b12=document.querySelector('#b10');
let sp=document.querySelector('#sp');
let sp2=document.querySelector('#sp2');
let spc=document.querySelector('#spc');
let next=document.querySelector('#nb');
let capital=document.querySelector('#capital');
let paris=document.querySelector('#paris');
let rome=document.querySelector('#rome');
let dhaka=document.querySelector('#dhaka');
let score=document.querySelector('#scoreh');
let timeStart = 10;

next.addEventListener('click',function(){
   secq.style.display='block';
   firstq.style.display='none'; 
   timeStart = 10;
})

b8.addEventListener('click',function(){
    spc.textContent=parseInt(spc.textContent);
})

b10.addEventListener('click',function(){
  spc.textContent=parseInt(spc.textContent)+1;
  console.log(spc);
})

b12.addEventListener('click',function(){
   spc.textContent=parseInt(spc.textContent);
})

rome.addEventListener('click',function(){
    spc.textContent=parseInt(spc.textContent);
})

paris.addEventListener('click',function(){
  spc.textContent=parseInt(spc.textContent)+1;
  console.log(spc);
})

dhaka.addEventListener('click',function(){
   spc.textContent=parseInt(spc.textContent);
})

 
 
 let timer= setInterval(function() {
    console.log(timeStart);
    timeStart = timeStart - 1;
    
   //   if(timeStart<0){
      
	// 	 clearInterval(timer);
   //     timer=null;
   //   return; 
   //   }
     if(secq.style.display=='block'&&timeStart<0){
      // timeStart=10;
      console.log('hello');
     clearInterval(timer);
      timer=null;
      timeStart=0;
     }
   
     if(timeStart<0){
      secq.style.display='block';
      firstq.style.display='none';

    timeStart=10;
     }
     
      sp.textContent=timeStart;
     if(secq.style.display=='block'){
      // timeStart=10;
     sp2.textContent=timeStart;
     }

   }, 1000);




