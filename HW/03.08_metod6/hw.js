//1 Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
//2 Посчитайте сумму всех товаров, учитывая их количество
//3 Найдите значение элемента массива (продукта), цена которого будет кратна 5
//4 Найдите индекс элемента, count которого будет больше 11
//5 Посчитайте количество элементов, count которых является нечетным числом
//6 Посчитайте количество элементов, имя которых начинается на “Т”
//7 Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
//8 Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
//9 Отфильтруйте массив по сво-ву title

let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]

//  1 ----------------------
//  let result = goods.filter((elem) => elem.id % 2 === 0)
//  console.log(result);

// 2_______________________
// let sumOfPriceAndCount = goods.map((elem) => elem.price * elem.count)
// console.log(sumOfPriceAndCount);

// 3 ____________________
// let result = goods.find(elem => elem.price % 5 === 0)
// console.log(result);

// 4 _______________________
// let res = goods.findIndex(index => index.count > 11)
// console.log(res);

// // 5_____________________
// let sum = goods.filter (value => value.count % 2 !==0)
// let newSum = sum.length
// console.log(newSum);
 
// 6__-______________
// let result = goods.filter(elem => elem.title.startsWith('Т')).length;
// console.log(result);

// 7________________
// let discountPrice = goods.map(value => value.price * 0.65)
// console.log(discountPrice);

// 8_________________
// let result = goods.map (elem => {return {...elem, count: 0}})
// console.log(result);

// 9______________

let result = goods.sort((a, b) => {
    return a.title.localeCompare(b.title)
})
console.log(result);
