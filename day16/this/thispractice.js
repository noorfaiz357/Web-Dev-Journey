let form = document.querySelector("form")
let username = document.querySelector("#name")
let role = document.querySelector("#role")
let bio = document.querySelector("#bio")
let photo = document.querySelector("#photo")
let usersContainer = document.querySelector(".users")

let userManager = {
    users : [],
    init : function(){
        form.addEventListener("submit",this.submitForm.bind(this))//without bind, "this" will be form and after bind, "this" will be object
    },
    submitForm : function(e){
        e.preventDefault();
        console.log(this)//--->userManager Object
        this.addUser()//userManager Object
    },
    addUser : function(){
        this.users.push({
            username : username.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value,
        })

        this.renderUsers()
        form.reset()
    },
    renderUsers  : function(){
        usersContainer.innerHTML = ""
        this.users.forEach((user, index)=>{
            const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600";
      removeBtn.textContent = "Remove User";
      removeBtn.dataset.index = index;
      card.appendChild(removeBtn);

      console.dir(removeBtn)

      usersContainer.appendChild(card);
        })
        console.log("rendered")
    },
    removeUser : function(){

    },

}

userManager.init()

usersContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
    //    console.log( e.target.tagName.dataset.index)
       console.dir( e.target.tagName)
    }
})