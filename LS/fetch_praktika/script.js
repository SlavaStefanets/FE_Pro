// Напишите функцию getUserInfo(id), которая будет получать di пользователя и будет 
// выводить информацию об этом пользоветеле в консоли

 

// function getUserInfo(id){

//     let url = 'https:jsonplaceholder.typicode.com/users'

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let user = data.find(elem => elem.id === id)
//         console.log(user);
//     })
// }
// getUserInfo(9) plohij varik !!!!!

// function getUserInfo(id){

//         let url = 'https:jsonplaceholder.typicode.com/users' +id
    
//       fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }
//     getUserInfo(8)    etot varik lu4se!!!

// _______________
// Задача 2
// Используя запрос, сформируйте в разметке карточку с описанием каждого напитка
// У каждого напитка должна быть картинка 400 на 400 пикселей, а под картинкой имя коктеля
// Построение DOM узла должно находиться в функции render()

// let div_root = document.querySelector('#root')

// let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

// fetch(url)
//     .then(res => res.json())
//     .then(data => render(data.drinks))

// function render (array){
//     for ( let elem of array){
//     let div_elem = document.createElement('div')
//     let img_elem = document.createElement('img')
//     let name_elem = document.createElement('p')

//     img_elem.src = elem.strDrinkThumb
//     img_elem.width = 400
//     img_elem.height = 400
//     name_elem.innerHTML = elem.strDrink 

//     div_elem.append(img_elem, name_elem)
//     div_root.append(div_elem)
// }}


// let url = 'https://jsonplaceholder.typicode.com/posts'
    
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     }
// })

function getUsers (){
    let url = 'http://158.160.60.49:3050/users/'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
getUsers()

function adddNewUser(){
    let url = 'http://158.160.60.49:3050/user/create'

    const obj = {
        name: 'Slava',
        salary: 1000,
        age: 37,
        job_id: 'tak-sjak'
    }

    fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
            // 'Content-Type' ukazivatj objazateljno !!!!!!!!
        },
        body: JSON.stringify(obj)

    })
        .then(res => res.json())
        .then(data => console.log(data))
}
// adddNewUser()

function deleteUsers(id){
    let url = 'http://158.160.60.49:3050/users/' +id
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
// deleteUsers(18)