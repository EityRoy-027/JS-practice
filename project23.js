let emoji1=document.querySelector('#emoji1');
let emoji2=document.querySelector('#emoji2');
let emoji3=document.querySelector('#emoji3');
let emoji4=document.querySelector('#emoji4');
let emoji5=document.querySelector('#emoji5');
let sp1=document.querySelector('#spone');
let sp2=document.querySelector('#sptwo');
let sp3=document.querySelector('#spthree');
let sp4=document.querySelector('#spfour');
let sp5=document.querySelector('#spfive');



emoji1.addEventListener('click',function(){

    sp1.textContent=parseInt (sp1.textContent)+1;
    

})
emoji2.addEventListener('click',function(){

    sp2.textContent=parseInt (sp2.textContent)+1;
    

})
emoji3.addEventListener('click',function(){

    sp3.textContent=parseInt (sp3.textContent)+1;
    

})
emoji4.addEventListener('click',function(){

    sp4.textContent=parseInt (sp4.textContent)+1;
    

})
emoji5.addEventListener('click',function(){

    sp5.textContent=parseInt (sp5.textContent)+1;
    

})




