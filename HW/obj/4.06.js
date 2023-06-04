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

// let array = [1,true,'3','value1',9,'key']
// let result = 0

// function counterString(array){
//     for (let elem of array){
//         if (typeof(elem) === 'string'){
//             result += 1;
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
//     for (let elem in obj){
//         let smalArray = []
//         smalArray.push(elem, obj[elem]);

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