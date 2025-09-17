////Promises in JS//////////

//we can creak a promise and it can go into either of two states, either it will resolve or reject. but we have to write code for both states

let pr = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let random = Math.floor(Math.random()*10)
        if(random>5){
            resolve(random + " Resolved")
        }
        else{
            reject(random + " Rejected")
        }
    },1000)
})

pr.then((val)=>{
console.log(val)
})
.catch((val)=>{
console.log(val)
})