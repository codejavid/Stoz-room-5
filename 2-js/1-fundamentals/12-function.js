

// Two phase

// 1 - creation
// 2 - excution

// Function declaration || function statement

function greet(firstName = "john", lastName = "Doe"){

  // default parameter
  
//   if(typeof firstName === "undefined"){firstName = "John"} 
//   if(typeof lastName === "undefined"){lastName = "Doe"} 

  console.log(firstName, lastName)
}

// greet("jagan", "Javid");

// greet("Arun", "kumar");

// greet();


// Function expression
const add = function(x = 5){
    console.log(x + 5)
};

add();
add(10);

