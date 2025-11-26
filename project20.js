let buttons=document.querySelector('#buttonone');
let p=document.querySelector('#pone');
count=1;

buttons.addEventListener('click',function(){
    if(count==1){
        p.textContent='Dont let yesterday take up too much of today.';
        count++;
    }

    else if(count==2){
         p.textContent='Its not wheather you get knocked down,Its get whether you get up.';
         count++;
    }

    else if(count==3){
        p.textContent='The harder you work for something, The greater you will feel when yoou achieve it.';
        count=1;
    }
})