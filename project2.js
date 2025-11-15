let element=document.querySelector('#externaldiv');
let element2=document.querySelector('#divone');
let element3=document.querySelector('#divtwo');
let element4=document.querySelector('#divthree');
let flag=1;


element2.addEventListener('click',function(){
   
let element5=document.createElement('div'); 
 if(flag==1){ 

element5.textContent='Javascript is a programming language used to make websites interactive.'
element5.style.color='grey';
element5.style.fontSize='medium';
element5.style.marginLeft='10px';
element2.appendChild(element5);
flag=0;

}
else{
    element2.lastChild.style.display='none';
    flag=1;
}

})

element3.addEventListener('click',function(){
  
let element6=document.createElement('div');
if(flag==1){
element6.textContent='Dom stands for Document Object Model,it lets js interact with HTML.'
element6.style.color='grey';
element6.style.fontSize='medium';
element6.style.marginLeft='10px';
element3.appendChild(element6);
flag=0;
}
else{
element3.lastChild.style.display='none';
flag=1;
}

})


element4.addEventListener('click',function(){
  
let element7=document.createElement('div');
if(flag==1){
element7.textContent='CSS used to style and design the appearance of web pages.'
element7.style.color='grey';
element7.style.fontSize='medium';
element7.style.marginLeft='10px';
element4.appendChild(element7);
flag=0;
}
else{
    element4.lastChild.style.display='none';
    flag=1;
}
}


)
