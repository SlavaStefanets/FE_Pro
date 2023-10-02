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



async function fetchAsyncData(user) {
    let url = 'https://jsonplaceholder.typicode.com/users/';

    try {
      let response = await fetch(url);
      let data = await response.json();

      // console.log(data);

      checkUser(user, data);
      userProfileCard(user, data);

    } catch (error) {
      console.log('Ошибка при загрузке данных:', error);
    }
  }


function readDataOfImput(event){   //считать данные с импута
    event.preventDefault() // не перезагружает страницу

    let {username, email} = event.target  // вытягиваем инпуты по свойству нейм
    
    const user = {id:Date.now(), 
        username:username.value,
         email:email.value} //добовляем данные с импутов в обьект

    event.target.reset()    // очищает инпуты

    fetchAsyncData(user)
}




let form = document.querySelector('.form')   //вешаем событие на форму
form.addEventListener('submit', (e) => readDataOfImput(e));


function checkUser(newUser, arrayOfNewUsers){   //проверка юзера на существуемость for email and username
  const isExsist = arrayOfNewUsers.find((elem) => (elem.email === newUser.email) && (elem.username === newUser.username))
      console.log(isExsist);
  alert(isExsist)
}
// import { checkUser } from "./function_checkUser"; dont work !!!!




function alert(isExsist){  // выводит сообщение 
   let alertMessage = document.querySelector('.alert')
   alertMessage.innerHTML = isExsist ? 'Authorization was successful' : 'Такого пользователя не существует'
}




function userProfileCard(user, arayOfUsers) {

  const findUsersOfEmail = arayOfUsers.filter((elem) => elem.email === user.email)
  const objUsers = findUsersOfEmail[0]

  // console.log(findUsersOfEmail, objUsers);
  const userProfileDisplay = document.querySelector('.user-profileCard')
  
    userProfileDisplay.style.display = 'block';
  
  let p_id = document.querySelector('#id_profile').innerText = `ID : ` + objUsers.id;
  let p_name = document.querySelector('#name_profile').innerText = `Name : ` + objUsers.name;
  let p_username = document.querySelector('#username_profile').innerText = `Username : ` + objUsers.username;
  let p_email = document.querySelector('#email_profile').innerText = `Email : ` + objUsers.email;
  let p_phone = document.querySelector('#phone_profile').innerText = `Phone : ` + objUsers.phone;
  let p_website = document.querySelector('#website_profile').innerText =  objUsers.website;

  }

  let p_website = document.querySelector('#website_profile')
  let changeWebsite = document.querySelector('.websiteButton')
  let inputOfWebsite = document.querySelector('.inputOfWebsite')
  let saveChanges = document.querySelector('.saveChanges')

  changeWebsite.addEventListener('click', () => {
    inputOfWebsite.style.display = 'block' 
    inputOfWebsite.innerText = p_website
    console.log(inputOfWebsite.value);
   });
  

  

