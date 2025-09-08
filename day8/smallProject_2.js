// have to create new cards
//save data in the local storage
//show cards available in the local storage
//handle button
//handle filters

//All Items Selection
let stack = document.querySelector(".stack")
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");
let form = document.querySelector("form");
let add = document.querySelector("#add-note");
let upBtn = document.querySelector("#upBtn")
let downBtn = document.querySelector("#downBtn")


let imageUrlInput = form.querySelector(
  "input[placeholder = 'https://example.com/photo.jpg']"
);
let fullNameInput = form.querySelector(
  "input[placeholder = 'Enter full name']"
);
let homeTownInput = form.querySelector(
  "input[placeholder = 'Enter home town']"
);
let purposeInput = form.querySelector(
  "input[placeholder = 'e.g., Quick appointment note']"
);

let categoryInputs = form.querySelectorAll("input[name = 'category']");
let submitButton = form.querySelector(".submit-btn");

const tasks = [];

//Actual code

function saveToLocalStorage(obj) {
  //get old tasks from local storage
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

add.addEventListener("click", (e) => {
  formContainer.style.display = "initial";
});

closeForm.addEventListener("click", (e) => {
  formContainer.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let imgUrl = imageUrlInput.value.trim();
  let fullName = fullNameInput.value.trim();
  let homeTown = homeTownInput.value.trim();
  let purpose = purposeInput.value.trim();

  if (imgUrl === "") {
    alert("Image Url is required");
    return;
  }
  if (fullName === "") {
    alert("Full Name is required");
    return;
  }
  if (homeTown === "") {
    alert("Home Town is required");
    return;
  }
  if (purpose === "") {
    alert("Purpose is required");
    return;
  }

  let selectedCategory = false;

  categoryInputs.forEach((cat) => {
    if (cat.checked) {
      selectedCategory = cat.value;
    }
  });

  saveToLocalStorage({
    imgUrl,
    fullName,
    homeTown,
    purpose,
    selectedCategory,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards() //huhhh!!! ufffff!!!!
});

function showCards() {

    stack.innerHTML = "";

  let tasks = localStorage.getItem("tasks");
  tasks = JSON.parse(tasks);
  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList.add("card-img");
    const cardImg = document.createElement("img")
    cardImg.src = task.imgUrl
    cardImg.alt = "profile_img"
    cardImgDiv.appendChild(cardImg)   
    card.appendChild(cardImgDiv)

    const name = document.createElement("h2")
    name.textContent = task.fullName
    card.appendChild(name)

    const hometownInfo = document.createElement("div")
    hometownInfo.classList.add("info","hometown")

    const hometownLabel = document.createElement("p")
    hometownLabel.textContent = "Hometown"

    const hometownValue = document.createElement("p")
    hometownValue.textContent = task.homeTown

    hometownInfo.appendChild(hometownLabel)
    hometownInfo.appendChild(hometownValue)
    card.appendChild(hometownInfo)

    const bookingInfo = document.createElement("div")
    bookingInfo.classList.add("info","booking")

    const bookingLabel = document.createElement("p")
    bookingLabel.textContent = "Purpose"

    const bookingValue = document.createElement("p")
    bookingValue.textContent = task.purpose

    bookingInfo.appendChild(bookingLabel)
    bookingInfo.appendChild(bookingValue)
    card.appendChild(bookingInfo)

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("phone");
    callBtn.innerHTML = '<i class="fas fa-phone"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("message");
    msgBtn.innerHTML = '<i class="fa-regular fa-message"></i> Message';

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    stack.appendChild(card)

  });
   let lastChild = stack.lastElementChild
    if(lastChild){
        stack.insertBefore(lastChild, stack.firstElementChild)
        //update
    }
}
showCards()

upBtn.addEventListener("click",(e)=>{
    let lastChild = stack.lastElementChild
    if(lastChild){
        stack.insertBefore(lastChild, stack.firstElementChild)
        //update
    }
})
downBtn.addEventListener("click",(e)=>{
 let firstChild = stack.firstElementChild
    if(firstChild){
        stack.appendChild(firstChild)
        //update
    }
})
