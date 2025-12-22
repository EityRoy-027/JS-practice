let inpu=document.querySelector('#inpu');
let sel=document.querySelector('#s');
let but=document.querySelector('button');
let todo=document.querySelector('#do');
let pro=document.querySelector('#pro');
let com=document.querySelector('#com');
let gress=document.querySelector('#gress');
let comple=document.querySelector('#comple');
let total=0;
let progress=0;
let complete=0;

but.addEventListener('click',function(){
    let newdiv=document.createElement('div');
    newdiv.classList.add('list');
    newdiv.draggable=true;

    let newdiv2=document.createElement('div');
    let p1=document.createElement('p');
    let p2=document.createElement('p');

    newdiv.style.height='30px';
    newdiv.style.width='90%';
    newdiv.style.backgroundColor='white';
    newdiv.style.display='flex';
    newdiv.style.textAlign='center';
    newdiv.style.justifyContent='space-Between';
    newdiv.style.alignItems='center';
    newdiv.style.borderRadius='5px';
    
    newdiv2.style.width='25px';
    newdiv2.style.height='25px';
    newdiv2.style.backgroundColor='red';
    newdiv2.style.color='white';
    newdiv2.style.fontSize='1rem';
    newdiv2.style.textAlign='center';
    newdiv2.style.display='flex';
    newdiv2.style.justifyContent='center';
    newdiv2.style.alignItems='center';

    p1.textContent=inpu.value;
    p1.style.color='orange';
    p2.textContent='X';

    newdiv2.appendChild(p2);
    newdiv.appendChild(p1);
    newdiv.appendChild(newdiv2);
    todo.appendChild(newdiv);

    total++;

  if(sel.value=='high'){
    newdiv.style.borderLeft='7px solid red';
  }
  
else if(sel.value=='medium'){
    newdiv.style.borderLeft='7px solid orange';
  }
    
else if(sel.value=='low'){
    newdiv.style.borderLeft='7px solid green';
}

    newdiv2.addEventListener('click',function(){
    newdiv.style.display='none';
})


newdiv.addEventListener('dragstart',function(dog){
   let selected=dog.target;
   let scontainer=dog.target.parentElement;
   
   pro.addEventListener('dragover',function(doggy){
    doggy.preventDefault();
   })

   pro.addEventListener('drop',function(){
    pro.appendChild(selected);
    selected=null;
   
  

if (scontainer.id==='com'){
    complete--;
    progress++;
}
else 
  {
    progress++;

  }


    gress.style.width=progress/total*100+'%';
     comple.style.width=complete/total*100+'%';
  console.log(scontainer.id);
   })
   
    com.addEventListener('dragover',function(doggy){
    doggy.preventDefault();
   })

   com.addEventListener('drop',function(){
    com.appendChild(selected);
    selected=null;
    if (scontainer.id==='pro'){
    progress--;
    complete++;
}
else {
complete++;
}
    console.log(complete);
    comple.style.width=complete/total*100+'%';
    
    gress.style.width=progress/total*100+'%';
   })
  })
  })

  
  




// let list=document.querySelectorAll('.list');

// for(let i=0;i<list.length;i++)
//   {
  

// }





