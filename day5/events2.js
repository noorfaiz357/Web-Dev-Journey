//***************Even Listeneres Continued*****************//

console.log("Event Listeners - Resumed!!!")

//Mouseover

//isko comment kar rha hoon !
// let square = document.querySelector("#square")
// square.addEventListener("mouseover",(e)=>{
//     square.style.backgroundColor = "blue"
// })

//Mouseout

// square.addEventListener("mouseout",(e)=>{
//     square.style.backgroundColor = "red"
// })

//Mousemove

//this is something good. really good.!!!
// window.addEventListener("mousemove",(e)=>{ //this e is called event object.
//     square.style.top = (e.clientY-18) +"px"
//     square.style.left = (e.clientX-18) +"px"
  
// })

//prevent default

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

//Event Bubbling

//event on child also triggers event on parent. this is even bubbling 
//eg:
 let nav = document.querySelector("#nav")
 nav.addEventListener("click",(e)=>{
    alert("clicked")
 })
//even though ye event hum ne nav pe lagaya hai but still iske child, button ko click krne per bhi yahi event chale ga. kuen ke button pe koi aur event ni laga howa...to button apne parent ke event ko trigger kare ga.
 let ul = document.querySelector("ul")
 ul.addEventListener("click",(e)=>{
    console.log(e.target)
    // e.target.style.textDecoration = "line-through"
    e.target.classList.toggle("lt")
 })

 //Evnet Capturing

 let a = document.querySelector(".a")
 let b = document.querySelector(".b")
 let c = document.querySelector(".c")
 let button = document.querySelector(".c button")
//event bubbling happen on parent when clikced on button even ke agar button pe bhi event ho...!

button.addEventListener("click",(e)=>{
    console.log("button clicked")
})
c.addEventListener("click",(e)=>{
    console.log("c clicked")
},true)
b.addEventListener("click",(e)=>{
    console.log("b clicked")
})
a.addEventListener("click",(e)=>{
    console.log("a clicked")
},true)

//input practice characters count

let input = document.querySelector("#char")
let span = document.querySelector("span")
input.addEventListener("input",(e)=>{
    left = 20 - e.target.value.length
    span.textContent = left
    if(left < 0){
        span.style.color = "red"
    } else{
        span.style.color = "black"
    }
})