// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'John Doe'
tinderUser.isLoggedIn = false

console.log(tinderUser);

// console.log(tinderUser);

const regularUser = {
    email : "john.doe@example.com",
    fullName : {
        userFullName : "John Doe",
        firstname : "John",
        lastName : "Doe"
    }
}

console.log(regularUser.fullName.firstname);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

