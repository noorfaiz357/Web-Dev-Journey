// fetch("https://randomuser.me/api/?results=5")
// // .then((rawdata)=>{
// //     // console.log(rawdata)
// //     return  rawdata.json()
// // }).then((data)=>{
// //     console.log(data.results[0].name.first)
// // })
// .then((raw)=> raw.json())
// .then((data)=> console.log(data.results))
// .catch((er)=>{
//     console.log("error agaya bhai")
// })


function getUsers(){
    fetch("https://randomuser.me/api/?results=5")
.then(raw=> raw.json())
.then((data) => {
    
    document.querySelector("#card-container").innerHTML = ""
    data.results.forEach(user => {
       console.log(user)


        // Create the outer container
const card = document.createElement("div");
card.className = "w-[350px] h-[200px] bg-gray-800 rounded-lg shadow-lg overflow-hidden flex";

// Create the image
const img = document.createElement("img");
img.className = "w-1/3 h-full object-cover";
img.src = user.picture.large;
img.alt = "User Image";
card.appendChild(img);

// Create the text container
const textContainer = document.createElement("div");
textContainer.className = "p-4 flex flex-col justify-center";
card.appendChild(textContainer);

// Name
const name = document.createElement("h2");
name.className = "text-lg font-semibold text-white";
name.textContent = user.name.first + " " +user.name.last;
textContainer.appendChild(name);

// Job title
const phoneNumber = document.createElement("p");
phoneNumber.className = "text-gray-400 text-sm";
phoneNumber.textContent = user.cell;
textContainer.appendChild(phoneNumber);

// Location
const location = document.createElement("p");
location.className = "text-gray-500 text-xs mt-2";
location.textContent = "Location: " + user.location.city;
textContainer.appendChild(location);

// Finally, append the card to the body or another container
document.querySelector("#card-container").appendChild(card);



    });
})

}

getUsers()

document.querySelector("#refresh").addEventListener("click",()=>{
    console.log("refreshed")
    getUsers()
})


function getFact(){
    let fact = document.querySelector(".fact")
    fetch("https://catfact.ninja/fact")
.then((raw)=>{
    return raw.json()
})
.then((data)=>{
    fact.textContent = data.fact
})
.catch((err)=> console.log(err + ", nahi bhai nai howa fetch"))
}
getFact()
document.querySelector(".factbtn").addEventListener("click",getFact)



fetch('https://programming-quotesapi.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))