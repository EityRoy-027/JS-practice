let font=document.querySelector('#fontin');
let opa=document.querySelector('#opain');
let p=document.querySelector('#para');

font.addEventListener('input',function(){
p.style.fontSize= font.value+'px';
})

opa.addEventListener('input',function(){
p.style.opacity= opa.value;
})