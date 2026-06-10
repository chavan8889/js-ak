function myName(){
    console.log("A"),
    console.log("K"),
    console.log("S"),
    console.log("H"),
    console.log("A"),
    console.log("Y")
}


// myName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}


const result = addTwoNumbers(2,3)
console.log("Result:",result);

// let result = num1 + num2
// return result

function loginUserMessage(username){


}

// Arrow function
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

function calculatecarprice(val1,val2,...num1){
    return  num1

}
console.log(calculatecarprice(100,200,300,400,500));

const user = {
    username: "akshay",
    price : 1000,

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);