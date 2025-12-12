
let empty=document.querySelector('#empty');
let in1=document.querySelector('#in1');
let happy=document.querySelector('#happy');
let para=document.querySelector('#para');

in1.addEventListener('change',function(){
  
    
    if(in1.value=='Happy'){

        emoji.textContent='😃';
        empty.textContent='Keep smiling! Life is beautiful.';

        
        
        document.body.style.backgroundColor='pink';
    }

   if(in1.value=='Sad'){

        emoji.textContent='🥹';
        empty.textContent='Its okay to feel sad sometimes';

        
        
        document.body.style.backgroundColor='blue';
    }
   if(in1.value=='Excited'){

        emoji.textContent='🤩';
        empty.textContent='Your energy is contagious';

        
        
        document.body.style.backgroundColor='orange';
    }


})