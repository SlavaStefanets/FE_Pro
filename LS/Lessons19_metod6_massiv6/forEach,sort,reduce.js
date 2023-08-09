
// .forEach((value, index, array) => {})

// _____________________
// .sort

// let array = [4,7,8,6,9,1,5,2,3]
// array.sort()
// console.log(array);

// ----------------
// Отсортируйте массив по произведению цены на количество (по возрастанию)

// let products = [
//     {name: 'Велосипед', price: 1000, count: 4},
//     {name: 'Телефон', price: 4000, count: 5},
//     {name: 'Телевизор', price: 5400, count: 1},
//     {name: 'Ножницы', price: 450, count: 14},
//     {name: 'Наушники', price: 600, count: 7},
//     {name: 'Стакан', price: 50, count: 9},
// ]
// Отсортируйте массив по произведению цены на количество (по возрастанию)

//  products.sort((a,b) => a.price * a.count - b.price * b.count)
// console.log(products);

// ---------------- reduce

let users = [
    {id: 1, first_name: 'Steven', last_name: 'King', age: 30, salary: 5000 },
    {id: 2, first_name: 'John', last_name: 'Wilyam', age: 25, salary: 700 },
    {id: 3, first_name: 'Neena', last_name: 'Wonka', age: 35, salary: 15000 },
    {id: 4, first_name: 'Alex', last_name: 'Rock', age: 40, salary: 4000 },
    {id: 5, first_name: 'Georgy', last_name: 'Have', age: 50, salary: 1000 },
    {id: 6, first_name: 'Maxwell', last_name: 'Must', age: 44, salary: 900 },
]
// 1) Отфильтруйте массив таким образом, чтобы в новом массиве были сотрудники 
// с зарплатой от 1000 до 5000 не включительно

// let result = users.filter((value) => value.salary > 1000 && value.salary < 5000 )
// console.log(result);

// ___________________
// 2) Получите новый массив, который будет хранить значение имени и фамилии
// ['Steven King', 'John Wilyam', 'Neena Wonka']

// let result = users.map((value) => value.first_name + ' ' + value.last_name )
// console.log(result);

// ----------------------
// 3) Создайте новый массив, в котором, помимо старых свойств, 
// будет также определяться новое сво-во 
// birthday, которое будет определять год рождения каждого сотрудника.

let result = users.map(value => ({...value,birthday : 2023 - value.age}))
console.log(result);