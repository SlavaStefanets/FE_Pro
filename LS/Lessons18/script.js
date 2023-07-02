
// let names = ['Alex','Steven','Neena','John']

// let div_root = document.querySelector('#root')

// for(let elem of names){
//     let div_names = document.createElement('div')
//     div_names.innerText = elem
//     div_root.append(div_names)
// }
// ----------- 2


// Задача:
// Постройте внутри #root элемента див элементы, которые в качестве текстового сво-ва
// будут передавать имена массива names
// Примечание: Необходимо создать новый див элемент только у элемент, чье значение определяется 
// строковым типом

// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// let div_root = document.querySelector('#root')

// for(let elem of names){
//    if(typeof elem === 'string'){

//    div_names = document.createElement('div')
//     div_names.innerText = elem
//     div_root.append(div_names)
// } }

// ------------------ 3 
// Задача 3
// Построкйте для каждого элемента массива новый div элемент. 
// А внутри этого div элемента заголовок h1
// В теге h1 сформирйте текстовое согласно примеру - "Имя пользователя - Alex"
// Примечание: Необходимо создать новый див элемент только у элементов, 
// чье значение определяется строковым типом

// let names = ['Alex', true , 100, 'Steven', 50, 'Neena', false]

// let div_root = document.querySelector('#root')

// for(let elem of names){
//    if(typeof elem === 'string'){

//     let div_names = document.createElement('div')
//     let h_names = document.createElement('h1')

//     h_names.innerText = elem
//     div_names.append(h_names)
//     div_root.append(div_names)
//    }}

// -----------------

// // Задача 4

// let users = [
//     {name: 'Alex', age: 30},
//     {name: 'Steven', age: 35},
//     {name: 'Neena', age: 40},
//     {name: 'John', age: 49},
// ]
// Для каждого элемента массива создайте 
// 1) Для имена заголовок h1
// 2) Для возвраста параграф p
// 3) div элемент, который будет хранить h1 и p
// 4) div элементы должны находиться внутри root

// let div_root = document.querySelector("#root")

// for(let elem of users){
//     let div_user = document.createElement('div')
//     let name_h = document.createElement('h1')
//     let age_p = document.createElement('p')

//     name_h.innerText = elem.name
//     age_p.innerText =elem.age

//     div_user.append(name_h, age_p)
//     div_root.append(div_user)
// }

// ---------------- Sob6tie 

let div_root = document.querySelector('#root')

div_root.onclick = () => {
    console.log('click');
}
