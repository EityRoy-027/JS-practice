let maindiv=document.querySelector('#maindiv');
let inputone=document.querySelector('#inputone');
let inputtwo=document.querySelector('#inputtwo');
let selectone=document.querySelector('#selectone');
let empty=document.querySelector('#emptycol');
let buttonone=document.querySelector('#buttonone');
let in1=document.querySelector('#in');
let in2=document.querySelector('#in2');
let select=document.querySelector('#select');
let back=document.querySelector('#back');
let click=1;

buttonone.addEventListener('click',function(){
 

if(click==1){
    in1.style.display='none';
    in2.style.display='block';
    click++;
}
else if(click==2){
    in1.style.display='none';
    in2.style.display='none';
    select.style.display='block';
    click++;
}

empty.style.width=click/3*100+'%';
buttonone.style.marginLeft='70%';
back.style.display='block';



})

back.addEventListener('click',function(){
 

if(click==1){
    in1.style.display='block';
    in2.style.display='none';
    click--;
}
else if(click==2){
    in1.style.display='block';
    in2.style.display='none';
    select.style.display='none';
    click--;
}
else if(click==3){
    in1.style.display='none';
    in2.style.display='block';
    select.style.display='none';
    click--;
}


empty.style.width=click/3*100+'%';
buttonone.style.marginLeft='70%';
// back.style.display='block';



})

selectone.addEventListener('change',function(){
    if(selectone.value=='dark'){
        maindiv.style.backgroundColor='gray';
    }
    else{
       maindiv.style.backgroundColor='white';
    } 
    }
)