// Question: Write a JavaScript loop that iterates through numbers from 1 to 15
// and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz"
// for numbers that are multiples of both. For all other numbers, print the number itself.

// Expected output (first 15 numbers):
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// Your solution here:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log("Hello world!")

for (let i = 0; i < array.length; i++) {
  const element = array[i]
  if (element % 3 === 0 && element % 5 === 0) {
    console.log("FizzBuzz")
  } else if (element % 3 === 0) {
    console.log("Fizz")
  } else if (element % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(element)
  }
}
