


// function a() {
//     return "a";
// }

// async function b() {
//     return "b";
// }

// console.log(a());
// console.log(b());

// b().then(data => console.log(data));


async function myFunc() {
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 3000);
    })

    const error = true;

    if(error){
        const res = await promise;
        return res;
    }else{
        await Promise.reject("Somewent worng")
    }

}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err))