let myDate = new Date()
console.log(myDate)

let myDate2 = new Date(2024, 5, 20)
console.log(myDate2)

console.log(myDate.toString()) // Get the number of milliseconds since January 1, 1970
console.log(myDate.toLocaleString()) // Get the date and time in a localized format
console.log(myDate.toJSON()) // Get the date and time in JSON format
console.log(typeof myDate)


let mycreatedDate = new Date(2024, 0, 1) // January 1, 2024
console.log(mycreatedDate)

let mycreatedDate2 = new Date("2024-01-01") // January 1, 2024
console.log(mycreatedDate2)

console.log(mycreatedDate.toLocaleString()) 

let mycreateDate = new Date(2026, 1, 14) // January 1, 2024
let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(mycreateDate.getTime())
