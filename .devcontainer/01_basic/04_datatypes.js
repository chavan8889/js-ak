const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, because each Symbol is unique

const heros = ["ironman", "spiderman", "thor"]
let myObj = {
    name: "akshay",
    age: 23,
    isLoggedIn: false
}

console.log(typeof score, typeof scoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof heros, typeof myObj)