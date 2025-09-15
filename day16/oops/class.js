class CreatePencil{//no bracket()

    constructor(name, price, color, company){//to set default values/variables, intialize etc...
        this.name = name
        this.company  = company
        this.color = color
        this.price = price
    
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = text
        h1.style.color = this.color
        document.body.appendChild(h1)
    }

    erase(){
        let h1 = document.querySelectorAll("h1")
        h1.forEach((elem)=>{
            if(elem.style.color === this.color){
                elem.remove()
            }
        })
    }

}

let p1 = new CreatePencil("Lead Pencil", 20, "red", "HB");
let p2 = new CreatePencil("Lead Pencil", 35, "black", "Dux");

///Extends , Suepr///////////


class User{
    constructor(name, address, username,email){
        this.name = name
        this.address = address
        this.username = username
        this.email = email
        this.role = "user"
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent =`${this.name} : ${text}`
        document.body.appendChild(h1)
    }
    checkRole(){
       return`you are a ${this.role}`
    }
}

//let's create for admins but wait user wali sari properties dobara se likhne se acha hia hum "extends" use karlein...let's see 
class Admin extends User{
    constructor(name, address, username, email){
        super(name,address, username, email)
        this.role = "admin"
    }
    remove(){
        document.querySelectorAll("h1").forEach((h1)=>{
            h1.remove()
        })
    }
}

let user1 = new User("Meow", "dil", "meeowthought", "meow@meow.com")
let user2 = new User("Billu","jhopri","doggydon","doggydon@bhau.com")
let a1 = new Admin("Admin","Control Center","appadmin","admin@control.com")

/////////*******Prototypal Inheritance & Classical Inhertance */

//Classical ---> Admin class User class se properties le rhi thi yani user class bana ke usko extend kardia to ye clasical inheritance HTMLDetailsElement...
//inheritance ---> class se koi dursri class inherit krti hai yani class--->class
//but pehle js me classes nahi hoti thi to ye kam object ---> object ke through hota tha and this is called prototypal inheritance

//Prototypal ---> object ----> object
//ek object hai, aap chaho to uski sari props/methods ko inherit kara dete ho doosre object mein 
let coffee = {
    color : "dark"
    ,
    drink : function()
    {
        console.log("coffe is ready. you can drink")
    }
}

let billuCoffee = Object.create(coffee)//it will inherit coffee object's properties in prototype.
billuCoffee.taste = "bitter"//we can add different values too if we want.
console.log(billuCoffee.color)//
console.log(billuCoffee.tase)//
billuCoffee.drink()