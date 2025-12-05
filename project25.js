let but1=document.querySelector('#but1');
let h1=document.querySelector('h1');
let ingri=document.querySelector('#ingri');
let ingr1=document.querySelector('#ingri1');
let ingri2=document.querySelector('#ingri2');
let ingri3=document.querySelector('#ingri3');
let ingri4=document.querySelector('#ingri4');
let p1=document.querySelector('#pone');
count=1;

but1.addEventListener('click',function(){
 if(count==1){
    h1.textContent='Sweet Mango Shake';
    ingri1.textContent='Mango';
    ingri2.textContent='Milk';
    ingri3.textContent='Sugar';
    ingri4.textContent='Ice Cubes';
    p1.textContent='Blend all togther--> Serve cold.';
     count++;

 }
 else if(count==2){
     h1.textContent='Creamy Garlic Pasta';
    ingri1.textContent='Spagetti';
    ingri2.textContent='Garlic';
    ingri3.textContent='Butter';
    ingri4.textContent='Salt';
    let pasta=document.createElement('div');
    pasta.textContent='Cream';
    pasta.style.backgroundColor='rgb(230, 230, 231)';
    pasta.style.height='50px';
    pasta.style.width='100%';
    pasta.style.fontSize='1.4rem';
    pasta.style.display='flex';
    pasta.style.alignItems='center';
    pasta.style.paddingLeft='10px';
    pasta.style.fontWeight='medium';
    ingri.appendChild(pasta);


    p1.textContent='Blend all togther-> Serve cold.';
     count=1;
 }
})

