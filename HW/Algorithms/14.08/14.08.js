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

  
  
  
  
  