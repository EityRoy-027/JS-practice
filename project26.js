let happy=document.querySelector('#happy');
let sad=document.querySelector('#sad');
let angry=document.querySelector('#angry');
let surprised=document.querySelector('#surprised');
let tired=document.querySelector('#tired');
let empty=document.querySelector('#empty');

happy.addEventListener('click',function(){
    let happydiv=document.createElement('div');
    happydiv.style.width='100%'
    happydiv.style.height='30px';
    happydiv.style.backgroundColor='lightyellow';
    happydiv.style.display='flex';
    happydiv.style.flexDirection='row'
    happydiv.style.alignItems='space-between';

    empty.style.display='flex';
    empty.style.flexDirection='column';
    
    let date=new Date();
    const hours = date.getHours().toString().padStart(2, '0');   // 0-23
const minutes = date.getMinutes().toString().padStart(2, '0'); // 0-59
const seconds = date.getSeconds().toString().padStart(2, '0'); // 0-59

// Format as HH:MM:SS
const timeString = `${hours}:${minutes}:${seconds}`;
    happydiv.textContent='😄\t'+timeString;
    empty.appendChild(happydiv);

    
})

sad.addEventListener('click',function(){
    let saddiv=document.createElement('div');
    saddiv.style.width='100%'
    saddiv.style.height='30px';
    saddiv.style.backgroundColor='lightyellow';
    saddiv.style.display='flex';
    saddiv.style.flexDirection='row'
    saddiv.style.alignItems='space-between';

    empty.style.display='flex';
    empty.style.flexDirection='column';
    
    let date=new Date();
    const hours = date.getHours().toString().padStart(2, '0');   // 0-23
const minutes = date.getMinutes().toString().padStart(2, '0'); // 0-59
const seconds = date.getSeconds().toString().padStart(2, '0'); // 0-59

// Format as HH:MM:SS
const timeString = `${hours}:${minutes}:${seconds}`;
    saddiv.textContent='😔'+'\t\t'+timeString;
    empty.appendChild(saddiv);

    
})

angry.addEventListener('click',function(){
    let angrydiv=document.createElement('div');
    angrydiv.style.width='100%'
    angrydiv.style.height='30px';
    angrydiv.style.backgroundColor='lightyellow';
    angrydiv.style.display='flex';
    angrydiv.style.flexDirection='row'
    angrydiv.style.alignItems='space-between';

    empty.style.display='flex';
    empty.style.flexDirection='column';
    empty.style.gap='10px';
    
    
    let date=new Date();
    const hours = date.getHours().toString().padStart(2, '0');   // 0-23
const minutes = date.getMinutes().toString().padStart(2, '0'); // 0-59
const seconds = date.getSeconds().toString().padStart(2, '0'); // 0-59

// Format as HH:MM:SS
const timeString = `${hours}:${minutes}:${seconds}`;
    angrydiv.textContent='😡'+'\t\t'+timeString;
    empty.appendChild(angrydiv);

    
})

surprised.addEventListener('click',function(){
    let surpriseddiv=document.createElement('div');
    surpriseddiv.style.width='100%'
    surpriseddiv.style.height='30px';
    surpriseddiv.style.backgroundColor='lightyellow';
    surpriseddiv.style.display='flex';
    surpriseddiv.style.flexDirection='row'
    surpriseddiv.style.alignItems='space-between';

    empty.style.display='flex';
    empty.style.flexDirection='column';
    
    let date=new Date();
    const hours = date.getHours().toString().padStart(2, '0');   // 0-23
const minutes = date.getMinutes().toString().padStart(2, '0'); // 0-59
const seconds = date.getSeconds().toString().padStart(2, '0'); // 0-59

// Format as HH:MM:SS
const timeString = `${hours}:${minutes}:${seconds}`;
    surpriseddiv.textContent='😱'+'\t\t'+timeString;
    empty.appendChild(surpriseddiv);

    
})

tired.addEventListener('click',function(){
    let tireddiv=document.createElement('div');
    tireddiv.style.width='100%'
    tireddiv.style.height='30px';
    tireddiv.style.backgroundColor='lightyellow';
    tireddiv.style.display='flex';
    tireddiv.style.flexDirection='row'
    tireddiv.style.alignItems='space-between';

    empty.style.display='flex';
    empty.style.flexDirection='column';
    
    let date=new Date();
    const hours = date.getHours().toString().padStart(2, '0');   // 0-23
const minutes = date.getMinutes().toString().padStart(2, '0'); // 0-59
const seconds = date.getSeconds().toString().padStart(2, '0'); // 0-59

// Format as HH:MM:SS
const timeString = `${hours}:${minutes}:${seconds}`;
    tireddiv.textContent='🤧'+'\t\t'+timeString;
    empty.appendChild(tireddiv);

    
})

