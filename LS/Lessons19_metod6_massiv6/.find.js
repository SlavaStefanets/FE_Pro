
// let number = [4,8,9,10,4,55,59,21]
// // Найдите элемент, значение которого будет кратно 10

// let result = number.find((value) => value % 10 == 0)

// console.log(result);

// let result = number.find((value) => (value * 0,5) % 1 === 0)
// console.log(result);

// ____________________
// / Найдите элемент, у которого есть где-либо буква "в"

// let result = array.find((value) => value.includes('v'))

// console.log(result);

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Grendalf']


// Найдите элемент массива, у которого имя будет начинаться на N, но индекс будет нечентным

// let result = users.find((values, index) => values.startsWith('N') && index % 2 !== 0)
// console.log(result);

//  Задача 5

// let price = [100,200,1100,2000,5000,20,8000,1000]

// Отфильтруйте данные таикм образом, 
// чтобы в новом масиве оказались только числа кратные 1000

// let result = price.filter((value) => value % 1000 == 0)
// console.log(result);
// -------------
// let result = []
// for(let elem of price){
//     if(elem % 1000 == 0){
//      result.push(elem)
//     } 
// } 
// console.log(result);


// let users = [
//     {id: 1, name: 'Alex', salary: 500},
//     {id: 2, name: 'Steven', salary: 1500},
//     {id: 3, name: 'Neena', salary: 300},
//     {id: 4, name: 'King', salary: 200},
//     {id: 5, name: 'John', salary: 1500},
// ]
// // Отфильтруйте массив таким образом, чтобы туда попали элементы, 
// // чей ID будет четным, зарпплата будет кратна 500
// let result = users.filter((value) => value.id % 2 == 0 && value.salary % 500 == 0)
// console.log(result);

// let numbers = [1,2,3,4,5]
// let result = numbers.map ((value) => value + 100 )
// console.log(result);

// В магазине объявлена распродажа! Все цены упали на 25 процентов. Измените массив таким образом, 
// чтобы цена была меньше на 25 процентов

// let price = [100,200,1100,2000,5000,20,8000,1000]

// let result = price.map((value) => value * 0.75)
// console.log(result);

// Задача 8

// let users = ['Alex', 'Dmitriy', 'Neena', 'Nelli', 'Gendalf']

// Сфомируйте новое значение для каждого элемента массива, который будет фаткически 
// определять конкатенацию первой и последней буквы

// let newNames = users.map((value) => value[0] + value[value.length - 1])
// console.log(newNames);

// Задача 9

// let phones = [
//     '89012568457',
//     '89012234548',
//     '89012565673',
//     '89013409678',
//     '89015980975',
// ]

// // Задача: замените начало строки 8 на +7 в новом массиве
// let newPhones = phones.map ((value) => value.replace('8', '+7'))
// console.log(newPhones);