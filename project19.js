
let buttonone=document.querySelector('#buttonone');
let maindiv=document.querySelector('#main');


buttonone.addEventListener('click',function(){
    let newdiv=document.createElement('div');
    newdiv.style.height='30px';
    newdiv.style.width='40%';
    newdiv.textContent='This is a toast notification!';
    newdiv.style.fontSize='1.7rem';
    newdiv.style.fontWeight='bold';
    newdiv.style.color='white';
    newdiv.style.textAlign='center';
    newdiv.style.backgroundColor='gray';
    newdiv.style.color='white';
    newdiv.style.borderRadius='5px';
    newdiv.style.marginTop='150px';
    
    maindiv.appendChild(newdiv);

    setTimeout(function() {
 
newdiv.remove }, 1000);
})

