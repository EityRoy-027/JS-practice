let elementall=document.querySelector('#alldiv');
let elementdivone=document.querySelector('#divone');
let elementdivtwo=document.querySelector('#divtwo');
let elementdivthree=document.querySelector('#divthree');
let elementfirstcol=elementdivone.style.backgroundColor;
let elementseccol=elementdivtwo.style.backgroundColor;
let elementthirdcol=elementdivthree.style.backgroundColor;

elementdivone.addEventListener('click',function(){
    console.log(elementdivone.getHTML.backgroundColor);
    elementdivtwo.style.backgroundColor=elementfirstcol;
})

elementdivtwo.addEventListener('click',function(){

    elementdivthree.style.backgroundColor=elementseccol;
   
})
elementdivthree.addEventListener('click',function(){
    elementdivone.style.
    backgroundColor=elementthirdcol;

  
})