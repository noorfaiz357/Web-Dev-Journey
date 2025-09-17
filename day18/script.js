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

// pr.then((val)=>{
// console.log(val)
// })
// .catch((val)=>{
// console.log(val)
// })


///Async Await...!!!/////
//a more clean way to handle resolve reject and promises

async function abcd(){
    try{
        let val = await pr
    console.log("we got pr wiht value : " + val)
} catch(err){
    console.log(err)
}
    }

abcd()//instead of then and catch we can use async/await as shown in above...if promise is resolved to result try me aye ga...otherwise catch me aye ga!!!