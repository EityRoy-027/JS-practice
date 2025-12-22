let empty=document.querySelector('#empty');
let sub=document.querySelector('#sub');
let buttonone=document.querySelector('#buttonone');
let buttontwo=document.querySelector('#buttontwo');

buttonone.addEventListener('click',function(){
    let div1=document.createElement('div');
    div1.style.height='100px';
    div1.style.width='80px';
    div1.style.backgroundColor='skyblue';
    div1.textContent='Flower';
    div1.style.color='white';
    div1.style.textContent='center';
    div1.style.fontSize='0.7rem';
    div1.style.display='flex';
    div1.style.flexDirection='row';
    div1.style.alignItems='center';
    div1.style.justifyContent='center';
    div1.classList.add('anime');
    empty.style.display='flex';
    empty.style.flexDirection='row';
    empty.style.gap='10px';
    empty.appendChild(div1);
})

buttontwo.addEventListener('click',function(){
    let div2=document.createElement('div');
    div2.style.height='100px';
    div2.style.width='80px';
    div2.style.backgroundColor='skyblue';
    div2.textContent='Tree';
    div2.style.color='white';
    div2.style.textContent='center';
    div2.style.fontSize='0.7rem';
    div2.style.display='flex';
    div2.style.flexDirection='row';
    div2.style.alignItems='center';
    div2.style.justifyContent='center';
    div2.classList.add('anime');
    empty.style.display='flex';
    empty.style.flexDirection='row';
    empty.style.gap='10px';
    empty.appendChild(div2);



})