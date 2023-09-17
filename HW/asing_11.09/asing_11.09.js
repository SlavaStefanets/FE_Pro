// 1 уровень сложности: 1.Сделать запрос на сервер с помощью fetch (async await) 
// url - https://jsonplaceholder.typicode.com/users/1 и обработать ответ.


// Данные о пользователе (name, email, website) должны отображаться в карточке. Карточка 
// также должна иметь две кнопки >  <, при клике на которые мы посылаем запрос на след.
//  пользователя и отображаем его в карточке.

// Данные о пользователе должны быть редактируемыми. На против каждого поля должна быть иконка карандаша,
//  при клике на который пользователь мог бы редактировать данные пользователя.

let id = 1



async function fetchAsyncData(id){
    let url = 'https://jsonplaceholder.typicode.com/users/' +id
    
    const response = await fetch(url) 
    const data = await response.json()
    return render(data);
   
}


function render(card){
    
    let name_div = document.querySelector('.name_input')
    let email_div = document.querySelector('.email_input')
    let website_div = document.querySelector('.website_input')
    let btn_left = document.querySelector(".btn_left")
    let btn_right = document.querySelector(".btn_right")


    name_div.value =  `Name : ` + card.name
    email_div.value = `Email : `+ card.email
    website_div.value = `Website : ` + card.website

    let name_button = document.querySelector('.name_button')
    name_button.onclick = () => {
        name_div.value = ''
    }

    let email_button = document.querySelector('.email_button')
    email_button.onclick = () => {
        email_div.value = ''
    }

    let website_button = document.querySelector('.website_button')
    website_button.onclick = () => {
        website_div.value = ''
    }
    


    btn_left.onclick = () => {

        if (id <= 1){
        return }

        id = id - 1
        fetchAsyncData(id)
    } 
    btn_right.onclick = () => {

        if (id >= 10){
            return 
        } 

        id = id + 1
        fetchAsyncData(id)
    }



}
fetchAsyncData(id)



 