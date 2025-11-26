let p=document.querySelector('#pone');
let buttonone=document.querySelector('#buttonone');
let buttontwo=document.querySelector('#buttontwo');
let buttonthree=document.querySelector('#buttonthree');
let buttonfour=document.querySelector('#buttonfour');

buttonone.addEventListener('click',function(){
p.textContent=' Feeling Happy and Bright';
document.body.style.backgroundColor=' rgb(231, 216, 114)';
})

buttontwo.addEventListener('click',function(){
p.textContent=' Feeling calm and relaxed.';
document.body.style.backgroundColor='rgb(82, 208, 217)';
})

buttonthree.addEventListener('click',function(){
p.textContent=' Feeling energetic and active!';
document.body.style.backgroundColor='rgb(231, 101, 123)';
})

buttonfour.addEventListener('click',function(){
p.textContent=' Feeling peaceful and serene.';
document.body.style.backgroundColor='rgb(215, 243, 104)';
})