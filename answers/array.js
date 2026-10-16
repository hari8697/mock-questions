// Question 1.: Given an array of numbers [1, 2, 3, 4, 5], how would you create a new array containing only the even numbers?
// Expected output: [2, 4]

const arr1 = [1, 2, 3, 4, 5]
const evenOnlyArr = arr1.filter((item, idx) => {
  if (item % 2 == 0) {
    return item
  }
})

console.log(evenOnlyArr)

// Question 2.: Given an array of numbers [10, 20, 30, 40], how would you calculate the sum of all the numbers?
// Expected output: 100

const arr2 = [10, 20, 30, 40]

// Reduce method
const sum = arr2.reduce((accumulator, currVal) => {
  return accumulator + currVal
}, 0)

// Map/Loop way
let sum2 = 0
arr2.map((item) => {
  sum2 += item
})

console.log(sum, sum2)
