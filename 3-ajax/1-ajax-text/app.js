


document.querySelector("#btn").addEventListener("click", getUsers);


function getUsers(){

   // create a xhr
   
   const xhr = new XMLHttpRequest();

   // Open
   xhr.open("GET", "data.txt", true);

   console.log(xhr);

   xhr.onload = function(){

    if(this.status === 200){
        document.querySelector("#output").innerHTML = this.responseText;
    }else{
         document.querySelector("#output").innerHTML = `${this.status} ${this.statusText}`;
    }
    

   }

   xhr.send();


}