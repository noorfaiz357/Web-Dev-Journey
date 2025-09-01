//*************Functions******************* *

function Hello(){
    console.log("Fucntions in JavaScript")
}

Hello()

function loop(){
    for(let i = 1; i<=10 ; i+=2){
        console.log(i + " billu")
    }
}
loop()

//Arguments
console.log("Arguments in JavaScript")

function Info(name, age){
    console.log(`my name is ${name} and my age is ${age}`)
}

Info("Noor Faiz Muhammad",19)


//Return in Function--->any code written after return in not executable or readable.

function sum(a,b){
    return a + b //return only return a single value, to return more value we can store the values first in an array or an object and then we can return that. Yippee!!!
}

console.log(sum(3,8))
console.log(sum(sum(3,5),9))

//-------Scopes in JS----------//
console.log("Scopes in JS")

//function scope--->only accessible in a function

let a = 72; //--->global function
function sum(a,b){
    let s = a+b
    console.log(s)//--->function scope
}
//console.log(s)//--->will give error.

//Block Scope--->variables declared inside {} cannot be accessed outside the block.

for(let i = 1; i<5; i++){
    console.log(i)
    //only appilicable to variables declared by let,const. not var.
}
//console.log(i) //--->will give error.

//Lexical Scope//--->it is for nested functions.

function outer(){
    let x =14
    let y =26
    function inner(){
        console.log(y)//--->accessible in inner
        let b = 10;
    }
    inner()
    //console.log(b)//--->not accessible, give error.
}
outer()

//Function Expression--->Defining a function in variable.
console.log("Function Expression in JS")
let multiply = function multi(a,b){
    return a*b
}
console.log(multiply(12,35))

//High Order Fucntions 
//---> Returns a function or takes one or more function as arguments.

//Methods--->Methods are actions that can be performed on an object.
console.log("Methods")
const calculator = {
    add : function(a,b){
        return a + b
    },
    sub(a,b){
        return a-b
    }
}
console.log(calculator.add(9,2))
console.log(calculator.sub(9,2)) 

//"this" KEYWORD--->Refers to object that is executing current piece of code.

console.log("this KEYWORD")
//e.g:
let std = {
    name : "Noor Faiz Muhammad",
    age: 17,
    eng:72,
    urdu: 58,
    math : 74,
    getAvg(){
        //let avg = (eng+urdu+math)/3
        //console.log(avg)//--->but it will give error bcz we are giving those values eng,urdu, math there...so 
        let avg = (this.eng+this.urdu+this.math)/3
        console.log(avg)
    }
}
std.getAvg()
//so 'this' is used to access key value pair within a function n a object.
//what if i try to print this...not in a object but in a simple fucntion
console.log(this)//--->will give "window" object
function hello(){
    console.log(this)
}
hello()//--->will give "window" object too.
//yani ke sirf ksi particular object ke ander hi this ka matlab wo object hoga otherwise normal function me this ka matlab window object hi hoga.

//----ERROR HANDLING----//

console.log("Error Handling in JS")
//'try' statement test block of codes for errors.
//'catch' statements allow to execute block of code if got error.
//e.g:

    try{
        console.log(billu)
    } catch{
        console.log("billue tune bataya nai billu...!")
    }
//we can get the actual error too like this:
    try{
        console.log(billu)
    } catch(error){
        console.log(error)//will print the actual error.
    }

////---------------"ARROW FUNCTIONS"----------------//

console.log("Arrow Functions")//my fvrt funcs in js.
//have a short way to declare a function in js.
//e.g:
const func = (arg1,arg2)=>{
    return arg1+arg2
}
//can be used as callback functions in Higher Order Functions
//Nameless Functions
 let cube = n=>{//we can remove paranthesis if ther is one argument and compulsory to write when there is more or no argument.
    console.log(n**3)
 }
cube(3)

//Implicit Return in Arrow Functions

console.log("Implicit Return in JS")
//if it return a single value then we don't have to write return keyword, it will implicitly return.
//but have to write () instead of {}.
const mul = (a,b)=>(
    a*b
)
console.log(mul(5,7))
//as it is returning a single value so we can write it like this too:
const square = n=> n*2 //just this...Damnnn!!! Majjaydar!!!

//SET TIMEOUT--->runs code for a single time after given time.

console.log("Set Timeout")
setTimeout(()=>{
    console.log("Hi There, How is it going inside Timeout?")
},1000)
console.log("after timeout function but i think it will be executed before that...")

//SET INTERVAL--->runs code repeatedly after given interval.

let id1 = setInterval(()=>{
    console.log("Hi there from Interval")
},3000)//ye bhi set timeout se pehle execute hoga kuen ke maine idher 3s ka time diya hai aur udher 4s ka
//lets see how we can control or stop interval.
clearInterval(id1)
//i.e:
let times = 0
let counts = setInterval(()=>{
    console.log("Assalam-o-Alaikum!!!")
    times+=1  
    if(times==5){
    clearInterval(counts)
}
},2000)

//'this' with Arrow Functions

//so ab ye majjaydar sa behave karay ga...

const myInfo = {
    name: "Faiz",
    age : 19,
    marks : 97,
    property : this,
    getName : function(){
        console.log(this)//will give myInfo obj.
        console.log(this.name)//will give 97.
    },
    getMarks : ()=>{
        console.log(this)//will give windows object
        console.log(this.marks)//will give undefined
    }
}

myInfo.getName()