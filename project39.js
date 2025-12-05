let input=document.querySelector('input');
let sub=document.querySelector('#sub');
let empty=document.querySelector('#empty');
let letter='0123456789ABCDEF';
let color='#';


input.addEventListener('input',function(){

    for(let i=0;i<6;i++){
        color=color+letter[Math.floor(Math.random()*16)];
    }
    console.log(color);
    let word=input.value.split(' ');
    empty.innerHTML= word.map(wor=> `<span style=color:${color}> ${wor}</span>`).join(' ');
    color='#';


})