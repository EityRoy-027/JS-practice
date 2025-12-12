let nam= document.querySelector('#nam');
let tim= document.querySelector('#tim');
let but= document.querySelector('button');
let empty=document.querySelector('#empty');
let probar=document.querySelector('#probar');
let bar=document.querySelector('#bar');


but.addEventListener('click',function(){
  let newdiv=document.createElement('div');
  let butdiv=document.createElement('div');
  let start=document.createElement('button');  
  let pause=document.createElement('button'); 
  let reset=document.createElement('button'); 
  let del=document.createElement('button'); 
  let inpu=document.createElement('input');
  let p=document.createElement('p');
  let p2=document.createElement('p');

  newdiv.style.height='100%';
  newdiv.style.width='70%';
  newdiv.style.display='flex';
  newdiv.style.flexDirection='column';
  newdiv.style.justifyContent='center';
  newdiv.style.border='1px solid silver';
  newdiv.style.backgroundColor='white';
  newdiv.style.borderRadius='15px';

  p.textContent=nam.value;
  p.style.paddingTop='20px';
  p.style.marginLeft='40px';
  p.style.fontSize='1.1em';
  p.style.fontWeight='bold';
  p2.textContent=tim.value+':00';
  p2.style.marginLeft='40px';
  p2.style.fontWeight='bold';
  p2.style.fontSize='2.2em';

  start.textContent='Start';
  pause.textContent='Pause';
  reset.textContent='Reset';
  del.textContent='Delete';

  start.style.backgroundColor='rgb(16, 168, 5)';
  start.style.color='white';
  start.style.width='100px';
  start.style.height='40px';
  pause.style.backgroundColor='orange';
  pause.style.color='black';
  pause.style.width='100px';
  pause.style.height='40px';
  reset.style.backgroundColor='rgb(11, 223, 226)';
  reset.style.color='white';
  reset.style.width='100px';
  reset.style.height='40px';
  del.style.backgroundColor='rgb(221, 52, 80)';
  del.style.color='white';
  del.style.width='100px';
  del.style.height='40px';
  
  butdiv.style.height='70px';
  butdiv.style.width='60%';
  butdiv.style.display='flex';
  butdiv.style.flexDirection='raw';
  butdiv.style.justifyContent='center';
  butdiv.style.alignItems='center';
  butdiv.style.gap='15px';
  butdiv.style.marginLeft='40px';

  // bar.style.width='100%';
  // bar=curenttime /totaltime * 100;
 
  newdiv.appendChild(p);
  newdiv.appendChild(p2);
  butdiv.appendChild(start);
  butdiv.appendChild(pause);
  butdiv.appendChild(reset);
  butdiv.appendChild(del);
  newdiv.appendChild(butdiv);
  empty.appendChild(newdiv);
 
  let interval;
  let timeSec = tim.value * 60;
  let totaltime = timeSec;
  
  start.addEventListener('click',function(){
  if (interval) return;    
  interval = setInterval (function() {
	timeSec--;
	p2.textContent = format(timeSec);
       if (timeSec <=0) {
		clearInterval(timeSec);
		interval = null;
	}
}, 1000)
})  

pause.addEventListener('click',function(){
clearInterval (interval);
interval = null;

 }
)

reset.addEventListener('click',function(){
 clearInterval(interval) ;
interval= null ;
let cusec = totaltime;
p2.textContent = format(cusec);
})

del.addEventListener('click',function(){
newdiv.style.display='none';
})

})
function format(sec) {
	let m = Math.floor(sec/60);
	let s = sec%60;
  let str = m + ":" + (s<10? "0": "")+s;
  return str;
  
}

