// class User {
//     constructor(name , age){
//         this.name = name
//         this.age = age
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }
// let user1 = new User('Alex', '30')

// user1.sayHi()

// console.log(user1);

// ----------------------
// Создайте класс Product с свойствами (имя, цена, количество)
// Создайте 3 экзамплера этого класса с произвольными значенми

// class product{
//     constructor(name,price, quantity){
//         this.name = name
//         this.price = price
//         this.quantity = quantity
    // }
    // getFullPrice(){
    //     console.log(this.price * this.quantity);
    // }
    // getInfo(){
        // console.log(this.name, this.price, this.quantity);
    // }
    
// }
// let product1 = new product('Apple', 37, 1)
// let product2 = new product('airplain', 2345, 2)
// let product3 = new product('velik', 20000, 4)

// product1.getFullPrice()
// product2.getFullPrice()
// product3.getInfo()

// user1.sayHi() 
// console.log(product1);
// console.log(product2);
// console.log(product3);

 // Добавьте к классу product метод getFullPrice
// метод должен в консоль отобразить полную стоимость товара с учетом его количества

// Напишите мет getInfo(), который будет отображать полную информацию о товаре согласно след примеру:
// 'Имя товара: Велосипед, цена: 20000, количество: 4'

// class MathNum{
//     constructor(number){
//         this.number = number
//     }
//     doble(){
//         console.log(this.number ** 2);
//     }
//     sqrt(){
//         console.log(this.number ** 0.5);
//     }
// }

// let num1 = new MathNum(25)
// num1.doble()
// num1.sqrt()

// _______________________

// Задание 1
// Задан obj, добавьте к нему новый геттер lastValue, который будет ссылаться на значение последнего
//  элемента массива

// let obj = {
//     numbers: ['Один','Два', 'Три', 'Четыре'],

// //         get lastValue(){
// //             return this.numbers[this.numbers.length - 1]
// //         }
// // }
// // console.log(obj.lastValue);

// // --------------------
// // Задание 2
// // задан объект obj. Определите новое сво-во abs (геттер) которое будет хранить 
// // разницу первого и последнего элемента массива array

// // let obj = {
// //     numbers: [70,20,30,40,50,20,50],

// //     get abs(){
// //         return this.numbers[0] - this.numbers[this.numbers.length - 1]
// //     }
// // }
// // console.log(obj.abs);

// // ------------------------

// // Задача 3

// // Задан объект 
// // Напишите сеттер setPhone, который позволит переопределить значение сво-ва phone с проверкой
// // Если номер телефона будет указан без кода +7 (то есть начиная с 8), тогда необходимо будет заменить 8 на +7
// // Если номер телефона будет начинаться не с 8 и не с +7, тогда номер измениться не должен

// let plus7 = []
// let plus8 = []

// let contact = {
//     phone: '+712345678',

//     set setPhone(arg){
//         if(arg.startsWith('8')){
//             // this.phone = '+7' + arg.slice(1)   OR
//             this.phone = arg.replace('8', '+7')
//         } else if (arg.startsWith('+7')){
//             this.phone = arg
//         } else {
//             console.log('No realy nomber');
//         }
//     }
// }
// console.log(contact.phone);

// let user = {
//     name:"Jon"
// };

// user.id = "1";
// user["surname"] = "Done";

// let x = "username";

// user.x = 25

// user[x] = "Hello"

// console.log(user);


let state = {};

let formInputs = document.querySelectorAll(".form__input");

const handlerChange = (e) => {
    console.log(e);

    state[e.target.name] = e.target.value;
}

const send = () => {
    console.log(state);
    console.log(`Данные успешно отправлены!`);
}

formInputs.forEach(input => input.addEventListener("keyup", handlerChange));

// input6