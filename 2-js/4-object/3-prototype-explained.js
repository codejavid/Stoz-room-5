


function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

const person1 = new Person("jagan", "javid");
const person2 = new Person("arun", "kumar");


// Person.prototype.getFullName = function(){
//         return this.firstName + " " + this.lastName
// };

// console.log(person1);

// console.log(person1.__proto__.__proto__)

person1.__proto__.__proto__.getFullName = function(){
        return this.firstName + " " + this.lastName
};

console.log(person1);
console.log(person1.getFullName());



const x = [1,2,3];

console.log(x);

// Prototype chain

