let elementin=document.querySelector('#inputone');
let elementbutton=document.querySelector('#buttonone');
let flag=0;
let elementvalue=elementin.value;

elementbutton.addEventListener('click',function(){
if(elementin.value!='******'){
    elementvalue=elementin.value;
}

    if(flag==1){
    
    elementin.value=elementvalue;
    flag=0;
}
else{
    
     elementin.value='******';
    flag=1;

}
})
