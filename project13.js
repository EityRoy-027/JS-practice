let np=document.querySelector('#np');
let ap=document.querySelector('#ap');
let cs=document.querySelector('#cs');
let as=document.querySelector('#as');
let jsp=document.querySelector('#jsp');
let jsa=document.querySelector('#jsa');
let pre=document.querySelector('#pre');
let fli=document.querySelector('#fli');
let next=document.querySelector('#next');
let emptycol=document.querySelector('#emptycol');
let click=1;
let flag=1;


fli.addEventListener('click',function(){
if(click==1){
   if(flag==1){
   ap.style.display='block';
   np.style.display='none';

   flag=0;
    }
    else if(flag==0){
    ap.style.display='none';
    np.style.display='block';
    flag=1;
    }
}


if(click==2){
   if(flag==1){
   cs.style.display='block';
   as.style.display='none';

   flag=0;
    }
    else if(flag==0){
    as.style.display='block';
    cs.style.display='none';
    flag=1;
    }
}


if(click==3){
   if(flag==1){
   jsp.style.display='block';
   jsa.style.display='none';

   flag=0;
    }
    else if(flag==0){
    jsp.style.display='none';
    jsa.style.display='block';
    flag=1;
    }
}


})

next.addEventListener('click',function(){
    click++;
    if(click==2){
        cs.style.display='block';
        as.style.display='none';
        np.style.display='none';
        ap.style.display='none';
        jsp.style.display='none';
        jsa.style.display='none';

    }
    emptycol.style.width=click/3*100+'%';

    if(click==3){
        jsp.style.display='block';
        jsa.style.display='none';
        np.style.display='none';
        ap.style.display='none';
        cs.style.display='none';
        as.style.display='none';



    }
    
})

pre.addEventListener('click',function(){
    click--;
    if(click==2){
        cs.style.display='block';
        as.style.display='none';
        np.style.display='none';
        ap.style.display='none';
        jsp.style.display='none';
        jsa.style.display='none';
        emptycol.style.width=click/3*100+'%';
    }

    emptycol.style.width=click/3*100+'%';


    if(click==1){
        cs.style.display='none';
        as.style.display='none';
        np.style.display='block';
        ap.style.display='none';
        jsp.style.display='none';
        jsa.style.display='none';
        emptycol.style.width=click/3*100+'%';
    }

})