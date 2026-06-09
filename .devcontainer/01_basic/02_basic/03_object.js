const EmployeeDetails = {
    name : "Akshay Chavan",
    age : 23,
    department: "Software Development",
    emailid : "akshay.chavan@example.com",
    is_logged_in : true,
    skills : ["JavaScript", "Python", "React", "Node.js"],

}
console.log(EmployeeDetails);


EmployeeDetails.emailid = "akshaychatgpt@gmaail.com"
console.log(EmployeeDetails);


EmployeeDetails.greetings = function() {
    console.log("Hello, " + this.name + "! Welcome to the company.");
}
EmployeeDetails.greetings()

console.log(EmployeeDetails.greetings)