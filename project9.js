let element=document.querySelector('#divin');
let element2=document.querySelector('#inputone');
let element3=document.querySelector('#buttonone');
let element4=document.querySelector('#selectone');

element3.addEventListener('click',function(){

    let elementnewdiv=document.createElement('div');
   
    elementnewdiv.style.width='90%';
    elementnewdiv.style.height='20%';
    elementnewdiv.style.backgroundColor='grey';
    elementnewdiv.style.color='black';
    elementnewdiv.style.display='flex';
    elementnewdiv.style.flexDirection='row';
    elementnewdiv.style.justifyContent='space-between';
    
    let newdiv2=document.createElement('div');
    let newbutton=document.createElement('button');
    let newbutton2=document.createElement('button');
    let newp=document.createElement('p');
    newp.textContent=element2.value;

      
    newdiv2.style.display='flex';
    newdiv2.style.flexDirection='column';
    newdiv2.style.justifyContent='center';
   

    newbutton.style.height='20px';
    newbutton.style.height='30px';
    newbutton.style.backgroundColor='grey';
    newbutton.style.border='1px solid black';
    newbutton.style.height='20px';
    newbutton.style.height='30px';
    newbutton.style.backgroundColor='grey';
    newbutton.textContent='complete';
    
    newdiv2.appendChild(newbutton);
    newdiv2.appendChild(newbutton2);

    newbutton2.style.height='20px';
    newbutton2.style.height='30px';
    newbutton2.style.backgroundColor='red';
    newbutton2.style.border='1px solid black';
    newbutton2.style.height='20px';
    newbutton2.style.height='30px';
    newbutton2.style.backgroundColor='red';
    newbutton2.textContent='delete';
    
   elementnewdiv.appendChild(newp);
    elementnewdiv.appendChild(newdiv2);
   
   
    element.appendChild(elementnewdiv);

    newbutton.addEventListener('click',function(){
        elementnewdiv.style.backgroundColor='green';
    })

newbutton2.addEventListener('click',function(){
        elementnewdiv.style.display='none';
    })


  


})

