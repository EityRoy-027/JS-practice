let sub=document.querySelector('#sub');
let one=document.querySelector('#one');
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let four=document.querySelector('#four');
let five=document.querySelector('#five');
let six=document.querySelector('#six');
let seven=document.querySelector('#seven');
let eight=document.querySelector('#eight');
let nine=document.querySelector('#nine');
let ten=document.querySelector('#ten');
let eleven=document.querySelector('#eleven');
let twelve=document.querySelector('#twelve');
let thirteen=document.querySelector('#thirteen');
let fourten=document.querySelector('#fourten');
let fiften=document.querySelector('#fiften');
let sixten=document.querySelector('#sixten');
let seventen=document.querySelector('#seventen');
let eighten=document.querySelector('#eighten');
let nineten=document.querySelector('#nineten');
let twenty=document.querySelector('#twenty');
let button=document.querySelector('button');
let st=document.querySelector('#st');
let p=document.querySelector('p');
let timeStart=10;
let timer;
let click;

function startTimer() {
  clearInterval(timer);   
  timeStart = 10;

  timer = setInterval(function () {

    if (timeStart >= 0) {
      p.style.display = 'block';
      st.textContent = timeStart + 's';
    }

    if (timeStart < 0) {
      clearInterval(timer);
      timer = null;
      p.style.display = 'none';
      return;
    }

    timeStart--;
  }, 1000);

}



one.addEventListener('click',function(){
    one.style.backgroundColor='red';
    click='one';
   startTimer();
 
   

})

two.addEventListener('click',function(){
   two.style.backgroundColor='red';
   click='two';
  startTimer();
     

 })

 three.addEventListener('click',function(){
   three.style.backgroundColor='red';
   click='three';
   startTimer();
})

 four.addEventListener('click',function(){
    four.style.backgroundColor='red';
    click='four';
    startTimer();
 })

  five.addEventListener('click',function(){
    five.style.backgroundColor='red';
    click='five';
    startTimer();
 })

 six.addEventListener('click',function(){
   six.style.backgroundColor='red';
   click='six';
    startTimer();

})
 seven.addEventListener('click',function(){
    seven.style.backgroundColor='red';
    click='seven';
    startTimer();
 })

eight.addEventListener('click',function(){
   eight.style.backgroundColor='red';
   click='eight';
    startTimer();

})
nine.addEventListener('click',function(){
   nine.style.backgroundColor='red';
   click='nine';
    startTimer();
 })

 ten.addEventListener('click',function(){
    ten.style.backgroundColor='red';
    click='ten';
     startTimer();
 })

 eleven.addEventListener('click',function(){
    eleven.style.backgroundColor='red';
    click='eleven';
    startTimer();
 })

 twelve.addEventListener('click',function(){
    twelve.style.backgroundColor='red';
    click='twelve';
    startTimer();
 })

thirteen.addEventListener('click',function(){
   thirteen.style.backgroundColor='red';
   click='thirteen';
    startTimer();
 })

 fourten.addEventListener('click',function(){
    fourten.style.backgroundColor='red';
    click='fourten';
 
 })

 fiften.addEventListener('click',function(){
    fiften.style.backgroundColor='red';
    click='fiften';
     startTimer();
   
 })
 sixten.addEventListener('click',function(){
    sixten.style.backgroundColor='red';
     click='sixten';
      startTimer();
  
 })
 seventen.addEventListener('click',function(){
    seventen.style.backgroundColor='red';
     click='seventen';
      startTimer();
  
 })
 eighten.addEventListener('click',function(){
    eighten.style.backgroundColor='red';
     click='eighten';
      startTimer();
    
 })
 nineten.addEventListener('click',function(){
   nineten.style.backgroundColor='red';
    click='nineten';
     startTimer();
  
})
twenty.addEventListener('click',function(){
     twenty.style.backgroundColor='red';
      click='twenty';
       startTimer();
})


 
 button.addEventListener('click',function(){
    clearInterval(timer);
  timer = null;
  p.style.display = 'none';
  if (click === 'one') {
    one.style.backgroundColor = 'orange';
  } 
  else if (click === 'two') {
    two.style.backgroundColor = 'orange';
  }
   else if(click=='three'){
       three.style.backgroundColor='orange';
   }
 if(click=='four'){
      four.style.backgroundColor='orange';
      
 }
      if(click=='five'){
      five.style.backgroundColor='orange';
     
             }
      if(click=='six'){
       six.style.backgroundColor='orange';
    
      }
      
       if(click=='seven'){
       seven.style.backgroundColor='orange';
     
       }
       if(click=='eight'){
       eight.style.backgroundColor='orange';
      
       }
       if(click=='nine'){
       nine.style.backgroundColor='orange';
    
       }
       if(click=='ten'){
       ten.style.backgroundColor='orange';
 
       }
       if(click=='eleven'){
       eleven.style.backgroundColor='orange';
      
       }
       if(click=='twelve'){
       twelve.style.backgroundColor='orange';
    
       }
       if(click=='thirteen'){
       thirteen.style.backgroundColor='orange';
      
       }
       if(click=='fourten'){
       fourten.style.backgroundColor='orange';
      
       }
       if(click=='fiften'){
       fiften.style.backgroundColor='orange';
       
       }
       if(click=='sixten'){
       sixten.style.backgroundColor='orange';
       
       }
       if(click=='seventen'){
       seventen.style.backgroundColor='orange';
      
       }
       if(click=='eighten'){
       eighten.style.backgroundColor='orange';
     
       }
       if(click=='nineten'){
       nineten.style.backgroundColor='orange';
      
       }
       if(click=='twenty'){
       twenty.style.backgroundColor='orange';
      
 }})
   
   
















