let bat1=document.querySelector('#bat1');
let bat2=document.querySelector('#bat2');
let bat3=document.querySelector('#bat3');
let bat4=document.querySelector('#bat4');
let screen=document.querySelector('#screen');
let display=document.querySelector('#display');
let bats=document.querySelector('#bats');
let charge=document.querySelectorAll('.charge');
let batsp=document.querySelector('#bats');
let count=1;
let selected=null;

for(let i=0;i<charge.length;i++){

charge[i].addEventListener('dragstart',function(start){

selected=start.target;

display.addEventListener('dragover',function(move){
move.preventDefault();
})

display.addEventListener('drop',function(){
// screen.appendChild(selected);
console.log(selected);
if(!selected){
return; 
}  

if(count==1){
screen.style.height='25%';
screen.style.backgroundColor='rgb(9, 186, 29)';
batsp.textContent='25%';
bat1.style.pointerEvents='none';
bat1.style.opacity='0.5';

}

else if(count==2){
screen.style.height='50%';
screen.style.backgroundColor='rgb(9, 186, 29)';
batsp.textContent='50%';
bat2.style.pointerEvents='none';
bat2.style.opacity='0.5';

}

else if(count==3){
screen.style.height='75%';
screen.style.backgroundColor='rgb(9, 186, 29)';
batsp.textContent='75%';
bat3.style.pointerEvents='none';
bat3.style.opacity='0.5';

}

else if(count==4){
screen.style.height='100%';
screen.style.backgroundColor='rgb(9, 186, 29)';
batsp.textContent='100%';
bat4.style.pointerEvents='none';
bat4.style.opacity='0.5';

}
count++;
selected=null;
})
})
}


