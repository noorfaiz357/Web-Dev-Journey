let input = document.getElementById("input-box");
let addBtn = document.getElementById("add-btn");
let listContainer = document.getElementById("list-container");
let closeBtn = document.querySelector("span");

addBtn.addEventListener("click",(e)=>{
    if(input.value.trim() === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.textContent = input.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.textContent = "\u00d7"
        li.appendChild(span)
        span.className = "close"
        
    }

    input.value = ""
    saveData()
})

listContainer.addEventListener("click",(e)=>{
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
   }
})


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData()