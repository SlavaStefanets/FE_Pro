


// let numbers = [1,2,3,4,5]

//      function checkEven(array,callback){
//         let check = ''

//        for( let a = 0;a < array.length; a++){
//       if  (callback (array[a]) === false){
//        check = 'Не все элементы удовлетворяют указанному условию'
//        return check
//     }
// }
//         check = 'Все элементы удовлетворяют указанному условию'
//         return check;
//      }
//      function checkEvenCallback(elem){
//         elem > 0;
//      }

// console.log(checkEven(numbers,(elem)=> elem > 0));

// function checkString(arg1, callback){
//    let count = 0;
//    for (let i = 0; i < arg1.length; i++){
//       let result = callback();
//       if(result === arg1[i]){
//          count +=1;
//       }
//    }
//    return count;
// }
// let result1 = checkString('hello', () => 'r')
// console.log(result1)


// --------------- 1

// let array =[1,2,3,4,5]

// function checkEven(array, callback){
// for (let i = 0; i < array.length; i ++){
//       if (!callback(array[i])){
//           return 'ne vse element6 udovletvorjajut uslovie'
//       }
// }  return 'vse elem udovlet uslovie'
// }

// 2 ------------


let numbers =[1,2,3,4,5]

function checkSome(array, callback){
for (let i = 0; i < array.length; i ++){
      if (callback(array[i])){
          return 'минимум 1 элемент одов условия'
      }
}  return 'ни один элемент не одов условие'
}
let result = checkSome(numbers, (elem) => elem === 0)
console.log(result)