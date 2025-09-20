//So today we are gonna cover some questions and usually common aksed questions in JavaScript.

//1. What is JS and where it is used?
//It is a high level programming language used to create browser's web interactvie and used in web and mobile applications.

//2. What are Template Literals?
// Template literals is a way to write variables using Backticks (``) and writing vars like this inside backticks : ${variable}
let a = 10;
let b = 20;
// so template literals are be like : 
console.log(`the sum of ${a} and ${b} is ${a+b}`)

//3. What is hoisting and give example.
//In hoisitng, variables and functions declarations are moved or hoisted to the top of their scope before their execution.
// e.g
greet() //this will execute correctly even though we are calling it before it is crated.
function greet(){
    console.log("Hello")
}
//hoisting is of 2 types : i) Fucntion Hoising--> we have seen above ii) VAiable Hoisting---> we can see below!!!
console.log(c)//undefined
// console.log(d)//reference error
// console.log(e)//reference error

var c = 1
let d = 2
const e = 3

//4. diff between let var const

if(true){
    var A = 10
    let B = 20 
    const C = 30
}
console.log(A)//will give 10
// console.log(B)//reference error
// console.log(C)//reference error
//let and const have block scope but var has only fucntion scope not block
//if a var is in function then it can't be accessed outside of funciton.

//5. What are data types available in JS?
//Two types : Primitive and Non-primitive
//Prmitive Data Types are immutable means can't be modified.
//Non-Primitive data types are mutable.
//Primitive includes Number, String, Boolean, Null, Undefined, Symbol, BigInt
//Non-Primitive includes Object, Array and Function

//6. What is an array in Js and how to accesss its elements?
//Array is an ordered collection of values or elements and elements can be any type but should be of same type..
//To create an Array : 
let fruit = ["apple","banana","mango"]
let fruits = new Array("banana","orange","watermelon")
console.log(fruit)
console.log(fruits)
//To access its elements : 
console.log(fruits[0])
console.log(fruit[2])
//we can iterate on array throgh a for loop or forEach loop too and etc.

//7. Diff between == and ===
// The difference aises because double equal  performs type coercion which converts the string 5 to number and then compare them but triple equal doesn't do that.
console.log(5 == "5")//true
console.log(5 === "5")//false

//8. What is purpose of the isNaN funtion?
//Nan is a Special JS value that checks if a given value is not a Number.
console.log(isNaN('helo'))//true
console.log(isNaN('5'))//false
console.log(isNaN(5))//false
console.log(isNaN(null))//false
console.log(isNaN(undefined))//true
console.log(isNaN(NaN))//true
//9. What is use of typeof operator?
// Let's also check types of them.
console.log(typeof('helo'))//string
console.log(typeof('5'))//string
console.log(typeof(5))//number
console.log(typeof(null))//object
console.log(typeof(undefined))//undefined
console.log(typeof(NaN))//number

//10. What is null and undefined
let f;//The variable has been declared but not initialized hence it is given the default value of undefined.
console.log(f)
//while null is the intentional value given to variable. and it can reassigned later on.
let g = null;
console.log(g)//--->null
g = "meow"
console.log(g)//--->meow


//Medium Questions from Now on:

//11. What is purpose of Map Method in JS
//The map() method in JS is used to crate a new array by applying a specified function to each element in an existing array.
//we can perform operations for each value and create a new array using Map and doesn't affect the original array.
let numbers = [1,2,3,4,5]
let n = numbers.map((n)=>{
    return n*2
})
console.log(n)

//12. What is Event Bubbling and Event Capturing in JS?
//Even Bubbling : A propagation model where events are handled from the innermost element to the outermost. and by default event bubbling occurs.
//Event Capturing : A propagation model where events are handled from the outermost element to the innermost and it has to be turned true to actually show this.
document.querySelector(".top").addEventListener("click",(e)=>{
    console.log("outer div has been clicked")
},true)
document.querySelector(".mid").addEventListener("click",(e)=>{
    console.log("mid div has been clicked")
}, true)
document.querySelector(".inner").addEventListener("click",(e)=>{
    console.log("inner div has been clicked")
})

//13. What are Higher Order Functions and give Example.
//Funtions that accepts other functions as a parameter
//They take a function as an argument or rut

const double = numbers.map(function (num){
    return num ** num
})
console.log(double)//map is a higher order function.

//14. what is IIFE? (immediately ivoked function expression)
//An IIFE is a js function that is defined and executed as it is created.

function sayHello(){
    console.log("Hello World")
}
// sayHello()//normal function

//an iife runs automatically without calling it.
(function sayHi(){
    console.log("Hi World")
}) ();

//15. What do you understand by closures in JS?
//In JS, a closure is a function that remembers the environment in which it was created even after the outer function has finished executing.

function outerFunction(){
    let outerVar = "this is outer varaible"
    return function innerFunction(){
        console.log(outerVar)
    }
}

const closureFunction = outerFunction()
console.log(closureFunction)
closureFunction()

function counter(){
    let count = 0;

    return{
        increament : function(){
            count++;
            return count
        },
        decrement : function(){
            count--;
            return count
        },
        displayCount : function(){
            let msg = `Current count : ${count}`
            return msg;
        }
    }
}

