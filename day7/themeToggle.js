//toggle theme of the site according to my device light/dark mode. It's quite interesting...majjedar cheeji

let mode = window.matchMedia('(prefers-color-scheme : dark)')//gives the current mode of my device///it'll give true if dark is on as ive given dark in prefers-color-scheme.
let body = document.querySelector("body")
let button = document.querySelector("button")

function setMode(){
    
if(mode.matches){
    body.classList.add('dark')
    body.classList.remove('light')
}
else{
    body.classList.add("light")
    body.classList.remove("dark")
}}
setMode()

body.classList.add(localStorage.getItem("theme"))

button.addEventListener("click",(e)=>{
   let classToggle =  body.getAttribute("class")
   console.log(classToggle)
   if(classToggle =="dark"){
    body.classList.remove("dark")
    body.classList.add("light")

    localStorage.setItem("theme", "light")
   }
   else{
    body.classList.remove("light")
    body.classList.add("dark")
    localStorage.setItem("theme", "dark")

   }
})

mode.addEventListener("change",(e)=>{
    setMode()
})