let car=document.querySelectorAll('.car');
let north=document.querySelector('#north');
let south=document.querySelector('#south');
let east=document.querySelector('#east');
let west=document.querySelector('#west');
let trafficp=document.querySelector('#trafficp');
let circlenor=document.querySelector('#circlenor');
let circlesou=document.querySelector('#circlesou');
let circlewes=document.querySelector('#circlewes');
let circleeas=document.querySelector('#circleeas');
let nor=0;
let sou=0;
let eas=0;
let wes=0;

for(i=0;i<car.length;i++){
    car[i].addEventListener('dragstart',function(start){
        let selected=start.target;
     
        north.addEventListener('dragover',function(traffic){
         traffic.preventDefault();
        })
     
        
        north.addEventListener('drop',function(){
             if(!selected){
            return;
        }
            north.appendChild(selected.cloneNode(true));
            nor++;

            if((nor>sou)&&(nor>eas)&&(nor>wes)){
             circlenor.style.backgroundColor='green';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }
            else if((sou>nor)&&(sou>eas)&&(sou>wes)){
             circlesou.style.backgroundColor='green';
              circlenor.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red'; 
            }
             else if((wes>nor)&&(wes>sou)&&(wes>eas)){
                circlewes.style.backgroundColor='green';
                circlesou.style.backgroundColor='red';
                circlenor.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }

             else if((eas>nor)&&(eas>sou)&&(eas>wes)){
                circleeas.style.backgroundColor='green';
                circlenor.style.backgroundColor='red';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
               
            }
            selected=null;
            })

         south.addEventListener('dragover',function(traffic){
         traffic.preventDefault();
        })

        south.addEventListener('drop',function(){
             if(!selected){
            return;
        }
            south.appendChild(selected.cloneNode(true));
            sou++;
            
             if((nor>sou)&&(nor>eas)&&(nor>wes)){
             circlenor.style.backgroundColor='green';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }
            else if((sou>nor)&&(sou>eas)&&(sou>wes)){
             circlesou.style.backgroundColor='green';
              circlenor.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red'; 
            }
             else if((wes>nor)&&(wes>sou)&&(wes>eas)){
                circlewes.style.backgroundColor='green';
                circlesou.style.backgroundColor='red';
                circlenor.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }

             else if((eas>nor)&&(eas>sou)&&(eas>wes)){
                circleeas.style.backgroundColor='green';
                circlenor.style.backgroundColor='red';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
               
            }
            selected=null;
        })

         east.addEventListener('dragover',function(traffic){
         traffic.preventDefault();
        })

        east.addEventListener('drop',function(){
             if(!selected){
            return;
        }
            east.appendChild(selected.cloneNode(true)) ;
            eas++;
            
        if((nor>sou)&&(nor>eas)&&(nor>wes)){
             circlenor.style.backgroundColor='green';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }
            else if((sou>nor)&&(sou>eas)&&(sou>wes)){
             circlesou.style.backgroundColor='green';
              circlenor.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red'; 
            }
             else if((wes>nor)&&(wes>sou)&&(wes>eas)){
                circlewes.style.backgroundColor='green';
                circlesou.style.backgroundColor='red';
                circlenor.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }

             else if((eas>nor)&&(eas>sou)&&(eas>wes)){
                circleeas.style.backgroundColor='green';
                circlenor.style.backgroundColor='red';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
               
            }
            selected=null;
        })

         west.addEventListener('dragover',function(traffic){
         traffic.preventDefault();
        })

        west.addEventListener('drop',function(){
             if(!selected){
            return;
        }
            west.appendChild(selected.cloneNode(true));
            wes++;
            
            if((nor>sou)&&(nor>eas)&&(nor>wes)){
             circlenor.style.backgroundColor='green';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }
            else if((sou>nor)&&(sou>eas)&&(sou>wes)){
             circlesou.style.backgroundColor='green';
              circlenor.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
                circleeas.style.backgroundColor='red'; 
            }
             else if((wes>nor)&&(wes>sou)&&(wes>eas)){
                circlewes.style.backgroundColor='green';
                circlesou.style.backgroundColor='red';
                circlenor.style.backgroundColor='red';
                circleeas.style.backgroundColor='red';
            }

             else if((eas>nor)&&(eas>sou)&&(eas>wes)){
                circleeas.style.backgroundColor='green';
                circlenor.style.backgroundColor='red';
               circlesou.style.backgroundColor='red';
                circlewes.style.backgroundColor='red';
               
            }
            selected=null;
        })
    })
}