const myCounter = counter()
console.log(myCounter.increament())
console.log(myCounter.decrement())
console.log(myCounter.displayCount())

//16. How do setTimeout and setIntervel work?
//in js, both are functions used to schedule tasks to run after a specified amount of time.
//both are part of the Web Api's provided by the browser (or Node.js in a server environment). and they allow you to create delayes or repeated actions in your code.

const timerIDd = setTimeout(()=>{
    console.log("hello from timeout")
},2000)

clearTimeout(timerIDd)

const intervalID = setInterval(()=>{
    console.log("hello from interval")
})

clearInterval(intervalID)

//17. Explain the concept of Promises in JavaScript.
//Promises handle asynchronous taksks in JS by providing a more readable and structured approach than callback for handling outputs.
//Pending, Fulfilled, Rejected.

//18. What is use of Async and Await in JS
//Async---> Declaring a function with async makes it return a promise
//Await---> it pauses the execution of the code until the promise it's waiting for is resolved, then returns the resolved value.

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log("data is fetched : ", data)
    }
    catch(err){
        console.log("Error hai bro : ", err)
    }
}

// fetchData()

//19. Diff between Call, Apply and Bind
//call---> invokes the function immediately, with this set to thisArg, and accepts arguments one by one
function cook(ing1,ing2){
    console.log(`${this.name} is having a meal with ${ing1} and ${ing2}`)
}

const adam = {name : "Adam"}
cook.call(adam, "rice", "beans", "water")

//apply--->invokes the function immediately, with this set to thisArg, but accepts arguments as an array.

cook.apply(adam, ["rice", "beans", "water"])

//bind--->Returns a new function with this set to thisArg, and any present arguments, but doesn't invoke it immediately.

const cookForAdam = cook.bind(adam, "rice", "beans")
cookForAdam()

//20. What is Event Delegation?
//A technique that allows you to manage events for multiple elements more efectively by using a single event listener on a common parent element rather than on each individual child element.
//we can add eventlistener to childs using parent basically.
//in this way we dont have to make many event listeners for childs.
//it improves performance, clean code, and most importantly handles dynamic elements!!!!!

// let items = document.querySelectorAll("#itemlist li")

// items.forEach(item => {
//     item.addEventListener("click",function(){
//         console.log("clicked", this.textContent)
//     })
// });
// //above is normal way of adding eventlisteners to child, let's use event delegation below : 

let list = document.querySelector("#itemlist")
list.addEventListener("click",(e)=>{
    console.log("clicked", e.target.textContent)
})

//21. Explain the Event loop in JavaScript?
//it's like ke js kisi ka intizar ni kare gi...it'll finish off other tasks during the execution of async js.

console.log("Start");//outputs first

setTimeout(() => {
    console.log("setTimeout Callback");//output forth
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");//output third
});

console.log("End");//outputs second

//22. Diff between Promise and Async/Await?
function fetchData1(){
    return Promise.resolve("bullu fetch data!!!"); // Return a Promise
}
function fetchData2(data){
    return Promise.resolve(data + " gugglu billu!!!"); // Return a Promise
}
// fetchData1()
// .then(result1 => {
//     return fetchData2(result1)
// })
// .then(result2=>{
//     console.log(result2)
// })
// .catch(err=>{
// console.log(err)
// })
//instead of writing above then catch statement we can use this async/await for better clean and good code.
async function  fetchMyData() {
    try{
       const result1 =  await fetchData1()
       const result2 = await fetchData2(result1)
       console.log(result2)
    } catch(err){
        console.log("error hai bhaiya..bullu ne error mar dia!!!")
    }
}

fetchMyData()
//async/await is a cleaner, more readable way to handle Promises.
//promises are the underlying mechanism

//23. Purpose of Reduce method in arrays.
//The reduce() in JS isused to reduce an array to a single value by applying a func on each element in the array.
//we have a current value and accumulator(by default start me 0 hoti hai)

let num = [1,2,3,4,5]

let sum = num.reduce((accu, current)=>{
    return accu+current;
}, 10/*set default value of accumulaor*/)

console.log(sum)

const h = ["js", "html", "css"];
let strLength = h.reduce((accu, str)=>accu + str.length, 0)
console.log(strLength)

//24. Explain the concept of Currying in JS?
//Currying is a concept in Functional Programming in JS where a func that take multiple arguments is transformed into a sequence of functions, each acception a single argument.

// Normal Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 

// Function Currying
function add(a) {
    return function(b) {
        return a + b;
    }
}
const addTwo = add(5); // First function call with 5
console.log(addTwo(4));//and we can keep changing these.
console.log(addTwo(3))//and we can keep changing these.
console.log(addTwo(5))//and we can keep changing these.
console.log(addTwo(8))//and we can keep changing these.
//it makes code more flexible and usable.

//25. What is Generator Function and how it is used ?
//A generator function in JS is a special type of function that can pause the execution and resume it later.

function* inifiniteFunction(){
    let num = 1 ;
    while(true){
        yield num;
        num ++
    }
}