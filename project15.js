let buttonone=document.querySelector('#buttonone');
let buttontwo=document.querySelector('#buttontwo');
let buttonthree=document.querySelector('#buttonthree');
let result=document.querySelector('#result');
let saddiv=document.querySelector('#saddiv');
let saddiv2=document.querySelector('#saddiv2');
let crydiv=document.querySelector('#crydiv');
let crydiv2=document.querySelector('#crydiv2');
let happydiv=document.querySelector('#happydiv');
let happy2div2=document.querySelector('#happydiv2');
let reset=document.querySelector('#reset');
let resetbutton=document.querySelector('#resetbutton');
let sad=document.querySelector('#sad');
let cry=document.querySelector('#cry');
let happy=document.querySelector('#happy');
let sadp=document.querySelector('#sadp');
let sadv=document.querySelector('#sadv');
let cryp=document.querySelector('#cryp');
let cryv=document.querySelector('#cryv');
let happyp=document.querySelector('#happyp');
let happyv=document.querySelector('#happyv');
let click=0;
let sadvote=0;
let cryvote=0;
let happyvote=0;




buttonone.addEventListener('click',function(){
    sad.textContent=parseInt(sad.textContent)+1;
 click++;
 sadvote++;
 saddiv2.style.width=sadvote/click*100+'%';
 crydiv2.style.width=cryvote/click*100+'%';
 happydiv2.style.width=happyvote/click*100+'%';
 sadp.textContent=sadvote/click*100;
 sadv.textContent=parseInt(sadv.textContent)+1;
 cryp.textContent=cryvote/click*100;
 cryv.textContent=parseInt(cryv.textContent)+1;
happyp.textContent=happyvote/click*100;
happyv.textContent=parseInt(happyv.textContent)+1;

 })

buttontwo.addEventListener('click',function(){
    cry.textContent=parseInt(cry.textContent)+1;
    click++;
    cryvote++;
    saddiv2.style.width=sadvote/click*100+'%';
    crydiv2.style.width=cryvote/click*100+'%';
    happydiv2.style.width=happyvote/click*100+'%';
    cryp.textContent=cryvote/click*100;
    cryv.textContent=parseInt(cryv.textContent)+1;
    happyp.textContent=happyvote/click*100;
    happyv.textContent=parseInt(happyv.textContent)+1;
    sadp.textContent=sadvote/click*100;
    sadv.textContent=parseInt(sadv.textContent)+1;
})

buttonthree.addEventListener('click',function(){
    happy.textContent=parseInt(happy.textContent)+1;
    click++;
    happyvote++;
    saddiv2.style.width=sadvote/click*100+'%';
    happydiv2.style.width=happyvote/click*100+'%';
    crydiv2.style.width=cryvote/click*100+'%';
    happyp.textContent=happyvote/click*100;
    happyv.textContent=parseInt(happyv.textContent)+1;
    cryp.textContent=cryvote/click*100;
    cryv.textContent=parseInt(cryv.textContent)+1;
    sadp.textContent=sadvote/click*100;
    sadv.textContent=parseInt(sadv.textContent)+1;
})

reset.addEventListener('click',function(){
     saddiv2.style.width='0';
    happydiv2.style.width='0';
    crydiv2.style.width='0';
    happyp.textContent='0';
    happyv.textContent='0';
    cryp.textContent='0';
    cryv.textContent='0';
    sadp.textContent='0';
    sadv.textContent='0';
    buttonone.textContent='0';
    buttontwo.textContent='0';
    buttonthree.textContent='0';
    click=0;
    sadvote=0;
    cryvote=0;
    happyvote=0;
})
