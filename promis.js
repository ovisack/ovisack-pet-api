const promise1=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("result of promise=>1")
    },1000);
})

const promise2=new Promise((resolve,reject) => {
    setTimeout(()=>{
        // resolve("result of promise=>2")
        reject("ami parbo na");
    },2000);
})



const promise3=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("result of promise=>3")
    },3000);
})

// console.log("calling 3 async tasks");

// promise1.then((Response)=>{
//     console.log(Response);
//     promise2.then((Response)=>{
//         console.log(Response);

//         promise3.then((Response)=>{
//             console.log(Response);
//         })
//     })
// })



Promise.all([promise1,promise2,promise3])

.then(values =>{
console.log(values);
})

.catch(err => console.log(err))