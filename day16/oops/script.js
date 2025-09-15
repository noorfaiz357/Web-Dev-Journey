//**********OOPS IN JS***********//

function CreateName(name, age, address, skill, language) {
//this is a constructor function and starts with capital(it's good practice to start with capital letter.)
  this.name = name;
  this.billu = age;
  this.address = address;
  this.skill = skill;
  this.language = language;
}

let name1 = new CreateName("Noor", 18, "Okara", "Engineer", "Urdu");
let name2 = new CreateName("Faiz", 19, "Okara", "Developer", "Urdu");
console.log(name1);

function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
//   this.company = "Billu_Pen cils";//if we want to write a default value here then it'll take maemory everytim we create a new object.
  //so here comes prototypes.
;//let's put this write in prototype 
}

//it will add this key into objects and will not take memory each time object is created.
//agar tumhara constructor function koi field apne prototype per attach karle to us constructor se banne wale new instances yaani ke objects ke pass wo field automatically chali jati hai
//prototype is like a shared memory.
// CreatePencil.prototype.company = "Billu_Pencils"

//hey see!!! we put write fucntion in prototype and save a lot of memory.
CreatePencil.prototype.write = function(text){
    let h1 = document.createElement("h1")
    h1.textContent = text
    h1.style.color = this.color
    document.body.appendChild(h1)
}

let HB = new CreatePencil("Lead Pencil", 20, "red", "HB");
let Dux = new CreatePencil("Lead Pencil", 35, "black", "Dux");

