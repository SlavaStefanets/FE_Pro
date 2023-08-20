
// let url = 'https://jsonplaceholder.typicode.com/todos/'

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))

// let url = 'https://jsonplaceholder.typicode.com/albums'

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))


// _____________
  // Задана ссылка на API интрефейс. Получите данные и выведите новый массив
    //  с элементами, чей рейтинг будет меньше 4.5  

// let url = 'https://dummyjson.com/products'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let filtered = data.products.filter(elem => elem.rating < 4.5)
//         console.log(filtered)})
        

        // --------------
        // Задана ссылка на API интрефейс. Получите данные и выведите новый массив с элементами 
        // только с 2 сво-вами: title и price
        // let url = 'https://dummyjson.com/products'
    
// let url = 'https://dummyjson.com/products'

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     let mapped = data.products.map(elem => (
//         {
//         title: elem.title,
//         price: elem.price
//     }
//     ))
// console.log(mapped)})

// _____________
// Задана ссылка на API интрефейс. Получите данные и выведите итогуовую сумму стоимости всех товаров в консоль
// let url = 'https://dummyjson.com/products'


// let url = 'https://dummyjson.com/products'

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     let sum = data.products.reduce((accum, elem) => accum + elem.price, 0)
//     console.log(sum)
// })



// ________________
// Доработайте решение таким образом, чтобы после под именем сотрудника в 
// виде обычного текста также передавалось значение его почты

// let div_root = document.querySelector('#root')

// let url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//   .then(response => response.json())
//   .then(data => render(data))

//   function render(array){
//     for(let elem of array){
//         let h2_elem = document.createElement('h2')
//         let tex_email = document.createElement('p')
//         tex_email.innerText = elem.email
//         h2_elem.innerText = elem.name
//         div_root.append(h2_elem, tex_email)
//     }
// //   }


// async function fetchUsers(){
//     let url = 'https://jsonplaceholder.typicode.com/users'
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data);
// }
// fetchUsers()

