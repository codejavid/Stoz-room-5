

document.querySelector("#button-1").addEventListener("click", getCustomer);
document.querySelector("#button-2").addEventListener("click", getCustomers);


function getCustomer(){


   // create a xhr
   
   const xhr = new XMLHttpRequest();

   // Open
   xhr.open("GET", "customer.json", true);


   xhr.onload = function(){

    if(this.status === 200){

        const customer = JSON.parse(this.responseText);

        const output = `
                    <ul>
                        <li>ID : ${customer.id}</li>
                        <li>Name : ${customer.name}</li>
                        <li>Company : ${customer.company}</li>
                        <li>Phone : ${customer.phone}</li>
                    </ul>
        `;

        document.querySelector("#customer").innerHTML = output;

    }else{
         document.querySelector("#output").innerHTML = `${this.status} ${this.statusText}`;
    }
    

   }

   xhr.send();


}



function getCustomers(){


   // create a xhr
   
   const xhr = new XMLHttpRequest();

   // Open
   xhr.open("GET", "customers.json", true);


   xhr.onload = function(){

    let output = "";

    if(this.status === 200){

        const customers = JSON.parse(this.responseText);

        customers.forEach(function(customer){

            output += `
                <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Name : ${customer.name}</li>
                    <li>Company : ${customer.company}</li>
                    <li>Phone : ${customer.phone}</li>
                </ul>
            `;

             document.querySelector("#customers").innerHTML = output;


        })

    }else{
         document.querySelector("#output").innerHTML = `${this.status} ${this.statusText}`;
    }
    

   }

   xhr.send();


}