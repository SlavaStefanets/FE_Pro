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

let inputEmail = document.querySelector('.inputEmail')
let inputPassword = document.querySelector('.inputPassword')
let Btn_reg = document.querySelector('.Btn_reg')
let Btn_open = document.querySelector('.Btn_open')
let body = document.body
let alert = document.createElement('p')

Btn_reg.addEventListener('click',() => {
    if (!inputEmail.value || !inputPassword.value){
        alert.innerHTML = 'Empty inputs'
        body.append(alert)
    } else {
        localStorage.setItem('dateOfEmail', inputEmail.value )
        localStorage.setItem('dateOfPassword', inputPassword.value)
        alert.innerHTML = 'Супер, данные сохранены'
        body.append(alert)
    }
})