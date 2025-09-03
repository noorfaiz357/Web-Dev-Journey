//1
console.log("Question 1 Reversed String");
function reversed(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reversed("hello"));

//2

console.log("Question 2 Palindrome");
function palindrom(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}
console.log(palindrom("hello"));
//it can be done this way too
let palindrome = (str) => str === str.split("").reverse().join("");
console.log(palindrome("non"));

//3

console.log("Question 3 Maximum Number");
let nums = [3, 6, 2, 8, 3, 1, 5];
let max = 0;
for (num of nums) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

//4

console.log("Question 4 Sum of Array of Elements");
//let nums = [3,6,2,8,3,1,5]--->declared above
let sum = nums.reduce((res, elem) => {
  return res + elem;
});
console.log(sum);

//5

console.log("Question 5 Factorial");
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(6));

//6

console.log("Question 6 Count Vowels");
function Vowels(str) {
  let count = 0;
  let Vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < Vowels.length; j++) {
      if (str[i] === Vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
}
// function Vowels(str) {
//   let count = 0;
//   let vowels = "aeiouAEIOU";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
console.log(Vowels("hi this is me and my name is Noor Faiz Muhammad"));

//7

console.log("Qustion 7 Even Odd");
function evenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOdd(7));

//8

console.log("Question 8 find duplicates");
function duplicate(arr) {
  let unique = [];
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    } else if (!duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}
console.log(
  duplicate([1, 2, 3, 4, 5, 3, 3, 3, 3, 4, 6, 7, 7, 8, 11, 11, 11, 11, 11, 9])
);
// is question ko set wagera ke madad se easily solve kr skte hain...per meko to abhi sirf question solve karne se matlab hai...chahe jaise bhi karoon.!!!

//9

console.log("Fibonnaci Sequence");
function Fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    // fib[i] = fib[i-1] + fib[i-2]
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}
console.log(Fibonacci(8));

//10

console.log("Question No 10 Count Occurances of Each Element in Array");

function count(arr) {
  let counts = {};
  for (let elem of arr) {
    if (counts[elem]) {
      counts[elem] += 1;
    } else {
      counts[elem] = 1;
    }
    
  }
  return counts;
}
console.log(count([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));