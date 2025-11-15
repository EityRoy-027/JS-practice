let elementscre=document.querySelector('#screen');
let elementseven=document.querySelector('#seven');
let elementeight=document.querySelector('#eight');
let elementnine=document.querySelector('#nine');
let elementplus=document.querySelector('#plus');
let elementfour=document.querySelector('#four');
let elementfive=document.querySelector('#five');
let elementsix=document.querySelector('#six');
let elementminus=document.querySelector('#minus');
let elementone=document.querySelector('#one');
let elementtwo=document.querySelector('#two');
let elementthree=document.querySelector('#three');
let elementmulti=document.querySelector('#multiply');
let elementc=document.querySelector('#c');
let elementzero=document.querySelector('#zero');
let elementeq=document.querySelector('#equal');
let elementslash=document.querySelector('#slash');
let numberone,numbertwo,operator='',result;


elementseven.addEventListener('click',function(){
 elementscre.textContent+='7';
})

elementeight.addEventListener('click',function(){
    elementscre.textContent+='8';
})
elementnine.addEventListener('click',function(){
    elementscre.textContent+='9';
})
elementplus.addEventListener('click',function(){
    if(operator==''){

    
   numberone=parseInt(elementscre.textContent);
 
    }
    else{
        if(operator=='+'){
numberone=numberone+parseInt(elementscre.textContent);
}
if(operator=='-'){
numberone=numberone-parseInt(elementscre.textContent);
}
if(operator=='x'){
numberone=numberone*parseInt(elementscre.textContent);
}
if(operator=='/'){
numberone=numberone/parseInt(elementscre.textContent);
}
    }
     operator='+';
  elementscre.textContent='';
  console.log(numberone);
   
})
elementfour.addEventListener('click',function(){
    elementscre.textContent+='4';
})
elementfive.addEventListener('click',function(){
    elementscre.textContent+='5';
})
elementsix.addEventListener('click',function(){
    elementscre.textContent+='6';
})
elementminus.addEventListener('click',function(){
    if(operator==''){

    
   numberone=parseInt(elementscre.textContent);
   
    }
    else{
       if(operator=='+'){
numberone=numberone+parseInt(elementscre.textContent);
}
if(operator=='-'){
numberone=numberone-parseInt(elementscre.textContent);
}
if(operator=='x'){
numberone=numberone*parseInt(elementscre.textContent);
}
if(operator=='/'){
numberone=numberone/parseInt(elementscre.textContent);
}
    }
    operator='-';
  elementscre.textContent='';
  console.log(numberone);
})
elementone.addEventListener('click',function(){
    elementscre.textContent+='1';
})
elementtwo.addEventListener('click',function(){
    elementscre.textContent+='2';
})
elementthree.addEventListener('click',function(){
    elementscre.textContent+='3';
})
elementmulti.addEventListener('click',function(){
  if(operator==''){

    
   numberone=parseInt(elementscre.textContent);
   
    }
    else{
       if(operator=='+'){
numberone=numberone+parseInt(elementscre.textContent);
}
if(operator=='-'){
numberone=numberone-parseInt(elementscre.textContent);
}
if(operator=='x'){
numberone=numberone*parseInt(elementscre.textContent);
}
if(operator=='/'){
numberone=numberone/parseInt(elementscre.textContent);
}
    }
    operator='x';
  elementscre.textContent='';
  console.log(numberone);
})
elementc.addEventListener('click',function(){
    result=0;
    operator='';
    numberone=0;
    numbertwo=0;
    elementscre.textContent='';
})
elementzero.addEventListener('click',function(){
    elementscre.textContent+='0';
})

elementeq.addEventListener('click',function(){

numbertwo=parseInt(elementscre.textContent);
if(operator=='+'){
result=numberone+numbertwo;
}
if(operator=='-'){
result=numberone-numbertwo;
}
if(operator=='x'){
result=numberone*numbertwo;
}
if(operator=='/'){
result=numberone/numbertwo;
}
elementscre.textContent=result;
numberone=result;
})




elementslash.addEventListener('click',function(){
   if(operator==''){

    
   numberone=parseInt(elementscre.textContent);
   
    }
    else{
       if(operator=='+'){
numberone=numberone+parseInt(elementscre.textContent);
}
if(operator=='-'){
numberone=numberone-parseInt(elementscre.textContent);
}
if(operator=='x'){
numberone=numberone*parseInt(elementscre.textContent);
}
if(operator=='/'){
numberone=numberone/parseInt(elementscre.textContent);
}
    }
    operator='/';
  elementscre.textContent='';
  console.log(numberone);
})