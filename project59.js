let bin=document.querySelector('#bin');
let gin=document.querySelector('#gin');
let blin=document.querySelector('#blin');
let bs=document.querySelector('#bs');
let gs=document.querySelector('#gs');
let bls=document.querySelector('#bls');
let box=document.querySelector('#box');
let img=document.querySelectorAll('img');
let change=600;
let timer=60;
let timeup;

timeup=setInterval(function(){
    timer--;  
 if(timer<=0){
  
box.style.transform=`translateX(-${change}px)`;
timer=60; 
if(change!=1800){
    change+=600;

}
else{
    change=0;
}   
 } 
},60)

bin.addEventListener('input',function(){
    console.log(img);
    for(let i=0;i<4;i++){
    img[i].style.filter=`brightness(${bin.value}%)`;
    }
})

gin.addEventListener('input',function(){
    console.log(img);
    for(let i=0;i<4;i++){
    img[i].style.filter=`Grayscale(${gin.value}%)`;
    }
})

blin.addEventListener('input',function(){
    console.log(img);
    for(let i=0;i<4;i++){
    img[i].style.filter=`Blur(${blin.value}%)`;
    }
})
