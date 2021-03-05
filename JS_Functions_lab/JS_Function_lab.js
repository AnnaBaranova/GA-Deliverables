//1.

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
  
  //2.
  
  const maxOfTree = function (x,y,z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y
    } else {
      return z
    }
  }
  
  console.log (maxOfTree(10,9,11));
  
   //3.
   
   function isCharAVowel (char) {
     formattedChar = char.toLowerCase();
     if (formattedChar === "a"||formattedChar === "e"||formattedChar === "i"||formattedChar === "o"||formattedChar === "u"){
       return true
     } else {
      return false 
     }
   }
   console.log (isCharAVowel("A"));
  
  //4.
  
  let sumArray = function (arr){
    let sum = 0;
    arr.forEach(function(num) {
      sum+=num
    })
    return sum
   }
  
  console.log (sumArray([2,4,5]))
  
  //5.
  function multiplyArray (arr) {
    let prod = 1;
    arr.forEach(function(num) {
      prod*=num
    })
    return prod
  }
  
  console.log (multiplyArray([2,4,5]))
  
  //6.
  const numArgs = function (){
   return arguments.length;
  }
  console.log (numArgs(4,5,6,7,8,9))
  
  //7. I've found two ways to write this function
  
  function reverseString (str) {
    const splitStr = str.split("")  
    const reverseArray = splitStr.reverse();
    const reverseStr = reverseArray.join("");
    return reverseStr
  }
  
  console.log (reverseString ("rockstar"))
  
  function reverseString1 (str) {
    let newStr = "";
      for (i = str.length - 1; i >= 0; i--) {
          newStr += str[i];
      }
      return newStr;
  }
  
  console.log (reverseString1 ("rockstar"))
  
  const longestStringInArray = function (arr) {
    let longestStr = "";
    arr.forEach(function(str) {
      if(str.length > longestStr.length) {
        longestStr = str;
      }
    });
    return longestStr;
  }
    
    console.log (longestStringInArray(['say', 'hello', 'in', 'the', 'morning']))