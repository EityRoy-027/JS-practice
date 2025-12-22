let style=document.querySelector('#style');
let logic=document.querySelector('#logic');
let struc=document.querySelector('#struc');
let html=document.querySelector('#html');
let css=document.querySelector('#css');
let js=document.querySelector('#js');

style.addEventListener('dragstart',function(job){
    let selected=job.target;

    html.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    html.addEventListener('drop',function(){
        html.appendChild(selected);
        selected.style.backgroundColor='red';
        selected=null;
       
    })
 
   css.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    css.addEventListener('drop',function(){
        css.appendChild(selected);
        selected.style.backgroundColor='green';
        selected=null;
         
    })

    js.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    js.addEventListener('drop',function(){
        js.appendChild(selected);
        selected.style.backgroundColor='red';
        selected=null;
       
    })

  
})

logic.addEventListener('dragstart',function(job){
   
    let selected=job.target;

    html.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    html.addEventListener('drop',function(){
        html.appendChild(selected);
        selected.style.backgroundColor='red';

        selected=null;
    })
 
   css.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    css.addEventListener('drop',function(){
        css.appendChild(selected);
        selected.style.backgroundColor='red';
        selected=null;
    })

     
    js.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    js.addEventListener('drop',function(){
        js.appendChild(selected);
        selected.style.backgroundColor='green';
        selected=null;
    })
})

struc.addEventListener('dragstart',function(job){
    console.log(job);
    let selected=job.target;

    html.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    html.addEventListener('drop',function(){
        html.appendChild(selected);
        selected.style.backgroundColor='red';
        selected=null;
    })
 
   css.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    css.addEventListener('drop',function(){
        css.appendChild(selected);
        selected.style.backgroundColor='red';
        selected=null;
    })

     
    js.addEventListener('dragover',function(abroad){
        abroad.preventDefault();
    })
    js.addEventListener('drop',function(){
        js.appendChild(selected);
        selected.style.backgroundColor='green';
        selected=null;
    })

})