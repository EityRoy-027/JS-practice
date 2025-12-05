

let buttons=document.querySelector('#butfaq');
let input1=document.querySelector('#input1');
let input2=document.querySelector('#input2');
let empty=document.querySelector('#empty');
let count=1;
let tempdiv;

buttons.addEventListener('click',function(){
   
    if(count==1){
   let newdiv=document.createElement('div');
    let newdiv2=document.createElement('div');
    let newdiv3=document.createElement('div');
    let plusdiv=document.createElement('div');
    let editdiv=document.createElement('button');
    let deletediv=document.createElement('button');
    let p=document.createElement('p');
    let p2=document.createElement('p');
    p.id='change';

    editdiv.textContent='Edit';
    deletediv.textContent='Delete';
    editdiv.style.width='70px';
    editdiv.style.height='50px';
    editdiv.style.backgroundColor='black';
    editdiv.style.textAlign='center';
    editdiv.style.color='white';
    editdiv.style.border='none';

    deletediv.style.width='70px';
    deletediv.style.height='50px';
    deletediv.style.textAlign='center';
    deletediv.style.backgroundColor='black';
    deletediv.style.color='white';
    deletediv.style.border='none';
    
    p.textContent=input1.value;
    newdiv.style.width='100%';
    newdiv.style.height='90%';
    newdiv.style.display='flex';
    newdiv.style.flexDirection='column';
    newdiv.style.padding='10px';
    newdiv.style.fontSize='1.8em';
    newdiv.style.backgroundColor='aliceblue';
    newdiv.style.gap='20px';

    newdiv2.style.width='100%';
    newdiv2.style.height='90%';
    newdiv2.style.display='flex';

    p.style.width='95%';

    newdiv.style.backgroundColor='aliceblue';
    newdiv.style.gap='20px';
    newdiv3.style.width='90%';
    newdiv3.style.height='90%';
    newdiv3.style.display='flex';
    newdiv3.style.gap='20px';
    
    plusdiv.style.width='5%';
    plusdiv.textContent='+';
    plusdiv.style.fontSize='1.3em';
    
    p2.textContent=input2.value;
    p2.style.display='none';

    newdiv2.appendChild(p);
    newdiv3.appendChild(editdiv);
    newdiv3.appendChild(deletediv);
    newdiv.appendChild(newdiv2);
    newdiv.appendChild(p2);
    newdiv.appendChild(newdiv3);
    
    newdiv2.appendChild(plusdiv);
    empty.appendChild(newdiv);
   
    plusdiv.addEventListener('click',function(){
         p2.style.display='block';
    })

    deletediv.addEventListener('click',function(){
        newdiv.style.display='none';
    })


    editdiv.addEventListener('click',function(){
        count=0;
        input1.focus();
        let temp=document.querySelector('#newdiv');
        tempdiv=temp.querySelector('p');
        console.log(tempdiv);
    })
}

    if(count==0){
        console.log(tempdiv+count);
      tempdiv.textContent=input1.value;  
      count=1;    
    }

})