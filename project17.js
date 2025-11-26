let inputone=document.querySelector('#inputone');
let inputtwo=document.querySelector('#inputtwo');
let select=document.querySelector('#selectone');
let select2=document.querySelector('#selecttwo');
let box=document.querySelector('#box');
let name=document.querySelector('#name');
let role=document.querySelector('#role');

inputone.addEventListener('input',function()
{
   name.textContent=inputone.value; 

})

inputtwo.addEventListener('input',function()
{
    role.textContent=inputtwo.value;  
})
select.addEventListener('change',function(){
    if(select.value=='light mode'){
        box.style.backgroundColor='white';
        box.style.border='1px solid black';
    }
     if(select.value=='dark mode'){
        box.style.backgroundColor='gray';
    }
})
