let input=document.querySelector('#inputone');
let button=document.querySelector('#buttonone');
let empty=document.querySelector('#empty');
let divdi=document.querySelector('#didiv');
let divdone=document.querySelector('#divdone');
let donespan=document.querySelector('#donespan');
let totalspan=document.querySelector('#totalspan');
let parcent=document.querySelector('#parcent');

let tracker=0;
let done=0;


button.addEventListener('click',function(){
    
    tracker++;
    totalspan.textContent=tracker;

    let newdiv=document.createElement('div');
    newdiv.style.height='50px';
    newdiv.style.width='100%';
    newdiv.style.border='1px solid black';
    newdiv.style.borderRadius='5px';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='row';

    let newdivp=document.createElement('div');
    let newdivb=document.createElement('div');

    newdivb.style.height='50px';
    newdivb.style.width='50%';
    newdivb.style.gap='10px';
    newdivb.style.display='flex';
    newdivb.style.justifyContent='flex-end';
    newdivb.style.alignItems='center';
    newdivb.style.paddingRight='10px';


    newdivp.textContent=input.value;
    newdivp.style.color='black';
     newdivp.style.height='50px';
     newdivp.style.width='50%';
    newdivp.style.fontSize='1.5rem';
  
     let newbutton=document.createElement('button');
     let newbutton2=document.createElement('button');

     newbutton.textContent='Done';
     newbutton2.textContent='X';
     newbutton.style.height='30px';
     newbutton2.style.height='30px';
     newbutton.style.width='50px';
     newbutton2.style.width='50px';
     newbutton.style.border='1px solid black';
     newbutton2.style.border='1px solid black';
     newbutton2.style.color='red';

     newdivb.appendChild(newbutton);
     newdivb.appendChild(newbutton2);
     newdiv.appendChild(newdivp);
     newdiv.appendChild(newdivb);
     empty.appendChild(newdiv);

     newbutton.addEventListener('click',function(){
     done++;   
    donespan.textContent=done;
    parcent.textContent=done/tracker*100;

     if(done!=0&& tracker!=0){
     divdone.style.width=done/tracker*100+'%';
     }
    newbutton.disabled=true;

     })

     newbutton2.addEventListener('click',function(){
        newdiv.remove();
        tracker--;
        if(done>0){
        done--;
        }
        donespan.textContent=done;
        totalspan.textContent=tracker;

     })

















    
})
