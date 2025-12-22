let img=document.querySelectorAll('#container2 img');
let box=document.querySelector('#box');
let con=document.querySelector('#container2');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');

let index=0;
let click=1;

next.addEventListener('click',function(){
    if(click==1){
        box.style.transform='translateX(-600px)';
       img[0].style.opacity=0.5;
       img[1].style.opacity=1;
       img[2].style.opacity=0.5;
        click++;
    }

    else if(click==2){
        box.style.transform='translateX(-1200px)';
        img[0].style.opacity=0.5;
        img[1].style.opacity=0.5;
        img[2].style.opacity=1;
        click++;
    }
    else if (click ==3){
 box.style.transform = 'translateX(0px)';
         img[0].style.opacity=1;
         img[1].style.opacity=0.5;
         img[2].style.opacity=0.5;
        click++;
click = 1;
 }
})

prev.addEventListener('click',function(){
    if(click==1){
        box.style.transform='translateX(-1200px)';
         img[0].style.opacity=0.5;
         img[1].style.opacity=0.5;
         img[2].style.opacity=1;
        click=1;
    }

    else if(click==2){
        box.style.transform='translateX(0px)';
         img[0].style.opacity=1;
         img[1].style.opacity=0.5;
         img[2].style.opacity=0.5;
        click--;
    }
    else if (click ==3){
 box.style.transform = 'translateX(-600px)';
         img[0].style.opacity=0.5;
         img[1].style.opacity=1;
         img[2].style.opacity=0.5;
click--;
 }
})

img[0].addEventListener('click',function(){
img[0].style.opacity=1;
box.style.transform = 'translateX(0px)';
img[1].style.opacity=0.5;
img[2].style.opacity=0.5;
})

img[1].addEventListener('click',function(){
img[1].style.opacity=1;
box.style.transform = 'translateX(-600px)';
img[1].style.display='block';
img[1].style.opacity=1;
img[2].style.opacity=0.5;
img[0].style.opacity=0.5;
})

img[2].addEventListener('click',function(){
img[2].style.opacity=1;
box.style.transform = 'translateX(-1200px)';
img[2].style.display='block';
img[2].style.opacity=1;
img[0].style.opacity=0.5;
img[1].style.opacity=0.5;
})

