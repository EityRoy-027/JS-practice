let buttons=document.querySelector('#buttonone');



buttons.addEventListener('mouseover',function(){
let maxx=window.innerWidth ;
let maxy=window.innerHeight ;    
let x=Math.floor(Math.random()*maxx);
let y=Math.floor(Math.random()*maxy);
buttons.style.marginLeft= x+'px';
console.log(maxx+maxy);
buttons.style.marginTop= y+'px';

buttons.style.transform=`scale(${1+Math.random()})`;

})