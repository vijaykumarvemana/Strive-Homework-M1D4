/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

function ex1() {
   const myArray = [1, 2, 3, 4, 5]
   return myArray
}

/* EXERCISE 2
Create an object "myObject" containing exactly your "name", "surname", "email", "address" and "age".
*/

const myObject = {
  name : "Vijay Kumar",
  surname: "Vemana",
  email : "vemanavijaykumar154@gmail.com",
  address : { 
   addressline1 : "Via Arpio, 7",
   city: "Roma",
   country: "Italy"
  },
  age : 25,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license. Call it "hasDrivingLicense"
*/
myObject.hasDrivingLicense = true

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete myObject.age
/* EXERCISE 5
Create another object called "anotherObject" with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const anotherObject = {
  name : "Vijay Kumar",
  surname: "Vemana",
  email : "vemanav@gmail.com",
}
let emailVerification = anotherObject["email"] === myObject["email"]
console.log(emailVerification)
/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

function ex6(grossTotal) {
  /* WRITE YOUR CODE HERE */
  if (grossTotal <= 50){
    grossTotal += 10
  }else{
    console.log("free shipping")
  }
     // totalShoppingCart totalShoppingCart + 10
  return grossTotal
}

let totalShoppingCart = 100
let grossTotal = totalShoppingCart

console.log(ex6(grossTotal)) // expected free shipping if totalShoppingCart is higher than 50.


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart = 100
function ex7(grossTotal){
  if ( grossTotal <= 50){
    console.log("free")
  }else{
    grossTotal += 10
  }   // totalShoppingCart = totalShoppingCart + 10
  let discount = grossTotal * 0.2
  grossTotal = grossTotal - discount        
return grossTotal
}

console.log(ex7(totalShoppingCart)) // expected 20% discount and free shipping if discounted price is higher than 50. Other wise, 20% discounted price and +10$ of shipping charged.

/* EXERCISE 8
Create an object representing a car with properties like "brand", "model", "licensePlate".
After you create the first car, clone it 5 times and change the "licensePlate" for each cloned car without affecting the original one.
*/

const car = {
  brand: "Benz",
  model: "A3448",
  licensePlate : "A5837",
}
const car1 = {}
Object.assign(car1, car)
car1.licensePlate = "A5838"
const car2 = {}
Object.assign(car2, car)
car2.licensePlate = "A5839"
const car3 = {}
Object.assign(car3, car)
car3.licensePlate = "A5830"
const car4 = {}
Object.assign(car4, car)
car4.licensePlate = "A5832"


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called "carsForRent" containing all the cars from the previous exercise.
*/

const carsForRent = [car1, car2, car3, car4, car5,]

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.

*/let removeFirst = carsForRent.shift()
  console.log(removeFirst)
  let removeLast = carsForRent.pop()
  console.log(removeLast)
  
   

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and brand properties.
*/
 console.log(typeof car)
 console.log(typeof car["licensePlate"])
 console.log(typeof car["brand"])
/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

const carsForSale = [car1, car2, car3]

const totalCars = carsForSale.concat(carsForRent)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for(let car of carsForSale){
  console.log(car)
}



module.exports = {
  ex1,
  myObject,
  anotherObject,
  ex6,
  ex7,
  carsForRent,
  carsForSale,
  totalCars
}