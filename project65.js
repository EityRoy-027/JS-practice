let boxa=document.querySelector('#boxa');
let boxb=document.querySelector('#boxb');
let boxc=document.querySelector('#boxc');
let box1=document.querySelector('#box1');
let box2=document.querySelector('#box2');
let scale=document.querySelector('#scale');
let element=document.querySelectorAll('.element');
let left=0;
let right=0;
for(i=0;i<element.length;i++){

element[i].addEventListener('dragstart',function(inputs){
    let selected=inputs.target;

box1.addEventListener('dragover',function(outputs){
    outputs.preventDefault();
})

box1.addEventListener('drop',function(){

if(!selected){
return;
}    
box1.appendChild(selected); 
left+= parseInt(selected.dataset.weight);  

if(left>right){
    scale.style.transform='rotate(-10deg)';
}
else if(left==right){
    scale.style.transform='rotate(0deg)';
}
 
selected=null;
})

box2.addEventListener('dragover',function(outputs){
    outputs.preventDefault();
})


box2.addEventListener('drop',function(){
 if(!selected){
return;
}
box2.appendChild(selected);  
right+= parseInt(selected.dataset.weight); 

if(right>left){
    scale.style.transform='rotate(10deg)';
}
else if(left==right){
    scale.style.transform='rotate(0deg)';
}

selected=null;
})
})
}


