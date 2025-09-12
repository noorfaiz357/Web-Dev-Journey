///////////Scopes in JS////////////////////

//scope--->from where we can access our created variables and functions etc.
// three main scopes ===> Funcitonal Scope(can be used only within a functions), Global Scope(can be used in whole code), Block Scope(can be used inside these {} braces)
var a = 12; // global scope
function abc(){
    let c = 1 // function scope
}
{
    let b = 2 // block scope
}
// curly braces in loops and coditionals are block scoped and curly braces in funcs are funcitonal scope

//*******Execution Content********* */

//When JS saw our function then first of all js make execution context, it is a process which run in 2 different phases, memory phase and execution phase.
function abcd(){
    let a =12
    var b =124
}

///******Dynamic Scoping vs Lexical Scoping*********///

//JS me Lexical scoping hoti hai dynamic nahi hoti...but ye 2 exist krti hain
//Lexical Scope ---> it says ke app kaha per physically available ho ye poori tareeke se depend karta hai ke app kya acces kar paoge..!!!

function bcd(){
    let a = 12///can be accessed anywhere in bcd(). so it is lexically scoped.
    function defg(){

    }
}

//Dynamic Scoping ---> kahan se call kar rhe ho us pe depend kare ga ke kia value assign hogi...!!!

let c =12 
function bkl(){
    console.log(c)
}
function lkb(){
    let c = 15;//ab mene c ki value 15 kardi hai...
    bkl()//in dynamically scoping it will call bkl and bkl will console value of c. But you know what will be the value of c? in dynamically scoping it will be 15. but in js lexical it will be 12.
} 

//////////////CLOSURES//////////////////

//closures are when nested function inside a parent function is  returned, and some variable/variables of parent function are used by that returning function.
function closure(){
    let a = 12;
    return function(){
        console.log(a)
    }
}//this is a closure func
//we can private variables, resolve global pollution
//let's see how variables are preserved
let func = closure()
func()// will give 12 obviously but how ?
//bcz we know jub function pura chal jata hai to wo khatam hojata hai and uske variables, each and everything callstack se hat jate hain...so how func is still giving me 12...
//dekho closure koi value return ni kar rha it is returning a function jis me "a" variable use horha hai jo ke closure() me hai but ab wo func me kaise arha hai .... 
//so the answer is ke ye sach hai fnc ke khatam hone pe apka func and uske variables khtm jojaate hain, par jab bhi closure banta hai to apka fnc aur uuske variables ka ek backlink banaya jaata hai aur uska naam hota  hai [[environment]], to "a" variable wahan se access horha hai...!!! 

function countForMe(){
    let c = 0
    return function (){
        c++;
        console.log(c)
    }
}

let fnc = countForMe()//is se funtion chale ga ni balke function return hoga so ab hum ko fnc bhi chalana hoga like this:
fnc()//1
fnc()//2
fnc()//3

let fnc2 = countForMe()
fnc2()//1, not 4 as every fnc creates its own c when function is returned whihc is closure 
fnc2()//2
fnc2()//3
fnc2()//4
fnc2()//5
fnc2()//

/////// ENCAPSULATION/////////

function limitClicks(){
    let click = 0;
    return function(){
       if(click < 5){
         click ++
         console.log(`clicked : ${click} times`)
       }
       else{
        console.error("limit exceeded")
       }
    }
}
let newFnc = limitClicks()
newFnc()//1
newFnc()//2
newFnc()//3
newFnc()//4
newFnc()//5
newFnc()//will give error "limit exceeded"
//but we can't access/perform anything on click variable due to encapsulation of vairable. yani funciton ke bahir ap uska kuch bhi nahi ukhaar skty...!!!

// A closure is a function + its remembered scope.
// Variables are preserved because the function holds a reference to its lexical environment, preventing those variables from being garbage collected.
// Closures let you maintain state across function calls without using global variables.

///////  Toaster Notification/////////////
console.log("TOASTER-NOTIFICATION")

function createToaster(config){
    return function(notification){

        let div = document.createElement("div")
        div.classList.add("toaster-container")
        if(config.positionX == "right"){
            div.style.right = '10px'
            
        }
        else{
            div.style.left = '10px'
            div.style.right  = ""
        }
        if(config.positionY == "top"){
            div.style.top = '10px'
        }
        else{
            div.style.bottom = '10px'
            div.style.top = ""
        }

        let p = document.createElement("p")
        p.textContent = notification
        div.append(p)
        document.body.appendChild(div)

        setTimeout(()=>{
            document.body.removeChild(div)
        },config.duration*1000)

    }
}

let toaster =  createToaster(
    {
        positionX: "right",
        positionY: "bottm",
        theme: "dark",
        duration : 100,
    }
)
toaster("this is a dummy notification")