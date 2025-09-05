const users = [
    {
        name : "Alice",
        pic : "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Loves hiking and outdoor adventures."
    },
    {
        name : "Bob",
        pic : "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Avid reader and coffee enthusiast."
    },
    {
        name : "Charlie",
        pic : "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Tech geek and gamer."
    },
    {
        name : "David",
        pic : "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3V5fGVufDB8fDB8fHww",
        bio : "Music lover and aspiring chef."
    },
    {
        name : "Eve",
        pic : "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Fitness fanatic and travel blogger."
    },
    {
        name : "Frank",
        pic : "https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Photographer and nature admirer."
    },
    {
        name : "Grace",
        pic : "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Yoga instructor and wellness coach."
    },
    {
        name : "Hannah",
        pic : "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "Artist and creative thinker."
    },
    {
        name : "Ian",
        pic : "https://images.unsplash.com/photo-1615899486509-84e2c782b0da?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio : "History buff and museum lover."
    },
    {
        name : "Alicia",
        pic : "https://plus.unsplash.com/premium_photo-1661895579948-0e518ec2ce52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZSUyMGluJTIwY29sb3IlMjBiYWNrZ3JvdW5kJTIwc3R1ZGlvfGVufDB8fDB8fHww",
        bio : "A part model working for a fashion company."
    }
]
//What I've to do:
//have to show all the users
//have to filter according to the input
//show filtered users
//Additional Task : show no user found when no user founds

function showUsers(arr){
    if(arr.length === 0){
        setTimeout(()=>{
             document.querySelector("#main").innerHTML= "<h2>No User Found</h2>"
        document.querySelector("#main").style.color = "white"
        },500)
        return // this return is important as it stops function write here.
    }
    document.querySelector("#main").innerHTML= ""
    arr.forEach((user) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const img = document.createElement("img")
        img.src = user.pic
        img.classList.add("bg-img")

        const blurredLayer = document.createElement("div")
        blurredLayer.classList.add("blurred-layer")
        blurredLayer.style.backgroundImage = `url(${user.pic})`

        const content = document.createElement("div")
        content.classList.add("content")

        const h3 = document.createElement("h3")
        h3.textContent = user.name
        const p = document.createElement("p")
        p.textContent = user.bio
        
        const main = document.querySelector("#main")
        content.appendChild(h3)
        content.appendChild(p)
        card.appendChild(img)
        card.appendChild(blurredLayer)
        card.appendChild(content)
        main.appendChild(card)
        
    });
}

showUsers(users)

let input = document.querySelector("input")
input.addEventListener("input",()=>{
    let newUsers = users.filter((user)=>{
        return user.name.toLowerCase().startsWith(input.value.toLowerCase())
    })
    showUsers(newUsers)
})