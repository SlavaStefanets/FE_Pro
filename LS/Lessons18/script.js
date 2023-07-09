
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

// // ---------------- Sob6tie 

// let div_root = document.querySelector('#root')

// div_root.onclick = () => {
//     console.log('click');
// }

// // ---------- s4jotsik

// let div_root = document.querySelector('#root')
// let btn_elem = document.querySelector('.btn')
// let btn_reset = document.querySelector('.btn2')
// let btn_biger = document.querySelector('.btn3')
// let btn_change = document.querySelector('.btn4')

// let counter = 0
// let count_title = document.createElement('h1')
// div_root.append(count_title)

// btn_elem.onclick = () => {
//     console.log(++counter)
//     count_title.innerText = counter
// }
// btn_reset.onclick = () => {
//     counter = 0
//     count_title.innerText = counter
// }
// Задание: написать событие для кнопки btn2, 
// которое будет обнулять счетчик внутри div#root


// Задание: написать событие для кнопки btn3, которое будет 
// увиличивать значение ширины и высоты root на 100 пикселей
// let size = {
//     width: 50,
//     height: 50
// }

// btn_biger.onclick = () => {
//     size.width += 100
//     size.height += 100
//     div_root.style.width = size.width + 'px'
//     div_root.style.height = size.height = 'px'
// }

// Задание: написать событие для кнопки btn4, которе будет меня
// цвет заднего фона div#root на красный

// btn_change.onclick = () => {
//     if (div_root.style.backgroundColor === 'red'){
//     div_root.style.backgroundColor = 'blue'
//     }   else {
//     div_root.style.backgroundColor = 'blue'
//     }
// }

// // --------------------------
// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', () => {
//     console.log('click');
// })

// div_root.addEventListener('click', () => {
//     console.log('click2');
// })

// document.addEventListener('keydown', () =>{
//     console.log('keydown');
// })

// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', (event) => {
//     if (event.altKey){
//         console.log('click + alt');
//     }
// })


// document.addEventListener('keydown', (event) =>{
//     console.log(event);
// })

// --------------- sob6tie - event

// let div_root = document.querySelector('#root')

// div_root.addEventListener('click', (event) =>{
//     // console.log(event.target);
//     event.target.remove()
// })


// Target an praktike ---------

// let form = document.querySelector('form')

// form.addEventListener('change', (event) =>{
//     console.log(event.target.values);
// })





