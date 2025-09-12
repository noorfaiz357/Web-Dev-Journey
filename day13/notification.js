let toasterContainer = document.querySelector(".toaster-container")

function createToaster(config){
    return function(notification){

        let div = document.createElement("div")
        div.textContent = notification

        div.className = `notification ${config.theme === "dark" ? "dark" : "light"} `
        console.log(`hi this is div ${div}`)
        toasterContainer.appendChild(div)
        if(config.positionX !== "left" || config.positionY !== "top"){
            toasterContainer.className = `toaster-container ${config.positionX === "right" ? "right" : "left"} ${config.positionY === "bottom" ? "bottom": "top"}`
        }
        setTimeout(()=>{
            document.querySelector(".toaster-container").removeChild(div)
        }, config.duration*1000)
    }   
}

let toaster = createToaster({
    positionX : "right",
    positionY : "bottom",
    theme : "dark",
    duration : 3,
})
//calling function/making notification
toaster("Download Done")
setTimeout(()=>{
    toaster("Faiz accepted your request!!!")
},2000)
let count = 0
setInterval(()=>{
    count++
    toaster(`pollu Message : ${count}`)
},1300)