let inputone=document.querySelector('#inputone');
let emptycol=document.querySelector('#emptycol');
let h=document.querySelector('#h');
let allp=document.querySelector('#allp');
let pone=document.querySelector('#pone');
let ptwo=document.querySelector('#ptwo');
let pthree=document.querySelector('#pthree');
let pfour=document.querySelector('#pfour');
let haslength=false;
let hascapital=false;
let hasnumber=false;
let hasspecial=false;
let count=0;


inputone.addEventListener('input',function(){
   
    console.log(count);
    let ch=inputone.value.slice(-1);
    console.log(ch);
    if(!haslength && inputone.value.length>=8){
        count++;
        haslength=true;
        pone.style.color='green';

    }
     if(!hascapital && ch>='A'&& ch<='Z'){
        count++;
        hascapital=true;
         ptwo.style.color='green';

    }
    if(!hasspecial && (ch=='@'||ch=='!'||ch=='$'||ch=='%'||ch=='&'))
    {
        count++;
        hasspecial=true;
        pfour.style.color='green';
 
    }
     if(!hasnumber && (ch>='0'&& ch<='9')){
        count++;
        hasnumber=true;
        pthree.style.color='green';

    }

    if(count==1){
     h.textContent='Strength: Very Weak';
     emptycol.style.backgroundColor='red';

    }

    if(count==2){
     h.textContent='Strength: Weak';
     emptycol.style.backgroundColor='orange';
    }

    if(count==3){
     h.textContent='Strength: Strong';
     emptycol.style.backgroundColor='gold';

    }

   if(count==4){
     h.textContent='Strength: Very Strong';
     emptycol.style.backgroundColor='green';
    }

    emptycol.style.width=count/4*100+'%';

})

