let a=document.querySelector('#a');
let t=document.querySelector('#t');
let c=document.querySelector('#c');
let g=document.querySelector('#g');
let one=document.querySelector('#one');
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let four=document.querySelector('#four');
let dnas=document.querySelectorAll('.dnas');
let sp=document.querySelector('#sp');
let count=0;

for(i=0;i<dnas.length;i++){
    dnas[i].addEventListener('dragstart',function(start){
        let selected=start.target;

        one.addEventListener('dragover',function(progress){
            progress.preventDefault();
        })
        one.addEventListener('drop',function(){
         if(!selected){
            return;
        }   
         one.textContent=selected.textContent;
         one.style.color='white';
         one.style.fontSize='1.2em';
         one.style.fontWeight='bold';
        
         count++;

         if(count==2){
        if((one.textContent=='A')&&(two.textContent=='T')||((one.textContent=='T')&&(two.textContent=='A')))
            {
            one.style.backgroundColor='rgb(32, 161, 32)';
            two.style.backgroundColor='rgb(32, 161, 32)';
            sp.textContent= parseInt(sp.textContent)+2;
             
        }

     
         else{
             one.style.backgroundColor='red';
            two.style.backgroundColor='red';
            sp.textContent='0';
            
        }
        count=0;
    }
         selected=null;

         
        })

        two.addEventListener('dragover',function(progress){
            progress.preventDefault();
        })
        two.addEventListener('drop',function(){
          if(!selected){
            return;
        }     
         two.textContent=selected.textContent;
         two.style.color='white';
         two.style.fontSize='1.2em';
         two.style.fontWeight='bold';

        //  if(two.textContent=='T'){
        //   two.style.backgroundColor='rgba(232, 164, 219, 1)';
        //   sp.textContent++;
        // }
        
         count++;

         if(count==2){
        if((two.textContent=='T')&&(one.textContent=='A')||((two.textContent=='A')&&(one.textContent=='T')))
            {
            one.style.backgroundColor='rgb(32, 161, 32)';
            two.style.backgroundColor='rgb(32, 161, 32)';
              sp.textContent= parseInt(sp.textContent)+2;
           
        }

        else{
             one.style.backgroundColor='red';
            two.style.backgroundColor='red';
            sp.textContent='0';
        }
        count=0;
    }

         selected=null;
            
        })

          three.addEventListener('dragover',function(progress){
            progress.preventDefault();
        })
        three.addEventListener('drop',function(){
              if(!selected){
            return;
        } 
         three.textContent=selected.textContent;
         three.style.color='white';
         three.style.fontSize='1.2em';
         three.style.fontWeight='bold';

        //  if(three.textContent=='C'){
        //   three.style.backgroundColor='rgba(232, 164, 219, 1)';
        //  sp.textContent++;
        // }
         
          count++;

         if(count==2){

         if((three.textContent=='C')&&(four.textContent=='G')||((three.textContent=='G')&&(four.textContent=='C')))
            {
            three.style.backgroundColor='rgb(32, 161, 32)';
            four.style.backgroundColor='rgb(32, 161, 32)';
            sp.textContent= parseInt(sp.textContent)+2;
           
        }

        else{
           three.style.backgroundColor='red';
            four.style.backgroundColor='red';
           sp.textContent='0';
        }
        count=0;
    }

         selected=null;
        
        })

        four.addEventListener('dragover',function(progress){
            progress.preventDefault();
        })
        four.addEventListener('drop',function(){
              if(!selected){
            return;
        } 
         four.textContent=selected.textContent;
         four.style.color='white';
         four.style.fontSize='1.2em';
         four.style.fontWeight='bold';

        //  if(four.textContent=='G'){
        //   four.style.backgroundColor='rgba(232, 164, 219, 1)';
        //  sp.textContent++;
        // }


        count++;

         if(count==2){
      if((four.textContent=='G')&&(three.textContent=='C')||((four.textContent=='C')&&(three.textContent=='G')))
            {
            three.style.backgroundColor='rgb(32, 161, 32)';
            four.style.backgroundColor='rgb(32, 161, 32)';
             sp.textContent= parseInt(sp.textContent)+2;
           
        }

        else{
            three.style.backgroundColor='red';
            four.style.backgroundColor='red';
           sp.textContent='0';
        }
        count=0;
    }
         selected=null;
        })
    })
}
