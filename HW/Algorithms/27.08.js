
// Решите задачу: Расставьте в алфавитном порядке буквы. Разрешается использование техники Разделяй и властвуй.
//  Полученные данные напечатайте.
// 👉👉👉  На вход строка: "poiuytrewqlkjhgfdsamnbvcxz"
// На выходе должно быть: ABCDEFGHIJKLMNOPQRSTUVWXYZ (с большой буквы)

function sortAlphabet(str){
   let arrayOfAlphabet = str.split('').sort().join('')

   let sortoUpperCase = arrayOfAlphabet.toUpperCase()

   return console.log(sortoUpperCase);;
}

sortAlphabet("poiuytrewqlkjhgfdsamnbvcxz")