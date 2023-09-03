// Найти индекс заданного числа в массиве: {3, 6, 4, 7, 2, 1, 9}
// Алгоритм на вход должен получать любой массив и одну цифру, индекс которой требуется найти.

// Задание считается выполненным если: использован ”Линейный подход” начиная от последнего элемента и 
// алгоритм соответствует характеристикам алгоритма и выдает верный результат. Используйте блок схему.

let target = 3;
let arr = [3, 6, 4, 7, 2, 1, 9];

function findIndexInArray(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      console.log(`Индекс числа ${target} в массиве = ${i}`);
      return;
    }
  }
  console.log(`Число ${target} не найдено.`);
}
findIndexInArray(arr, target);
  
