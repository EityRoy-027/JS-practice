
let red=document.querySelector('#red');
let blue=document.querySelector('#blue');
let green=document.querySelector('#green');

red.addEventListener('input',function(){
    document.body.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`;
})
blue.addEventListener('input',function(){
    document.body.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`;
})
green.addEventListener('input',function(){
    document.body.style.backgroundColor=`rgb(${red.value},${green.value},${blue.value})`;
})


