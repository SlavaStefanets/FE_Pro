// let a = [1,2,3,4,5,6,7]
// a.shift()
// a.shift()
// let b = a.shift()
// console.log(a);
// console.log(b);

// let fruits = ["Яблоко", "Ананас", "Виноград","Клубника", "Груша", "Мандарин"]

// fruits.push('smorodina')
// fruits.shift()
// fruits.shift()
// fruits.pop()
// fruits.unshift('abrikos')


// console.log(fruits);

// let fruits = ["Яблоко", "Ананас", "Виноград","Клубника", "Груша", "Мандарин"]

// // for (let elem of fruits){
// //     console.log(elem);
// // }

// for (let i in fruits){
//     console.log(i, fruits[i])
// }
// console.log(fruits);

// ----------------
// Sravnenie massivov

// let a = [1,2,3]
// let b =  a.slice()

// a.pop()

// console.log(a);
// console.log(b);

// let array = [1,2,3,4,5,6,7,8]

// for (let elem of array){
//     if(elem % 2 == 0){
//         console.log(elem);
//     } 
// }

let array = [1,2,3,4,5,6,7,8]

for (let i in array){
    array[i] = array[i] ** 2
}

console.log(array);