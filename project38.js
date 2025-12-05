let scold=document.querySelector('#scold');
let coldp=document.querySelector('#coldp');
let slide=document.querySelector('#slide');

slide.addEventListener('input',function(){

     if(slide.value<50 && slide.value>0)
    {
    scold.textContent='🥶';
    coldp.textContent='Feeling Cold and Calm';
    document.body.style.backgroundColor=' rgb(16, 77, 218)';
    }

    else if(slide.value>50 && slide.value<100 )
    {
    scold.textContent='😌';
    coldp.textContent='Warm and Pleasent';
    document.body.style.backgroundColor='yellow';
    }

    else if(slide.value>100 && slide.value<150)
    {
    scold.textContent='🙂';
    coldp.textContent='Relaxed and Comfortable';
    document.body.style.backgroundColor='green';
    }

    else if(slide.value>150 && slide.value<200)
    {
    scold.textContent='🥵';
    coldp.textContent='Feeling hot and energetic';
    document.body.style.backgroundColor='orange';
    }

    else if(slide.value>200)
    {
    scold.textContent='❤️';
    coldp.textContent='Feeling Loved';
    document.body.style.backgroundColor='pink';
    }




    


})
