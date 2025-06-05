

// 
function greet(userName, message = "Hello!"){
    console.log("My name is: " + userName + ". " + message);
}

greet("Matan Toledano");
greet("Matan Toledano", "Hi! What's up?");


// ====================================


let firstName = "Matan";
let lastName = "Toledano";

export default (firstName, lastName) => {
    console.log("hello " + firstName + " " + lastName);
}



// ====================================


// Arrow function, expression body – no need for return
const sumExpr = (a,b) => a + b;
console.log(sumExpr(2,3));

