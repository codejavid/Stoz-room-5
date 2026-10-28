

// if(something){
//     do something
// }else{
//     do something else
// }

const id = 100;

// Equal to value

if(id == "100"){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

if(id != "101"){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

// Equal to value and type

if(id === 100){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

if(id !== 100){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

// Test if undefiend

let greet = "Hello";

if(typeof greet === "undefined"){
  console.log(`I dont have a value in greet so - ${greet}`)
}else{
    console.log(`I have a value ${greet}`);
}

// Greate or less than 
if(100 >= 99){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

if(100 <= 99){
    console.log("CORRET")
}else{
    console.log("INCORRECT")
}

// else if

const color = "orange";

if(color === "red"){
    console.log("This color is red")
}else if(color === "orange"){
      console.log("This color is orange")
}else{
    console.log("I dont the color")
}

// Logical operatoe

// AND - && check both value

const name = "javid";
const age = 66;

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
}else if(age >=13 && age <=19){
    console.log(`${name} is a teen`)
}else{
    console.log(`${name} is a adult`)
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
}else{
    console.log(`${name} can run the race`)
}