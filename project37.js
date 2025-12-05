let quantity=document.querySelector('#quantity');
let size=document.querySelector('#size');
let warrenty=document.querySelector('#warrenty');
let gift=document.querySelector('#gift');
let ship=document.querySelector('#ship');
let total=document.querySelector('#total');
let p=document.querySelector('#pt');
let spant=document.querySelector('#spant');


quantity.addEventListener('input',function(){
spant.textContent=20*quantity.value;

if(parseInt(spant.textContent)&&parseInt(spant.textContent>0)<160){
    total.style.backgroundColor=rgb(187, 214, 239);
}
else if(parseInt(spant.textContent)>160){
    total.style.backgroundColor='blue';
}
else if(parseInt(spant.textContent)>260){
    total.style.backgroundColor='pink';
}
})

size.addEventListener('input',function(){
spant.textContent=300*size.value;

})

warrenty.addEventListener('change',function(){
    spant.textContent=parseInt(spant.textContent)+10;
 
})

gift.addEventListener('change',function(){
    spant.textContent=parseInt(spant.textContent)+5;
    
})

ship.addEventListener('change',function(){
    spant.textContent=parseInt(spant.textContent)+15;
    
})

