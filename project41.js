let first1=document.querySelector('#first1');
let first2=document.querySelector('#first2');
let first3=document.querySelector('#first3');
let first4=document.querySelector('#first4');
let sec1=document.querySelector('#sec1');
let sec2=document.querySelector('#sec2');
let sec3=document.querySelector('#sec3');
let sec4=document.querySelector('#sec4');
let third1=document.querySelector('#third1');
let third2=document.querySelector('#third2');
let third3=document.querySelector('#third3');
let third4=document.querySelector('#third4');
let four1=document.querySelector('#four1');
let four2=document.querySelector('#four2');
let four3=document.querySelector('#four3');
let four4=document.querySelector('#four4');
let colp=document.querySelector('#colp');
let reset=document.querySelector('#resetb');
let empty=document.querySelector('#empty');
let color=['aqua','black','blue','pink','fuchsia','orange','gray','green','maroon','navy','olive','red','purple','silver','yellow','brown'];

first1.addEventListener('click',function(){
   first1.style.backgroundColor=color[Math.floor( Math.random()*color.length)];

    if(first1.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);

})
first2.addEventListener('click',function(){
    first2.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(first2.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
first3.addEventListener('click',function(){
     first3.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(first3.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
first4.addEventListener('click',function(){
    first4.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(first4.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
sec1.addEventListener('click',function(){
    sec1.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(sec1.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*16)],true);
    
})
sec2.addEventListener('click',function(){
    sec2.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(sec2.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
sec3.addEventListener('click',function(){
    sec3.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(sec3.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
sec4.addEventListener('click',function(){
    sec4.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(sec4.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
third1.addEventListener('click',function(){
     third1.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(third1.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
third2.addEventListener('click',function(){
    third2.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(third2.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
     third2.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
third3.addEventListener('click',function(){
    third3.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(third3.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
third4.addEventListener('click',function(){
    third4.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(third4.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
four1.addEventListener('click',function(){
    four1.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(four1.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
four2.addEventListener('click',function(){
    four2.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(four2.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
    
})
four3.addEventListener('click',function(){
    four3.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(four3.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
})
four4.addEventListener('click',function(){
    four4.style.backgroundColor=color[Math.floor( Math.random()*color.length)];
    if(four4.style.backgroundColor==colp.innerText){
    empty.textContent='Correct';
    }
    color.splice([Math.floor( Math.random()*color.length)],true);
})

reset.addEventListener('click',function(){
   

    colp.textContent=color[Math.floor(Math.random()*color.length)];


    })







