/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

const myArray = [1,3,5]
  let leftIndex = 0
  let rightIndex = myArray.length - 1
  while(leftIndex < rightIndex){
    let temp = myArray[leftIndex]
    myArray[leftIndex] = myArray[rightIndex]
    myArray[rightIndex] = temp
    leftIndex ++
    rightIndex --
  }  
  console.log(myArray)

//another way by using reverse method

let inputArray = [1, 2, 3, 4]
let revertArray = inputArray.reverse()
console.log(revertArray)

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let maxArray = [4, 6, 10, 45,290, 100]
let maxValue = maxArray[0]
for (let i = 1; i < maxArray.length; i++) {
        if (maxArray[i] > maxValue) {
           maxValue  = maxArray[i]
        }
    }
console.log(maxValue)

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let minarray = [4, 5 ,45, 1, 8, 540]
let minvalue = minarray[0]
for (let i = 1; i < minarray.length; i++){
  if (minarray[i] < minvalue) {
     minvalue  = minarray[i]
  }
}
console.log(minvalue)

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let arrayDiff = [1, 5, 4, 2, 3, 10,]
let evenNumbersArray = []
for (let i = 0; i < arrayDiff.length; i++) {
  if (arrayDiff[i] % 2 === 0){
    evenNumbersArray.push(arrayDiff[i])
  }     
}
console.log(evenNumbersArray)

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/


let evenNumbers = [1, 5, 2, 3, "cat", "whatever", {
  name: "Test"
}]
for (let i = 0; i < evenNumbers.length; i++) {
  if (typeof evenNumbers[i] === "number" && evenNumbers[i] % 2 === 1) {
      evenNumbers.splice(i, 1)
      i-- // i = i -1
  }
} 
console.log(evenNumbers)
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let str = "educationalinstituition"
let result = ""
for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "u":
        case "o":
            break;
        default:
            result += str[i]
    }
}
console.log(result)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

let toIncreasing = [ 1, 5, 10,"cat", "bob", true, 10]

for (let i = 0; i < toIncreasing.length; i++) {
    if (typeof toIncreasing[i] === "number")
        toIncreasing[i]++
}
console.log(toIncreasing)


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let replaceArray = ["strive", "is", "amazing"]
for (let i = 0; i < replaceArray.length; i++){
  replaceArray[i] = replaceArray[i].length
}
console.log(replaceArray)

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/

