

document.querySelector("#btn-1").addEventListener("click", getUsers);



function getUsers(){


   // create a xhr
   
   const xhr = new XMLHttpRequest();

   // Open
   xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);


   xhr.onload = function(){

    let output = "";

    if(this.status === 200){

        const users = JSON.parse(this.responseText);

        users.forEach(function(user){

            output += `
                <ul>
                    <li>ID : ${user.id}</li>
                    <li>Name : ${user.name}</li>
                    <li>Company : ${user.email}</li>
                    <li>Phone : ${user.address.city}</li>
                </ul>
            `;

             document.querySelector("#users-output").innerHTML = output;


        })

    }else{
         document.querySelector("#output").innerHTML = `${this.status} ${this.statusText}`;
    }
    

   }

   xhr.send();


}