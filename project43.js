let circle=document.querySelector('#circle');
let slide=document.querySelector('#slide');

slide.addEventListener('input',function(){
    
    if(slide.value<50 && slide.value>0){
    
    circle.style.backgroundColor='red';
    circle.textContent='Angry😡';
    }

    else if(slide.value>50 && slide.value<100){
     circle.style.backgroundColor='yellow';
     circle.textContent='Annoyed😤';
    }

     else if(slide.value>100 && slide.value<150){
     circle.style.backgroundColor='gray';
     circle.textContent='Neutral😕';
    }

    else if(slide.value>150 && slide.value<200){
     circle.style.backgroundColor='green';
     circle.textContent='Happy😄';
    }
    

})
