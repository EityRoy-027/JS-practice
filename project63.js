let slide=document.querySelector('#slide');
let skill=document.querySelector('#skill');
let learn=document.querySelector('#learn');
let master=document.querySelector('#master');
let html=document.querySelector('#html');
let css=document.querySelector('#css');
let js=document.querySelector('#js');
let react=document.querySelector('#react');
let list=document.querySelectorAll('.list');
let learnslide=0;
let masterslide=0;

for(i=0;i<list.length;i++){

    list[i].addEventListener('dragstart',function(start){
     let selected=start.target;
     let progress=start.target.parentElement;
     

    learn.addEventListener('dragover',function(moving){
        moving.preventDefault();
     })

    learn.addEventListener('drop',function(){
        learn.appendChild(selected);
        if(progress.id==='master'){
          masterslide--;
          learnslide++;  
        }
        else{
           learnslide++; 
        }
        
        console.log(learnslide+'l');
        slide.style.width=(learnslide*0.5+masterslide)/4*100+'%'; //combine slide//
        slide.style.backgroundColor='aquamarin';
        selected=null;
    })
    
    master.addEventListener('dragover',function(moving){
        moving.preventDefault();
     })

   master.addEventListener('drop',function(){
      master.appendChild(selected);
        if(progress.id==='learn'){
          masterslide++;
          learnslide--;  
        }
        else{
           masterslide++; 
        }
       slide.style.width=(learnslide*0.5+masterslide)/4*100+'%';
      slide.style.backgroundColor='pink';
      console.log(masterslide+'n');
        selected=null;
    })

    })
}