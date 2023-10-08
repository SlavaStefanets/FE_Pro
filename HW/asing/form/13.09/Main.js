// Сделать авторизацию по username и email, используя следующий url: https://jsonplaceholder.typicode.com/users. 
// Для авторизации передавать query параметры username и email. Ответ обрабатывать с помощью async await. 
// Если приходит пустой массив значит такого пользователя нет – показываем “Такого пользователя не существует.”

//  1.1 ** Сделать динамическую валидацию, то есть валидация показывается сразу при начале печати и подсказывает,
//   что поле заполнено верно, если поле заполнено верно.


// После успешного входа отображать данные о пользователе в карточке, а именно: id, name, username, email, phone,
//  website. При этом давать пользователю редактировать поле website.


// *** После успешной авторизации так же должна появиться кнопка “Search”, при клике на которую вы переходите на след. 
// страницу. На этой странице еще три кнопки “Albums”, “Todos”, “Posts”. При клике на каждую вы переходите на страницу 
// поиска с панелью поиска в виде инпута. При вводе каких-либо символов должны отображаться результаты поиска. Например 
// если вы на странице Todos, поиск должен быть по значению title, если на странице Albums, то поиск происходит тоже по 
// значению title и на поиске Posts тоже по полю title.
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/todos
export {alert};

import { checkUser } from "./function_checkUser.js";
import {userProfileCard} from "./juserProfileCard.js"

async function fetchAsyncData(user) {
    let url = 'https://jsonplaceholder.typicode.com/users/';

    try {
      let response = await fetch(url);
      let data = await response.json();

      checkUser(user, data);
      userProfileCard(user, data);

      // console.log(data);

    } catch (error) {
      console.log('Ошибка при загрузке данных:', error);
    }
  }


function readDataOfImput(event){   //считать данные с импута
    event.preventDefault() // не перезагружает страницу

    let {username, email} = event.target  // вытягиваем инпуты по свойству нейм
    const user = { 
        username:username.value,   //ili
        // username:event.target.username.value
         email:email.value} //добовляем данные с импутов в обьект
    event.target.reset()    // очищает инпуты
    fetchAsyncData(user)
    console.log(user);
    console.log(event);
}



let form = document.querySelector('.form')   //вешаем событие на форму
form.addEventListener('submit', (e) => readDataOfImput(e));



 function alert(isExsist){  // выводит сообщение 
   let alertMessage = document.querySelector('.alert')
   let changeWebsite = document.querySelector('.websiteButton')
   let p_WebsiteName = document.querySelector('.p_WebsiteName')
   p_WebsiteName.style.display = isExsist ? 'block' : 'none'
   changeWebsite.style.display = isExsist ? 'block' : 'none'
   ButtonSearch.style.display = isExsist ? 'block' : 'none'
   alertMessage.innerHTML = isExsist ? 'Authorization was successful' : 'Такого пользователя не существует'
}



  const ButtonSearch = document.querySelector('.ButtonSearch')
  ButtonSearch.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5500/HW/asing/form/13.09/search.html'
  });




  

  

