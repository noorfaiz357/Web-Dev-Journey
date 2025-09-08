let input = document.querySelector("input")
let buttons = document.querySelectorAll("button")

buttons.forEach((button)=>{
    button.addEventListener("click",(btn)=>{
    if(btn.target.textContent != "=" && btn.target.textContent != "AC" && btn.target.textContent != "DEL"){

        console.log(btn.target.textContent)
    }
    else{
        console.log("Operators pressed")
    }
})
})

let func = document.querySelectorAll(".func")

func.forEach((e)=>{
    e.addEventListener(click,(f)=>{
        console.log(e.target.textContent)
    })
})