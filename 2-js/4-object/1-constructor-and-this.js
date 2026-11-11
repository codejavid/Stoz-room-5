



// ES5/ES6

// function Person(firstName, lastName){
//    this.firstName = firstName,
//    this.lastName = lastName,
//    this.getFullName = function(){
//     return this.firstName + " " + lastName;
//    }
// }


// const person1 = new Person("jagan", "javid");
// const person2 = new Person("x", "y");


// console.log(person1); 
// console.log(person2); 


// console.log(this);
// console.log(window);

// alert("123");
// window.alert("456");


console.log(this);

function x(){
    console.log(this);
}

x();

const y = {
    a:function(){
        console.log(this);

        function abc(){
            console.log(this);
        }

        abc();
    },
    b:"test"
}

console.log(y);

y.a();




