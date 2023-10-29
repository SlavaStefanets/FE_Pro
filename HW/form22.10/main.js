// Добавить форму авторизации через email и пароль, если такой пользователь есть в localStorage,
//  то авторизуем пользователя, показывая уведомление об успешном входе, 
//  если данные ошибочны, показываем уведомление о том, что войти не удалось(авторизацию можно 
//     реализовать двумя способами: 1)       
// через локал сторадж и вэтом случае вам потребуеться реализовать и регистрацию: 
// 2) через jsonplaceholder по апи /users. Если пользователь авторизован у него появляется:
// - форма с 3 инпутами: адрес, цена и стоимость, которые пользователь заполняет и отправляет 
// по методу post (используем jsonplaceholder) если ответ приходит со статусом 201, 
// показываем уведомление о том, что заказ создан.
// - под формой будет контейнер с четырьмя кнопками: оплатить, отправить, принять, завершить заказ. 
// Кнопки должны будут появиться только после того как заказ создан. При кликах по кнопкам оплатить, 
// отправить, принять, завершить заказ должны появляется соответствующие уведомления. Например,
//  при клике на оплатить – “заказ оплачен”, при клике на отправить – “заказ отправлен, ожидайте”
// - кнопка выйти, при нажатии по которой, интерфейс создания заказа и кнопок статусов заказа исчезают.
// *Доп. задание: при кликах на кнопки: оплатить, отправить, принять, завершить заказ отправлять по одному 
// fetch get запросу /posts (jsonplaceholder) и в уведомлении помимо отображения статусов отображать 
// данные с сервера предварительно показывая loading(скелетон итд) при обработке запроса.

// email: "Sincere@april.biz"

let inputEmail = document.querySelector('.inputEmail')
let inputPassword = document.querySelector('.inputPassword')
let Btn_open = document.querySelector('.Btn_open')
let body = document.body
let alert = document.createElement('p')


async function fetchData() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let response = await fetch(url);
        let data = await response.json();
        localStorage.setItem('usersData', JSON.stringify(data));
        // console.log(data);
    } catch (error){
        console.log('Ошибка при загрузке данных:', error);
    }
}
fetchData();

function checkUser(email) {
    let users = JSON.parse(localStorage.getItem('usersData'));
    return users.find(elem => elem.email === email);
  }


  Btn_open.addEventListener('click', (e) => {
    e.preventDefault()
    let email = inputEmail.value;
    let password = inputPassword.value;
    let  checkEmail = checkUser(email);
    if (checkEmail) {
              alert.innerHTML = ('Успешный вход!');
              body.append(alert)
              window.location.href = 'http://127.0.0.1:5500/form22.10/form.html' 
            } else {
              alert.innerHTML = ('Ошибка входа.');
              body.append(alert)
              return checkUser;
            }     
  });

