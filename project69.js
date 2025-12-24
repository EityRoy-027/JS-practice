let empty=document.querySelector('#empty');
let button=document.querySelector('button');
let signa=document.querySelector('#signa');
let signb=document.querySelector('#signb');
let signc=document.querySelector('#signc');
let signd=document.querySelector('#signd');

let pricep=document.querySelector('#pricep');
let pricepb=document.querySelector('#pricepb');
let pricec=document.querySelector('#pricec');
let priced=document.querySelector('#priced');

let batp=document.querySelector('#batp');
let batpb=document.querySelector('#batpb');
let batpc=document.querySelector('#batpc');
let batpd=document.querySelector('#batpd');

let camp=document.querySelector('#camp');
let campb=document.querySelector('#campb');
let campc=document.querySelector('#campc');
let campd=document.querySelector('#campd');
let count=0;
let compareA={name:'',price:'',battery:'',camera:''};
let compareB={name:'',price:'',battery:'',camera:''};



signa.addEventListener('change',function(click){

    if(click.target.checked){
        count++;
    }
    
    if(count==1){
        compareA.name='Phone A';
        compareA.price='$30000';
        compareA.battery='4500mAh';
        compareA.camera='48MP';
    }
  
     else if(count==2){
        compareB.name='Phone A';
        compareB.price='$30000';
        compareB.battery='4500mAh';
        compareB.camera='48MP';
    }
    if(count==2){
        button.disabled=false;
        click=0;
        button.style.backgroundColor='red';
    }
    console.log(count);
})

signb.addEventListener('change',function(click){

    if(click.target.checked){
        count++;
    }
  
    if(count==1){
        compareA.name='Phone B';
        compareA.price='$35000';
        compareA.battery='5000mAh';
        compareA.camera='64MP';
    }
  
     else if(count==2){
        compareB.name='Phone B';
        compareB.price='$35000';
        compareB.battery='5000mAh';
        compareB.camera='64MP';
    }
   console.log(compareA);

    if(count==2){
        button.disabled=false;
        click=0;
        button.style.backgroundColor='red';
}

})


signc.addEventListener('change',function(click){

    if(click.target.checked){
        count++;
    }
   
    
    if(count==1){
        compareA.name='Phone C';
        compareA.price='$28000';
        compareA.battery='4000mAh';
        compareA.camera='50MP';
    }
  
     else if(count==2){
        compareB.name='Phone C';
        compareB.price='$28000';
        compareB.battery='4000mAh';
        compareB.camera='50MP';
    }

    if(count==2){
        button.disabled=false;
        click=0;
        button.style.backgroundColor='red';
    }
})

signd.addEventListener('change',function(click){

    if(click.target.checked){
        count++;
    }
   
  
    if(count==1){
        compareA.name='Phone D';
        compareA.price='$42000';
        compareA.battery='5200mAh';
        compareA.camera='108MP';
    }
  
     else if(count==2){
        compareB.name='Phone D';
        compareB.price='$42000';
        compareB.battery='5200mAh';
        compareB.camera='108MP';
    }

    if(count==2){
        button.disabled=false;
        click=0;
        button.style.backgroundColor='red';
    }
})

button.addEventListener('click',function(){
   let table= document.createElement('table');
   let thead=document.createElement('thead');
   let tr=document.createElement('tr');
   let td1=document.createElement('td');
   let td2=document.createElement('td');
   let td3=document.createElement('td');
   let tbody=document.createElement('tbody');
   let tr1=document.createElement('tr');
   let tr2=document.createElement('tr');
   let tr3=document.createElement('tr');
   let td4=document.createElement('td');
   let td5=document.createElement('td');
   let td6=document.createElement('td');
   let td7=document.createElement('td');
   let td8=document.createElement('td');
   let td9=document.createElement('td');
   let td10=document.createElement('td');
   let td11=document.createElement('td');
   let td12=document.createElement('td');

   td1.textContent='Feature';
   td2.textContent=compareA.name;
   td3.textContent=compareB.name;

   tr.appendChild(td1);
    tr.appendChild(td2);
     tr.appendChild(td3);
     thead.appendChild(tr);

    td4.textContent='Price';
   td5.textContent=compareA.price;
   td6.textContent=compareB.price;

   tr1.appendChild(td4);
   tr1.appendChild(td5);
   tr1.appendChild(td6);

   td7.textContent='Battery';
   td8.textContent=compareA.battery;
   td9.textContent=compareB.battery;
   tr2.appendChild(td7);
   tr2.appendChild(td8);
   tr2.appendChild(td9);

   td10.textContent='Camera';
   td11.textContent=compareA.camera;
   td12.textContent=compareB.camera;
   tr3.appendChild(td10);
   tr3.appendChild(td11);
   tr3.appendChild(td12);


   tbody.appendChild(tr1);
   tbody.appendChild(tr2);
   tbody.appendChild(tr3);

   table.appendChild(thead);
   table.appendChild(tbody);
   empty.appendChild(table);






})