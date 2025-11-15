let element=document.querySelector('.maindiv');
let element2=document.querySelector('#internaldiv');

let element3=document.querySelector('#divthree');

let element4=document.querySelector('#divfive');
let element5=document.querySelector('#divsix');
let element6=document.querySelector('#inputone');
let element7=document.querySelector('#inputtwo');

let element8=document.querySelector('#selectone');
let element9=document.querySelector('#selecttwo');

let sum=0;
let record={
    name:'',
    price:'',
    category:''

}
let recordarray=[];

element3.addEventListener('click',function(){

let element10=document.createElement('div');
let element11=document.createElement('div');
let element12=document.createElement('div');
element10.style.display='flex';
element10.style.height='50px';
element10.style.justifyContent='center';
element10.style.alignItems='center';
element10.style.width='90%';

element11.style.display='flex';
element11.style.flexDirection='column';
element11.style.width='50%';
element11.style.height='100%';
element11.style.borderRadius='5px';
element12.style.width='50%';
element12.style.height='100%';
element12.style.borderRadius='5px';
let element13=document.createElement('p');
let element14=document.createElement('div');

element13.textContent=element6.value+'-'+element7.value;
element14.textContent=element8.value;
element14.style.width='40%';
element14.style.padding='10px';
element14.style.backgroundColor='blue';
element14.style.color='white';
element14.style.height='30%';
element14.style.textAlign='center';
element11.appendChild(element13);
element11.appendChild(element14);

let element15=document.createElement('button');
element15.style.color='white';
element15.style.backgroundColor='red';
element15.style.height='100%';
element15.style.width='100%';
element15.textContent='X';
element15.style.border='none';
element12.appendChild(element15);
element10.appendChild(element11);
element10.appendChild(element12);
element4.appendChild(element10);

element15.addEventListener('click',function(){
    element10.remove();
})
sum=sum+parseInt(element7.value); 
element5.textContent='total'+sum;

let re=new Object();
re.name=element6.value;
re.price=element7.value;
re.category=element8.value;
recordarray.push(re);


})

element9.addEventListener('change',function(){
  console.log(recordarray);
//   element5.children.remove;
  element4.innerHTML='';
    let values=element9.value;
    for(let i=0;i<recordarray.length;i++){
        if(recordarray[i].category==values){
         
            let element13=document.createElement('p');
let element14=document.createElement('div');

let element10=document.createElement('div');
let element11=document.createElement('div');
let element12=document.createElement('div');
element13.textContent=recordarray[i].name+'-'+recordarray[i].price;
element14.textContent=recordarray[i].category;
element14.style.width='40%';
element14.style.padding='10px';
element14.style.backgroundColor='blue';
element14.style.color='white';
element14.style.height='30%';
element14.style.textAlign='center';
element11.appendChild(element13);
element11.appendChild(element14);

let element15=document.createElement('button');
element15.style.color='white';
element15.style.backgroundColor='red';
element15.style.height='100%';
element15.style.width='100%';
element15.textContent='X';
element15.style.border='none';
element10.style.display='flex';
element10.style.height='50px';
element10.style.justifyContent='center';
element10.style.alignItems='center';
element10.style.width='90%';

element11.style.display='flex';
element11.style.flexDirection='column';
element11.style.width='50%';
element11.style.height='100%';
element11.style.borderRadius='5px';
element12.style.width='50%';
element12.style.height='100%';
element12.style.borderRadius='5px';
element12.appendChild(element15);
element10.appendChild(element11);
element10.appendChild(element12);
element4.appendChild(element10);


element15.addEventListener('click',function(){
    element10.remove();
})
        }
    }
 })

