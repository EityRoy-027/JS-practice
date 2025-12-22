let img=document.querySelector('#img');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');
let total=img.children.length;
let index=0;
let click=1;

// prev.addEventListener('click',function(){
//      index=(index-1+total)%total;
//     img.style.transform=`translateX(-${index*600}px)`;
    
   
// })

// next.addEventListener('click',function(){
// index=(index+1)%total;
//  img.style.transform=`translateX(-${index*600}px)`;
// })


next.addEventListener('click',function(){
  if(click==1){
    img.style.transform='translateX(-600px)';
    click++;
  }
  else if(click==2){

    img.style.transform='translateX(-1200px)';
    click++;
}
  else if(click==3){
     img.style.transform='translateX(0px)';
     click=1;
  }
})

prev.addEventListener('click',function(){
  if(click==1){
  img.style.transform='translateX(-1200px)';
    click++;
  }
  else if(click==2){
    img.style.transform='translateX(-600px)';
    click++;
  }

  else if(click==3){
    img.style.transform='translateX(0px)';
    click=1;
  }
})