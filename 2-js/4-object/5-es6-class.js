

class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

}


const javid = new Person("jagan", "javid");


class Customer extends Person{

    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName)
        this.phone = phone;
        this.membership = membership
    }

    // greeting(){
    //      return `Hello there 2 ${this.firstName} ${this.lastName}`
    // }

}


const javidCustomer = new Customer("jsahkdj", "kasjdkj", "111-111-1111", "Standard");


console.log(javidCustomer);