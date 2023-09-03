// У вас есть список из n элементов, которые представляют собой оценки студентов по математике.
//  Вам нужно отсортировать этот список в порядке убывания оценок с использованием алгоритма сортировки Merge sort.
// Для решения этой задачи напишите функцию, которая принимает на вход список оценок и возвращает новый список, 
// отсортированный в порядке убывания.
// {3, 8, 1, 9, 4, 2, 7, 6, 5 };

let arr = [3, 8, 1, 9, 4, 2, 7, 6, 5]

function mergeSort(arr){
  if (arr.length <= 1) {
    return arr; 
  }
const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

 
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

 
  return merge(sortedLeft, sortedRight);
}  
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

 
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
let finishResult = mergeSort(arr)

console.log(finishResult);