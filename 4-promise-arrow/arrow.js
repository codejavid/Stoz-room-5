


// function x(){
//     return "Hai"
// }

// console.log(x());

// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();


// Arrow function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// One line return 

// const sayHello = () => "Hello";
// const sayHello = () => 5;
// const sayHello = () => true;
// const sayHello = () => [true];
// const sayHello = () => ({msg:"Hai"})

// console.log(sayHello());

const users = ["javid", "jagan", "akash"];

// users.forEach(function(user){
//     console.log(user);
// })

users.forEach((user, index) => {
    console.log(`${user} - ${index}`)
})