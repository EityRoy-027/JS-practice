let empty=document.querySelector('#empty');
let sel=document.querySelector('#sel');

sel.addEventListener('change',function(){
    if(sel.value=='happy'){
    document.body.style.backgroundColor='lightyellow';
    empty.innerHTML="Happiness is not something ready-made. <br> It comes from your own actions.--Dalai Lima";
    divsel.appendChild(empty);
    }
    else if(sel.value=='sad'){
        document.body.style.backgroundColor='lightblue';
    empty.textContent='Even the darkest night will end and the sun will rise.';
    divsel.appendChild(empty);
    }

     else if(sel.value=='motivated'){
        document.body.style.backgroundColor='gray';
    empty.textContent='Success is not final; failure is not fatal: It is the courage to continue that counts.';
    divsel.appendChild(empty);
    }
     else if(sel.value=='stress'){
        document.body.style.backgroundColor='red';
    empty.textContent='Take a deep breath, you are brave you know.';
    divsel.appendChild(empty);
    }
     else if(sel.value=='calm'){
        document.body.style.backgroundColor='orange';
    empty.textContent='Quite the mind ,and the soul will speak.'; 
    divsel.appendChild(empty);
    }
    empty.style.marginTop='80px';
    empty.style.fontSize='1.2rem';

})