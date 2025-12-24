let slide=document.querySelector('#slide');
let name=document.querySelector('#name');
let selrole=document.querySelector('#selrole');
let skill=document.querySelector('#skill');
let next=document.querySelector('#next');
let np=document.querySelector('#np');
let rp=document.querySelector('#rp');
let sp=document.querySelector('#sp');
let inexp=document.querySelector('#inexp');
let click=1;

next.addEventListener('click', function()  {

    click++;

    if (click === 2) {
        name.style.display = 'none';
        selrole.style.display = 'block';
        skill.style.display = 'none';
        inexp.style.display = 'none';
        prev.style.display = 'block';
    }

    else if (click === 3) {
        name.style.display = 'none';
        selrole.style.display = 'none';
        skill.style.display = 'block';
        inexp.style.display = 'none';
    }

    else if (click === 4) {
        name.style.display = 'none';
        selrole.style.display = 'none';
        skill.style.display = 'none';
         inexp.style.display = 'block';
         next.style.display='none';
    }

  
})

prev.addEventListener('click',function(){
    click--;
    console.log(click);

    if (click === 2) {
        name.style.display = 'none';
        selrole.style.display = 'block';
        skill.style.display = 'none';
        inexp.style.display = 'none';
       
    }

    else if (click === 3) {
        name.style.display = 'none';
        selrole.style.display = 'none';
        skill.style.display = 'block';
        inexp.style.display = 'none';
    }

    else if (click === 4) {
        name.style.display = 'none';
        selrole.style.display = 'none';
        skill.style.display = 'none';
        inexp.style.display = 'block';
    }

    else if (click === 1) {
        name.style.display = 'block';
        selrole.style.display = 'none';
        skill.style.display = 'none';
        inexp.style.display = 'none';
        click = 1;
        prev.style.display='none';
    }
})

name.addEventListener('input',function(){
    np.textContent='Name:-'+name.value;
})

selrole.addEventListener('change',function(){
rp.textContent='Role:-'+selrole.value;
})
skill.addEventListener('input',function(){
sp.textContent='Skill:-'+skill.value;
})
inexp.addEventListener('input',function(){
    exp.textContent='Experience:-'+inexp.value;
})



   
  
   
   
   