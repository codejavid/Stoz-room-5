

// for loop

// Loon can excute a block of a code number of lines

// declare, condition, inc

for(let i = 0; i < 10; i++){
    
    // if(i === 4){
    //     console.log(`${4} is a good number`);
    //     continue;
    // }

    // if(i === 7){
    //     console.log(`hit ${7} stop the number`);
    //     break;
    // }

    // console.log(i);

}

const users = ["Jagan", "Javid", "Akask", "Arun"];

console.log(users[0]);
console.log(users[1]);

console.log(users.length);

for(let i = 0; i < users.length; i++){
    console.log(`${users[i]} - ${i}`);
    console.log(users);
}

users.forEach(function(user, index, arr){
   console.log(`${user} - ${index}`)
   console.log(arr)
})