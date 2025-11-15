const cars = [
  { name: "BMW", model: "X5", year: 2023 },
  { name: "Mercedes", model: "C-Class", year: 2022 },
  { name: "Toyota", model: "Corolla", year: 2021 },
  { name: "Audi", model: "A4", year: 2023 },
  { name: "Honda", model: "Civic", year: 2020 }
];

let elementsel=document.querySelector('#selectone');
let elementdiv=document.querySelector('#divone');

elementsel.addEventListener('change',function(){
    for(let i=0;i<cars.length;i++){
        if(cars[i].name==elementsel.value){
            elementdiv.textContent=cars[i].name+cars[i].model+cars[i].year;
        }
    }
})