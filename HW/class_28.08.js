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

// ______________
// Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. . 
// Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов. 
// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение. 

// Создайте «геттер», который читает значение свойства state. Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine". 

// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.

class PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }
    fix(){
        this.state *= 1.5
    }
    set setState(nul){
        if (nul > 0){
        this.state = 100
    } else if ()
}
}