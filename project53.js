let st=document.querySelector('#st');
let course=document.querySelector('#course');
let offp=document.querySelector('#offp');
let slide=document.querySelector('#slide');
let slide1=document.querySelector('#slide1');
let slide2=document.querySelector('#slide2');
let js=document.querySelector('#js');
let java=document.querySelector('#java');
let python=document.querySelector('#python');
let jsvote=document.querySelector('#jsvote');
let jsvotes=document.querySelector('#jsvotes');
let jsvotes2=document.querySelector('#jsvotes2');
let jvote=document.querySelector('#jvote');
let jvotes=document.querySelector('#jvotes');
let jvotes2=document.querySelector('#jvotes2');
let pvote=document.querySelector('#pvote');
let pvotes=document.querySelector('#pvotes');
let pvotes2=document.querySelector('#pvotes2');
let timeStart=15;
let timer;
let total;

function updateTotal() {
  jscount = parseInt(jsvotes.textContent);
  jcount  = parseInt(jvotes.textContent);
  pcount  = parseInt(pvotes.textContent);
  total   = jscount + jcount + pcount;
}


timer=setInterval(function(){
if(timeStart>0){
    timeStart=timeStart-1;
    st.textContent=timeStart;
 
}
if((timeStart<=0)&&(timeStart<15)){
    clearInterval(timer);
    timer=null;
    js.style.pointerEvents = "none";
    java.style.pointerEvents = "none";
    python.style.pointerEvents = "none";
    offp.style.display='block';
}
},1000)

js.addEventListener('click',function(){
jsvote.style.display='block';    
jsvotes.textContent=parseInt(jsvotes.textContent)+1;
jsvotes2.textContent=parseInt(jsvotes2.textContent)+1;

 updateTotal();
 slide.style.width=jscount/total*100+'%';
 slide1.style.width=pcount/total*100+'%';
 slide2.style.width=jcount/total*100+'%';
})

python.addEventListener('click',function(){
pvote.style.display='block';    
pvotes.textContent=parseInt(pvotes.textContent)+1;
pvotes2.textContent=parseInt(pvotes2.textContent)+1;

 
updateTotal();
 slide.style.width=jscount/total*100+'%';
 slide1.style.width=pcount/total*100+'%';
 slide2.style.width=jcount/total*100+'%';
})
java.addEventListener('click',function(){
jvote.style.display='block';    
jvotes.textContent=parseInt(jvotes.textContent)+1;
jvotes2.textContent=parseInt(jvotes2.textContent)+1;

updateTotal();
slide.style.width=jscount/total*100+'%';
slide1.style.width=pcount/total*100+'%';
slide2.style.width=jcount/total*100+'%';
})

