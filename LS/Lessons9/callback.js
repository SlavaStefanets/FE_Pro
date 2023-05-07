// Callback 

// function double(){
//     return 'test'
// }

// function getString(){
//     return 'STRING'
// }

// function handle(Callback){
//     let a = Callback()
//     console.log(a);
// }

// handle(double)
// handle(getString)

// handle(() => 'test')
// handle(() => 'STRING')

// let arg1 = 10;
// let arg2 = 20;
// let sing = '>';
// function getCondition(arg1,arg2,sing){
//      if (sing === '>'){
//         console.log((arg1 > arg2) ? 'true' : 'false');
//      }   else if (sing === '<'){
//         console.log((arg1 < arg2) ? 'true' : 'false');
//      }
// }
// getCondition(10,20,'<')  

  //zab6li kak strsn6j son

   //vot eto metod super =>

//   function getCondition(Callback){
//     if (Callback()){
//         console.log('pravda');
//     } else {
//         console.log('lozz');
//     }
//   }
//   getCondition(() => 1000 > 100)

// function calc(callback){
//     let a = callback()
//         console.log(a);

// }
// calc(() => 10 + 10 / 2)

// ili

// function calc(callback){
//     let result = callback()
//         return result

// }
// let a = calc(() => 10 / 10 * 2)
// console.log(a);

//-------------------

// callback s argumentom

// function handle(callback){
//     let a = callback(10,20)
//     console.log(a);
// }
// handle((a,b) => a * b)  //mozno a b ne ukazivatj
// handle((a) => a - 10)

// (a,b) => b - 10