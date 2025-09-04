//***********EVENT LISTENERS*************/

console.log("Event Listeners in JavaScript")

let h1 = document.querySelector("h1")
h1.addEventListener("click",(event)=>{
    h1.style.color = "blue"
})

function dblclick(){
    p.style.color = "green"
}
let p = document.querySelector("p")
p.addEventListener("dblclick", dblclick)

//Remove Event Listener

//remove krte time bhi wahi function dena paray ga...so humne dblclick function bana ke lagate aur hatate time parse kardia.
p.removeEventListener("dblclick",dblclick)

p.addEventListener("click", function(){
    p.style.color = "red"
})

let input = document.querySelector("input")
input.addEventListener("input",(e)=>{
    if(e.data != null){
        console.log(e.data)
    }
})

//Change Even Listener--->when we select input or change in textarea.

let select = document.querySelector("select")
let device = document.querySelector("h3")
select.addEventListener("change",(e)=>{
    console.log(e.target.value)
    device.textContent = `${e.target.value} Selected.`
})

//changing letter on screen when key pressed
// let key = document.querySelector("#main h1")
// window.addEventListener("keydown",(e)=>{
//     // console.log(e.key)
//     if(e.key == " "){
//     key.textContent = "space"

//     } else{
//     key.textContent = `${e.key}`
//     }
// })

//we are gonnna make now that input button stylish and majjedar...

let btn = document.querySelector("#btn")
let inputField = document.querySelector("#input")
btn.addEventListener("click",()=>{
    inputField.click()
})

inputField.addEventListener("change",(e)=>{
    console.log(e)
    let file = e.target.files[0]
    if(file){
        
        btn.textContent = e.target.files[0].name
    }
})

// Submit Event Listener 

let form = document.querySelector("form")
let inputs = document.querySelectorAll("form input")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute("src", inputs[0].value)

    let h3 = document.createElement("h3")
    h3.textContent = inputs[1].value

    let h5 = document.createElement("h5")
    h5.textContent = inputs[2].value
 
    let p = document.createElement("p")
    // p.textContent= "bara hi berozgar nalla hai ye ik number ka aur university se chuttian bhi karta hai ganda bacha hai ye."
    p.textContent = inputs[3].value

    let main = document.querySelector("#cards")

    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)

    main.appendChild(card)

    inputs.forEach((input)=>{
        if(input.type != "submit"){
            input.value = ""
        }
    })
})
