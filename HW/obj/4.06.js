// 1 ----------------

// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(),
//  которая в качестве аргумента получает объект и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: ['key1','key2','key3','key4']

//  let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }
//     let result = []

//     function getKeys(someObj){
//         for(let elem in someObj){

//             result.push(elem);
//         }
//         return console.log(result);
//     }
//     getKeys(someObj)

    // 2 --------------


// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение
//  среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]

// let array = [1,2,3,4,5]
// let result = 0

// function getAvg(array){
//     for (let elem of array){
//        result = result + elem
       
//     }
//     return console.log(result / array.length);
// }
// getAvg(array)


// 3 ------------

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

// let array = ['1',true,'3','value1',9,'key']
// let result = 0

// function counterString(array){
//     for (let elem of array){
//         if (typeof(elem) === 'string'){
//             result += 1;
//             // console.log(result);
//         }
//     }
//     return console.log(result);
// }
// counterString(array)


// 4 -------------

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), 
// которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }
//  let result = []  
 
//  function getEntries(obj){
//     for (let idx in obj){
//         let smalArray = []
//         smalArray.push(idx, obj[idx]);

//         result.push(smalArray);

//     }
//     return console.log(result);
//  }
//  getEntries(someObj)

// 5 -------------

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять
//  строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

let array = [2, 'hello', 3, 'Hi']
let result = {}  //пучтой обьект {}

function keyConvert(arr){
    for (let idx in arr ){
        result[`key_` + idx] = arr[idx]
    }
    return console.log(result);
}

keyConvert(array)


// Задан объект. Вывдете значение сво-ств только у тех элементов,
// чей ключ в конце определяет нечентное числовое значение 

// let obj = {
//     char1: true,
//     char2: 'Windows',
//     char3: 10,
//     char4: 'Car',
//     char5: 54,
//     char6: 'String',
// }
// for (let idx in obj){
//    let num = idx[4]
// // let num = idx.slice(4)
// // let num = idx.replace('char', '')

// if (num % 2  !== 0){
//     console.log(obj[idx]);
// }
// }



// let obj = {
//     char1: true,
//     char2: 'Windows',
//     char3: 10,
//     char4: false,
//     char5: 54,
//     char6: 'String',
// }
  
// for (let idx in obj){
//     if (typeof obj[idx] === 'boolean'){
//         delete obj[idx]
//     }

// }
// console.log(obj);


// ---------------------
// Задача 1
// Задан объект. Напишите программу, которая проверит, есть ли в объекте значение булевого типа. 
// В качестве результата выведите в косноль булевый тип.
// Примечание: цикл использовать нельзя.

// let user = {
//     name: 'Alex',
//     age: 10,
//     isJob: true
// }
// let result = false
//   for(let idx in user){
//     if(typeof user[idx] == 'boolean'){
//         result = true
        //   break
//     }
//   }
// console.log(result);

// let array = Object.values(user)
// let result = array.includes(true) || array.includes(false)
// console.log(result);

// let obj1 = {
//     name: 'Alex',
//     salary: 1000
// }

// let obj2 = {
//     age: 34,
//     isJob: true
// }

// let result = Object.assign(obj1, obj2)

// console.log(result);
// console.log(obj1);
// console.log(obj2);


