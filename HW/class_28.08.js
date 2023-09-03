// В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, 
// а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств,
//  добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. 
//  Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. 
//  Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone.
//   Получившийся экземпляр класса запишите в переменную deliveryName. 
// Пример значений переменных: 
// let name = "Pizza" 
// let phone = "81234567890" 

// Пример результата: false

// class Delivery{
//     constructor(name, phone){
//         this.name = name
//         this.phone = phone
//         this.validPhone = this.valitdatePhone()
//     }
//     valitdatePhone(){
//         if(this.phone.startsWith('+')){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let name = "Pizza" ;
// let phone = "81234567890" ;

// let deliveryName = new Delivery (name, phone);
// console.log(deliveryName);



// ______________________ 2 

// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей
//  на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе 
//  Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


// Входные данные: 
// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }

class Permissions{
        constructor() {
          this.create = false;
          this.read = true;
          this.update = false;
          this.remove = false;
        }
      }
      
      class Users extends Permissions {
        constructor(name) {
          super(); // Вызываем конструктор родительского класса Permissions
          this.name = name;
        }
    
}
let user1 = new Users('Slava')
console.log(user1.name);