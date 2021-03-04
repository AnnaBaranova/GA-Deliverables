function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  function maxOfTree (x,y,z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y
    } else {
      return z
    }
  }
  
  console.log (maxOfTree(10,9,11));