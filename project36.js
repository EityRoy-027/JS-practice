let input=document.querySelector('#input1');
let img=document.querySelector('img');

input.addEventListener('input',function(){
    img.style.width= input.value+ 'px';
    img.style.height= input.value+ 'px';

})
