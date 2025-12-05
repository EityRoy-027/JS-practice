let button1=document.querySelector('#button1');
let input1=document.querySelector('#input1');
let sub=document.querySelector('#sub');
let empty=document.querySelector('#empty');
let editdiv=null;


button1.addEventListener('click',function(){
let span=document.createElement('span');
 if(editdiv!=null){
    editdiv.style.backgroundColor=input1.value;
    editdiv.querySelector('span').textContent=input1.value;
    
    editdiv=null;
    return; 
}

let red=document.createElement('div');
let edit=document.createElement('button');
let del=document.createElement('button');
span.textContent=input1.value;

red.style.width='100%';
red.style.height='40px';
red.style.backgroundColor=input1.value;
red.style.color='white';
red.style.display='flex';
red.style.flexDirection='row';
red.style.justifyContent='space-between';
red.style.textAlign='center';
red.style.alignItems='center';
red.style.padding='5px';
red.style.fontSize='1.3rem';
red.style.fontWeight='bold';


edit.style.textAlign='center';
edit.textContent='Edit';
edit.style.width='6%';
edit.style.height='30px';
edit.style.backgroundColor='maroon';
edit.style.border='none';
edit.style.color='white';
edit.style.fontSize='1rem';
edit.style.fontWeight='bold';


del.style.textAlign='center';
del.textContent='Delete';
del.style.width='8%';
del.style.height='30px';
del.style.border='none';
del.style.backgroundColor='maroon';
del.style.color='white';
del.style.fontSize='1rem';
del.style.fontWeight='bold';

red.appendChild(span);
red.appendChild(edit);
red.appendChild(del);
empty.appendChild(red);

del.addEventListener('click',function(){
    red.style.display='none';
})

edit.addEventListener('click',function(){
editdiv=red;
input1.focus();

})



})

