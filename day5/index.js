//*******************THE DOM IN JS************************ */

//getElementById

console.log("By ID")
const heading = document.getElementById("heading")
console.log(heading)
console.dir(heading)

//getElementByClassName

console.log("By Class Name")
const para = document.getElementsByClassName("para")
console.log(para)//will give HTML Collection
console.dir(para)//will give HTML Collection

//querySelector

console.log("By Query Selector")
const headingById = document.querySelector('#heading')
console.log(headingById)
console.dir(headingById)
const headingByClass = document.querySelector('.heading')
console.log(headingByClass)
console.dir(headingByClass)

//querySelectorAll

console.log("By Query Selector All")
const paragraph = document.querySelectorAll('p')
console.log(paragraph)
console.dir(paragraph)

//Doing Text Manipulations

// headingById.innerText = "Hi! Kaise ho?"
// headingById.textContent = "Hi There!"
headingById.innerHTML = "<i>Hi!</i>"
console.dir(headingById)

//Attribut Manipulation

console.log("Attribute Manipulation")
let a = document.querySelector('a')
let href = a.getAttribute("href")
console.log(href)
console.log(a.href)
a.setAttribute("href","https://www.facebook.com")
a.removeAttribute("href")
console.log(a.href)

//Dynamic DOM Manipulation

let h2 = document.createElement("h2")
h2.textContent = "Hello Ji"
document.body.append(h2)//body ke last pe
document.body.prepend(h2)//body ke top pe

let h3 = document.createElement("h3")
h3.textContent = "hey Im appended"

document.querySelector("div").appendChild(h3)
h3.remove()//will remove this.

//Manipulating STYLES

console.log("Maniputlating Styles By JS")

let h1 = document.querySelector("h1")
console.dir(h1)
// h1.style.color = "blue"
// h1.style.fontSize = "50px"
h1.classList.add("color")
// h1.classList.remove("heading")
h1.classList.toggle("heading")


//Select all li andd print their text 

//using forEach loop
let list = document.querySelectorAll("li")
list.forEach(function(val){
    console.log(val.textContent)
})
//using for loop
for(let i = 0; i< list.length; i++){
    console.log(list[i].textContent)
}

//Select a paragraph and replace it with : <b>Updated</b> by JavaScript
let changePara = document.querySelector("#changePara")
changePara.innerHTML = "<b>Updated</b> by JavaScript"

 //Create a new list item and add it to to the end of ul
 let item = document.createElement("li")
 item.textContent = "melon"
 document.querySelector("ul").appendChild(item)

 //Create a new image lement with a placeholder source and add it at the top of a div.
 let div = document.querySelector("#img_src")
 let img = document.createElement("img")
 img.setAttribute("src","data:image/png;base64,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")
 div.appendChild(img)

 //Select first item from list and delete it.

let ul = document.querySelector("ul")
let firstItem = ul.querySelector("li")
ul.removeChild(firstItem)

//change bg color of an element
ul.style.backgroundColor = "royalblue";
ul.style.color = "white";

//Add a highlight class to every even item in a list

let items = ul.querySelectorAll("li:nth-child(2n)")
items.forEach(item => {
  item.classList.add("highlight");
});

//set font size of all p tangs.

let p = document.querySelectorAll("p")
p.forEach(para=>{
  para.style.fontSize = "8px";
});

