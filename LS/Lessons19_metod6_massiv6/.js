
let products = [
    {name: 'Велосипед', price: 1000, count: 4},
    {name: 'Телефон', price: 4000, count: 5},
    {name: 'Телевизор', price: 5400, count: 1},
    {name: 'Ножницы', price: 450, count: 14},
    {name: 'Наушники', price: 600, count: 7},
    {name: 'Стакан', price: 50, count: 9},
]
// Создайте новый массив, в котором будут элементы цена которых больше 1000

// let result = products.filter((value) => value.price > 1000)
// console.log(result);

// ----------------
// / Найдите товар, чье произведение стоимости и количества будет превышать значения 10000
// let result = products.find(value => value.price * value.count > 10000)
// console.log(result);

// ---------------
// let result = products.map(value => value.price * value.count)
// console.log(result);
//    or
// let result = products.map(value => ({...value,full_price: value.price * value.count}))
// console.log(result);
