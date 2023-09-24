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

      checkUser(user, data);
      userProfileCard(data);

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
form.addEventListener('submit', (e) => readDataOfImput(e))


function checkUser(newUser, arrayOfNewUsers){   //проверка юзера на существуемость for email
    const isExsist = arrayOfNewUsers.find((elem) => elem.email === newUser.email)
        
    alert(isExsist)
}


function alert(isExsist){  // выводит сообщение 
   let alertMessage = document.querySelector('.alert')
   
   alertMessage.innerHTML = isExsist ? 'Authorization was successful' : 'Такого пользователя не существует'
}


function userProfileCard (user) {
    const {id, name, username, email, phone, website} = user;

    document.querySelector('.user-profileCard').style.display = 'block';

    document.querySelector('#id_profile')
    id_profile.innerHTML = id;

    document.querySelector('#name_profile')
    name_profile.innerText = name;

    document.querySelector('#username_profile')
    username_profile.innerText = username;

    document.querySelector('#email_profile')
    email_profile.innerText = email;

    document.querySelector('#phone_profile')
    phone_profile.innerText = phone;

    document.querySelector('#website_profile')
    website_profile.innerText = website;

    
}

// Ervin Howell
// Shanna@melissa.tv
