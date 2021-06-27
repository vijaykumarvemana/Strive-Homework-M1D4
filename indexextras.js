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

function ex1(inputArray) {
  let leftIndex = 0
  let rightIndex = inputArray.length - 1
  while(leftIndex < rightIndex){
    let temp = inputArray[leftIndex]
    inputArray[leftIndex] = inputArray[rightIndex]
    inputArray[rightIndex] = temp
    leftIndex ++
    rightIndex --
  }  
//console.log(myArray);
  return inputArray
}
console.log(ex1(myArray)) //expected: [5,3,1]
//another way by using reverse method
let inputArray = [1, 2, 3, 4]
 let revertArray = inputArray.reverse()
 console.log(revertArray)

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

function ex2(array) {
  let firstValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > firstValue) {
           firstValue  = array[i];
        }
    }
    return firstValue;
  // return 
}
let array = [4, 6, 10, 45,290, 100]
console.log(ex2(array))

console.log(Math.max(1, 3, 2));

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

function ex3(array){
  // return 
}

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

function ex4(array){
  // return 
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

function ex5(array) {
  // return 
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

function ex6(string){

  // return 
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

function ex7(array){
  /* WRITE YOUR CODE HERE */
  // return 
}


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

function ex8(array){
  // return 
}
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/

module.exports = {
  ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8
}