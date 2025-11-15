let element=document.querySelector('#colordiv');
let elementsel=document.querySelector('#selcolor');

elementsel.addEventListener('change',function(){
    element.style.backgroundColor=elementsel.value;
})