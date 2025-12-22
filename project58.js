let img=document.querySelector('#img');
let total=img.children.length;
let slide=document.querySelector('#slide');
let button=document.querySelector('button');
let change=600;
let timer=100;
let timeup;
let click=1;

timeup=setInterval(function(){
  
if(timer<=0){
img.style.transform=`translateX(-${change}px)`;
timer=100;  

if(change!=1200){
    change+=600;

}
else{
    change=0;
}
}
button.addEventListener('click',function(){
    if(click==1){
        clearInterval(timeup);
        timeup=null;
        click++;
        button.textContent='Resume';
    }
    else if(click==2) {
       timeup=setInterval(function(){
        button.textContent='Pause';
  
if(timer<=0){
img.style.transform=`translateX(-${change}px)`;
timer=100;  

if(change!=1200){
    change+=600;

}
else{
    change=0;
}
}


timer--;
 slide.style.width=timer+'%';   
},60) 

        click=1;
    }
})

timer--;
 slide.style.width=timer+'%';   
},60)