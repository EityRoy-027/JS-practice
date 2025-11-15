let element=document.querySelector('#insidebox');
let element2=document.querySelector('#inputone');
let element3=document.querySelector('#buttonone');
let elementtask=document.querySelector('#task');



element3.addEventListener('click',function(){
    let element4=document.createElement('div');
    element4.style.height='50%';
    element4.style.width='70%';
    element4.style.backgroundColor='grey';

    // element4.textContent=element2.value;
    let elementp=document.createElement('p');
    elementp.style.width='20%';
    elementp.style.height='20px';
    elementp.textContent=element2.value;

    let element5=document.createElement('button');
    element5.textContent='X';
    element5.style.width='90%';
    element5.style.height='20px';
    element5.style.backgroundColor='red';
    element5.style.border='none';
    element4.style.display='flex';
    element4.style.justifyContent='center';
    element4.style.alignItems='center';
     element5.style.color='white';
    
    element4.appendChild(elementp);
    element4.appendChild(element5);
    elementtask.appendChild(element4);
    

    element5.addEventListener('click',function(){
        element4.remove();
    })


})
window.onload=function(){
    
    if(element2.value.length==0){
    element3.disabled=true;

    }
    else{
        element3.disabled=false;
    }
}
element2.addEventListener('input',function(){
    element3.disabled=false;
})



