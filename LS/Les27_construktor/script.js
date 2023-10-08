// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.aga = age;
//         this.eat = function() {
//             console.log("I am Eating");


//         }
//     }
//     static type = "ANIMAL"

//     static render = (el) => typeof el;

//     walk() {
//         console.log("I am walking");
//     }
// }
// const cat = new Animal ('tom', 5)
// const cat2 = new Animal('citty', 7)


// console.log(cat);
// console.log(cat2);

// // cat.walk();
// // cat.eat();



// // class Animal {
// //     constructor(name, age) {
// //       this.name = name;
// //       this.age = age;
// //       this.eat = function () {
// //         console.log("I am eating");
// //       };
// //     }
  
// //     static type = "ANIMAL";
  
// //     static walk = () => console.log("I am walking");
  
// //     static countsum = (a, b) => a + b;
  
// //     walk(a, b) {
// //       console.log("I am walking");
// //     }
// //   }
  
// //   const cat = new Animal("tom", 5);
  
// //   cat.walk("sdvsv", "sdvsdv");
  
//   // const arr = [1, 2, 3];
  
//   // arr.map((el) => {
//   //   console.log(el);
//   // });
  
//   // console.log(Array.isArray({}));



// //   class Animal {
// //     constructor(name, age) {
// //       this.name = name;
// //       this.age = age;
// //     }
// //   }
  
// //   class Cat extends Animal {
// //     constructor(name, age, hasTail) {
// //       super(name, age);
// //       this.hasTail = hasTail;
// //     }
// //   }
  
// //   class Bird extends Animal {
// //     constructor(name, age, canFly) {
// //       super(name, age);
// //       this.canFly = canFly;
// //     }
// //   }
  
// //   const cat1 = new Cat("tom", 5, true);
// //   const bird1 = new Bird("city", 7, true);
  
// //   console.log(cat1);



// // class Person(name, age)

// // class Student(gpa) < Person
// // class Teacher(classSize) < Person

// // class Person(name, age) ->

// // class Student(gpa) < Person
// // class Teacher(classSize) < Person

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
  
//     learn() {
//       console.log("I am learing");
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
  
//     teach() {
//       console.log("I am teaching");
//     }
//   }
  
//   const student1 = new Student("Bob", 15, 3.8);
//   const teacher1 = new Teacher("Greg", 45, 30);



//   class Car {
//     constructor(model, year, color) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//     }
//   }

//   // const nameOfObj = userData.name;
// const { name } = userData;
// // const name = userData.name
// console.log(name);



class Car {
  constructor({ model, year, color }) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}


const mustang = new Car({
  model: "fr-4",
  year: 2011,
  color: "green",
});

mustang.km = "6515km";

// console.log(mustang);

const { km } = mustang;

console.log(km);