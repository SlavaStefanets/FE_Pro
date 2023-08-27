function isPowerOfTwo(n) {
    while (n > 1) {
      if (n % 2 !== 0) {
        return false; 
      }
      n /= 2; 
    }
    return true; 
  }

  let number = 7;
if (isPowerOfTwo(number)) {
  console.log("YES");
} else {
  console.log("NO");
}

// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки,
//  или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// 8 Ввод YES
// 3 Вывод NO

  
  
  
  
  