////forEach--->gives each item of an array

const names = ["ali", "fahand", "ahmad", "Noor","Faiz","Ahtsham"];

names.forEach((name) => {
  if (name === "fahand") {
  } else {
    console.log(name);
  }
}); //break and continue are not allowed in forEach.

////Map--->previous array se naya array bananay ke liye sabhi items ke liye

let mapArray = names.map((name) => {
  return name + " g";
  //return 1 // [1,1,1,1,1]
});
console.log(mapArray); //['ali g', 'fahand g', 'ahmad g', 'Noor g','Faiz g','Ahtsham g']

////Filter--->work as map but only store true values in new Array.

let filterArray = names.filter((name) => {
  return name.length > 3; //['fahand','ahmad','Noor','Faiz','Ahtsham']
  // return name.startsWith("a")//['ali','ahmad','ahtsham']
});
console.log(filterArray);

////Destructuring

const user = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@gmail.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
  phoneNumbers: [
    {
      type: "home",
      number: "555-12313"
    },
    {
      type: "work",
      number: "555-67868",
    },
  ],
  isActive: true,
};

let zipCod = user.address.zipCode;//normally
//by destructuring
let { zipCode } = user.address;
let { type } = user.phoneNumbers[0];

console.log(zipCode);
console.log(type);

//Destrutturing in Arrays
// const names = ["ali", "fahand", "ahmad", "Noor",'Faiz','Ahtsham'];
let [firstName, secondName, thirdName, forthName,fifthName,sixthName] = names
console.log(thirdName)//will give the third name.
let [_, name] = names
console.log(name)//will give the second name.

//////Spread and Rest Operators ... 
console.log("Spread and Rest Operators!!!")

////Spread Operator

//if we try to copy names array in copyName
const copyName = names 
//it is referred, not copied!!! 
copyName.pop()
console.log(copyName)
console.log(names) // both arrays are changed

const spreadCopyName = [...names]
//now it is coppied not referred. any changes in this array wont affect names array.
spreadCopyName.pop()
console.log(spreadCopyName)
console.log(names)
//Objects 

const smallObject = {
    name : "John"
    ,
    age : 30,
    city: "New York",
};

const newObj = {...smallObject}

////Rest Operator

function abcd(a,b,c,...rest){
    console.log(a,b,c,rest)//abc normally print honge and baki ke array me chale jayein ge....!!!!
}

abcd(1,2,3,4,5,6,7,8)//1 2 3 [4,5,6,7,8]


//Questions

//1 : Merge two array in a single array.

const names1 = ["ali", "faiz", "ahmad", "noor"]
const names2 = ["haseeb","mubashar","hassan"]

const allNames = [...names1,...names2]
console.log(allNames)

//2 : filtering an array of objects based on search query

const products = [
  { name: "Monitor", type: "electronic" },
  { name: "Laptop", type: "electronic" },
  { name: "Headphones", type: "electronic" },
  { name: "Desk Chair", type: "furniture" },
  { name: "Office Desk", type: "furniture" },
  { name: "Notebook", type: "stationery" },
  { name: "Pen Set", type: "stationery" },
  { name: "Sticky Notes", type: "stationery" },
];

let newarr = products.filter(function(prod){
    return prod.type ==="electronic"
})
console.log(newarr)

//3 Mapping over an array of use data to create a list of user cards.

const users = [
  { name: "John", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Sophia", age: 22 },
];

let newUser = users.map(function(user){
    return `<h3>${user.name}</h3><h5>${user.age}</h5>`
})
newUser.forEach((user)=>{
    let body = document.querySelector("body")
    let div = document.createElement("div")
    div.innerHTML = user
    body.append(div)
})
console.log(newUser)

//4 Grouping an array of oobjects by a specific property (e.g., grouping users by rol).

const billus = [
  { name: "Sophia", role: "admin" },
  { name: "John", role: "admin" },
  { name: "Alice", role: "user" },
  { name: "Bob", role: "user" },
  { name: "Emma", role: "user" },
];

let obj = {}

billus.forEach((user)=>{
    if(obj[user.role]){
        obj[user.role].push(user)

    }
    else{
        obj[user.role] = []
        obj[user.role].push(user)
    }
})
console.log(obj)

//5 Removing or updating a specific objet in an array of dta based on a unique ID.
const members = [
  { name: "Sophia", id: 101, age: 22 },
  { name: "John", id: 102, age: 25 },
  { name: "Alice", id: 103, age: 28 },
  { name: "Bob", id: 104, age: 30 },
  { name: "Emma", id: 105, age: 24 },
];

let newMembers = members.filter((user)=>{
    return user.id != 103
})
console.log(newMembers)