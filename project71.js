let score=document.querySelector('#score');
let attend=document.querySelector('#attend');
let payment=document.querySelector('#payment');
let unlock=document.querySelector('#unlock');
let email=document.querySelector('#email');
let certi=document.querySelector('#certi');
let drop=document.querySelector('#drop');
let no=document.querySelector('#no');
let run=document.querySelector('#run');
let condition=document.querySelectorAll('.condition');

for(i=0;i<condition.length;i++){
    condition[i].addEventListener('dragstart',function(start){
        let selected=start.target;

        drop.addEventListener('dragover',function(process){
            process.preventDefault();
        })

        drop.addEventListener('drop',function(){

            if(no.textContent=='No Rule')
            {
               no.textContent= '';
            }

        drop.appendChild(selected.cloneNode(true));

         if(selected.id==='score'|| selected.id==='attend'||selected.id==='payment')
         {
            no.textContent+='IF '+selected.textContent+' THEN ';
      
         }

         else if(selected.id==='unlock'||selected.id==='email'||selected.id==='certi')
        {
        no.textContent+=selected.textContent+', ';
        }

            selected=null;
        })
    })
}

