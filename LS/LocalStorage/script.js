// mehanizm6 rabot6 localStorege s Object
// let obj = {
//     name:'Alex',
//     age: 35
// }

// localStorage.setItem('key', obj)
// // console.log({} + '');

// let json = JSON.stringify(obj)

// console.log(obj);
// console.log(json);


// Задана строка с массивом. Используф методы JSON добавьте в конец массива 2 элемента (5,6).
// На выходе преобразуйте массив обратно в строку

// let numbers = '[1,2,3,4]'

// let number_array = JSON.parse(numbers)
// number_array.push(5,6)
// numbers = JSON.stringify(number_array)
// console.log(numbers);



// Задача. Опишите две функции: writeLocalStorage и readLocalStorage. Функции должны записывать или считывать объекты в
//  localStorage соответственно.

// function writeLocalStorage(obj){
//     let json_data = JSON.stringify(obj)
//     localStorage.setItem('key', json_data)
// // }
// function readLocalStorage(){
//     let local_date = localStorage.getItem('key')
//     local_obj = JSON.parse(local_date)
    
// }
// console.log(local_date);

let data = [
    'Велосипед', 'Самокат', "Телевизор", "Телефон", "Тумба", "Кресло", "Автомобиль"
]

let div_root = document.querySelector('#root')
let div_products = document.createElement('div')
div_products.className = 'product_wrapper'
div_root.append(div_products)

function render(array){
for (let elem of array){
    let div_item = document.createElement('div')
    let h2_item = document.createElement('h2')

    div_item.className = 'product_item'
    h2_item.innerText = elem

    div_item.append(h2_item)
    div_products.append(div_item)
}
}


let input_title = document.querySelector('input')
let form_elem = document.querySelector('form')

function render (item){
    div_products.innerHTML = ''
    data.push(item)
    render(data)
}

form_elem.onsubmit = (e) =>  {
    e.preventDefault()
    render(input_title.value)
}
render(data)

