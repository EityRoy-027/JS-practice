let input1=document.querySelector('#inputone');
let color=document.querySelector('#color');
let but=document.querySelector('button');
let search=document.querySelector('#inputtwo');
let empty=document.querySelector('#empty');
let array=[];


but.addEventListener('click',function(){
       let newdiv=document.createElement('div');
        newdiv.textContent=input1.value;
        newdiv.style.backgroundColor=color.value;
       
        newdiv.style.borderRadius='10PX';
        newdiv.style.display='flex';
        newdiv.style.flexDirection='column';
        newdiv.style.height='200px';
        empty.appendChild(newdiv);
        array.push(newdiv);
})

search.addEventListener('input',function(){
        empty.innerHTML= ' ' ;
 for ( let i=0; i<array.length; i++) {
 if (search.value=== array[i].textContent ) {
        console.log( array[0].textContent);
      
        empty.appendChild(array[i]);
} 
}  
})
