//**********TIMERS AND INTERVALS IN JAVASCRIPT************ */
console.log("timers and interval in JS")

let timeout = setTimeout(()=>{
    console.log("hello timeout")
}, 5000)

clearTimeout(timeout)

let interval = setInterval(()=>{
    console.log("hello interval")
},1000)

clearInterval(interval)

let count = 10

let countInterval = setInterval(()=>{
    if(count>=0){
        console.log(count)
        count--
    }
    else{
        clearInterval(countInterval)
        console.log("meow hogaya")// ye interval clear to hojaye ga but still ik bar ye bhi run kare ga..."meow hogaya"
    }
},500)
clearInterval(countInterval)

//download progress bar

let bar = document.querySelector(".progress-bar")
let progress = 0
let barInterval = setInterval(()=>{
        if(progress<=99){
            progress++
            bar.style.width = progress+"%"
            document.querySelector('h3').textContent = progress+"%"

        }
        else{
            
            console.log("donwload completed")
            document.querySelector('h2').textContent = "Download Completed."
            clearInterval(barInterval)
        }
        
},50)

//Alert BAr

let button = document.querySelector("button")
let alert = document.querySelector("#alert_container")

button.addEventListener("click",(e)=>{
    alert.style.left = `${0}px`
    setTimeout(()=>{
        alert.style.left = `${-300}px`
    },3000)
})