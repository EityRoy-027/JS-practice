let su=document.querySelector('#su');
let warn=document.querySelector('#warn');
let er=document.querySelector('#er');
let clear=document.querySelector('#clear');
let empty=document.querySelector('#empty');
let clicks,clickw,clicker;


    su.addEventListener('click',function(){
    
    let newdiv=document.createElement('div');
    let pdiv=document.createElement('div');
    let bdiv=document.createElement('div');
    let pin=document.createElement('button');
    let p=document.createElement('p');
    let p1=document.createElement('p');
   
    newdiv.className='slidein';
    newdiv.style.height='30%';
    newdiv.style.width='100%';
    newdiv.style.borderRadius='15px';
    newdiv.style.backgroundColor='black';
    newdiv.style.borderLeft='6px solid green';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='row';
    newdiv.style.justifyContent='space-Between'; 
  
    pdiv.style.display='flex';
    pdiv.style.flexDirection='column';
    pdiv.style.marginLeft='5px';
    pdiv.style.gap='20px';

    bdiv.style.marginTop='80px';

    p.textContent='SUCCESS';
    p1.textContent='This is a success notification.';
    p.style.color='white';
    p.style.fontSize='1.5em';
    p.style.fontWeight='bold';
    p.style.marginTop='10px';
    p1.style.color='white';
    p1.style.fontSize='1.2em';

    pin.textContent='📌pin';
    pin.style.color='white';
    pin.style.height='10px';
    pin.style.width='60px';
    pin.style.backgroundColor='black';
    pin.style.border='none';
  
    pdiv.appendChild(p);
    pdiv.appendChild(p1);
    bdiv.appendChild(pin);
    newdiv.appendChild(pdiv);
    newdiv.appendChild(bdiv);
    empty.appendChild(newdiv);

    empty.style.display='block';
    empty.style.display='flex';
    empty.style.flexDirection='column';
    empty.style.gap='10px';

   pin.addEventListener('click',function(){
     pin.textContent='📍pinned';
     clicks='pins';
     console.log('h');
    })
    setTimeout(function(){
    if(clicks!='pins'){
     newdiv.remove();
}
    },5000)
})

warn.addEventListener('click',function(){
    let newdiv=document.createElement('div');
    let pdiv=document.createElement('div');
    let bdiv=document.createElement('div');
    let pin=document.createElement('button');
    let p=document.createElement('p');
    let p1=document.createElement('p');

    newdiv.className='slidein';
    newdiv.style.height='30%';
    newdiv.style.width='100%';
    newdiv.style.borderRadius='15px';
    newdiv.style.backgroundColor='black';
    newdiv.style.borderLeft='6px solid orange';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='row';
    newdiv.style.justifyContent='space-Between'; 

    pdiv.style.display='flex';
    pdiv.style.flexDirection='column';
    pdiv.style.marginLeft='5px';
    pdiv.style.gap='20px';

    bdiv.style.marginTop='80px';

    p.textContent='WARNING';
    p1.textContent='This is a warning notification.';
    p.style.color='white';
    p.style.fontSize='1.5em';
    p.style.fontWeight='bold';
    p.style.marginTop='10px';
    p1.style.color='white';
    p1.style.fontSize='1.2em';

    pin.textContent='📌pin';
    pin.style.color='white';
    pin.style.height='10px';
    pin.style.width='40px';
    pin.style.backgroundColor='black';
    pin.style.border='none';
  
    pdiv.appendChild(p);
    pdiv.appendChild(p1);
    bdiv.appendChild(pin);
    newdiv.appendChild(pdiv);
    newdiv.appendChild(bdiv);
    empty.appendChild(newdiv);

    empty.style.display='block';
    empty.style.display='flex';
    empty.style.flexDirection='column';
    empty.style.gap='10px';


     pin.addEventListener('click',function(){
     pin.textContent='📍pinned';
    
    
     console.log('h');
     clickw='pinw';
     
})   

setTimeout(function(){
    if(clickw!='pinw'){
     newdiv.remove();
}
},5000)
     pin.addEventListener('click',function(){
     pin.textContent='📍pinned';
})
})

er.addEventListener('click',function(){
    console.log('error');
    let newdiv=document.createElement('div');
    let pdiv=document.createElement('div');
    let bdiv=document.createElement('div');
    let pin=document.createElement('button');
    let p=document.createElement('p');
    let p1=document.createElement('p');

    newdiv.className='slidein';
    newdiv.style.borderRadius='15px';
    newdiv.style.backgroundColor='black';
    newdiv.style.borderLeft='6px solid red';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='row';
    newdiv.style.justifyContent='space-Between'; 
    
    pdiv.style.display='flex';
    pdiv.style.flexDirection='column';
    pdiv.style.marginLeft='5px';
    pdiv.style.gap='20px';

    bdiv.style.marginTop='80px';
    
    p.textContent='ERROR';
    p1.textContent='This is a error notification.';
    p.style.color='white';
    p.style.fontSize='1.5em';
    p.style.fontWeight='bold';
    p.style.marginTop='10px';
    p1.style.color='white';
    p1.style.fontSize='1.2em';

    pin.textContent='📌pin';
    pin.style.color='white';
    pin.style.height='10px';
    pin.style.width='40px';
    pin.style.backgroundColor='black';
    pin.style.border='none';
  
    pdiv.appendChild(p);
    pdiv.appendChild(p1);
    bdiv.appendChild(pin);
    newdiv.appendChild(pdiv);
    newdiv.appendChild(bdiv);
    empty.appendChild(newdiv);

    empty.style.display='block';
    empty.style.display='flex';
    empty.style.flexDirection='column';
    empty.style.gap='10px';

     pin.addEventListener('click',function(){
     pin.textContent='📍pinned';
   
    clicker='piner';
     console.log('h');
     
})  
  
setTimeout(function(){
    if(clicker!='piner'){
     newdiv.remove();
}
},5000)

     pin.addEventListener('click',function(){
     pin.textContent='📍pinned';
})
})


clear.addEventListener('click',function(){
    empty.innerHTML='';
})

