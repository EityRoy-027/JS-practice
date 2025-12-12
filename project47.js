let table=document.querySelector('#table1 tbody');
let button=document.querySelector('button');
let total=document.querySelector('divh2');
let tos=document.querySelector('#tos');

button.addEventListener('click',function(){
    let tr=document.createElement('tr');
    tr.innerHTML='<td contenteditable>newitem</td><td contenteditable oninput="calc()">0</td>';
   table.appendChild(tr);
   console.log(table);
   

})
function calc(){
    let sum=0;
    let tds=document.querySelectorAll('#table1 tbody tr td:nth-child(2)');
    for(let i=0;i<tds.length;i++){
        sum=some+parseInt(tds[i].textContent);
    }
    tos.textContent=sum;
}