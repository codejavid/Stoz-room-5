


function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}


// Greeting
Person.prototype.greeting = function(){
    return `Hello world ${this.firstName} ${this.lastName}`
}


const javid = new Person("jagan", "javid");

// console.log(javid);

// Customer object

function Customer(firstName, lastName, phone, membership){

    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;

}

// Inherit the person prototype methods to customer

Customer.prototype = Object.create(Person.prototype);



const javidCustomer = new Customer("jagan", "javid", "111-111-1111", "standard");


console.log(javidCustomer.greeting());