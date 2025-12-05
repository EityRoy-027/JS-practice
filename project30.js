let buttonone=document.querySelector('#buttonone');
let buttontwo=document.querySelector('#buttontwo');
let box=document.querySelector('#box');
let empty=document.querySelector('#empty');
let p=document.querySelector('p');
count=1;

buttonone.addEventListener('click',function(){
    if(count==1){
        p.innerHTML='The best way to get started is to quit taliking and begin <br> doing.<br> <span>--Walt Disney </span>';
        count++;
    }
    else if(count==2){
        p.innerHTML='Its not wheather you get down its wheather you <br> get up.<span>--Vince Lambardi</span>'; 
    }
    p.style.display='flex';
    p.style.flexDirection='column';
    // p.style.justifyContent='center';
    // p.style.alignItems='center';
    p.style.textAlign='center';
    p.style.fontSize='1rem';
    box.style.textAlign='center';

    count=1;
    

   
})
buttontwo.addEventListener('click',function(){
let newdiv=document.createElement('div');
let button3=document.createElement('button');
let p2=document.createElement('p');
newdiv.style.height='80%';
newdiv.style.width='90%';
newdiv.style.backgroundColor='lightpink';
newdiv.style.display='flex';
newdiv.style.flexDirection='row';
newdiv.style.alignItems='center';
newdiv.style.borderRadius='10px';
newdiv.style.justifyContent='space-between';

p2.style.fontSize='1rem';
button3.textContent='Remove';
button3.style.height='40px';
button3.style.width='20%';
button3.style.backgroundColor='red';
button3.style.color='white';
button3.style.textAlign='center';
button3.style.borderRadius='5px';

if(count==1){
p2.textContent=p.textContent;
count++;
}
else if(count==2){
p2.textContent=p.textContent;
}


newdiv.appendChild(p2);
newdiv.appendChild(button3);
empty.appendChild(newdiv);
count=1;
button3.addEventListener('click',function(){
    
       
        newdiv.style.display='none';
        
    
})

})
