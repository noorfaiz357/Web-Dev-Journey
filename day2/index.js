// //Hi There let's start our JS Revision and a Restart too....

// console.log("Hello World")

// //lets start with strings

// //String Methods

// //trim
// let msg = "    App  ple    "
// let newMsg = msg.trim()
// console.log(newMsg)

// //Upper/Lower Cases

// let student = "Noor Faiz Muhammad";
// console.log(student)
// let upperCaseName = student.toUpperCase();
// let lowerCaseName = student.toLowerCase();
// console.log(upperCaseName);
// console.log(lowerCaseName);

// //Method Chaining

// let msg1 = "     Apple  "
// let methodChaining = msg1.trim().toUpperCase()
// console.log(methodChaining)

// //Slice Method

// //we'll use student variable from above.
// let slicedName = student.slice(5,9)//it'll include start but not end wala index.
// let slicedName1 = student.slice(-8)//ab ye end se shoroo kare ga...! will give muhammad
// console.log(slicedName)
// console.log(slicedName1)

// //Replace Method

// let replacedName = student.replace("hello","Abid")
// console.log(replacedName)

// //Repeat Method 

// let repeatedName = student.repeat(4)
// console.log(repeatedName)

// //String Method with Arguments

// // like in repeat method we gave argument "4"
// // let repeatedName = student.repeat(4)

// //Index OF

// // we know student = "Noor Faiz Muhammad"
// let indexOf = student.indexOf('d')
// let indexOf1 = student.indexOf('t')
// console.log(indexOf)
// console.log(indexOf1)// will give -1 if not found


//******************Arrays***********************/

// Array is a linear collection of things right!!!

let array = ["Noor","Faiz","Ali","Haseeb"]
console.log(array)
console.log(array[2])
console.log(array[5]) //will give undefined
console.log(typeof(array))
console.log(array[2][1])
console.log(array[2].length)

//Arrays are mutable...let's see :

let str = "Faiz"
str[4] = 'h'
console.log(str) // it will be same and it will not change
//let's check it in case of arrays
array[10] = "hasan" //from 4 to 9 will be shown as empty but on 10th there will be hasan.
console.log(array)
console.log(array[5])

//Array Methods

//Push, Unsift, Pop, Shift
let arr = ["hello","Hi","Yo"]
console.log(arr)
arr.push("Oye")
console.log(arr)
arr.unshift("O")
console.log(arr)
let popped = arr.pop()
console.log(arr)
console.log(popped)
let shifted = arr.shift()
console.log(arr)
console.log(shifted)
//IndexOf
console.log(arr.indexOf("Hi")) //---> 1
console.log(arr.indexOf("hi")) //---> -1
//Include Method--->give true or false on basis of existant.
console.log(arr.includes("Yo"))
console.log(arr.includes("yo"))
//Concatenation Method--->creates a new array. doesn't affect original one.
console.log("Concatenation Method")
let concatedArray = array.concat(arr)
console.log(concatedArray)
console.log(array)
console.log(arr)
//Reverse Method
console.log("Reverse Method")

let reversedArr = arr.reverse()//--->affects and changes original array.
console.log(reversedArr)
console.log(arr)
//Slice Method//--->gives a new/copy array and doesn't affect original.
console.log("Slice Method")

let colors = ["red","green","blue","yellow","violet","black"]
let slicedColors = colors.slice()
console.log(slicedColors)
slicedColors = colors.slice(-4)
console.log(slicedColors)
//Splice Method//--->removes, replace, add elements changes the original ones. 
console.log("Splice Method")

colors = ["red","green","blue","yellow","violet","black"]
console.log(colors)
let deletedColors = colors.splice(2)
console.log(deletedColors)
console.log(colors)

colors = ["red","green","blue","yellow","violet","black"]
console.log(colors)
deletedColors = colors.splice(0,3)
console.log(deletedColors)
console.log(colors)

colors = ["red","green","blue","yellow","violet","black"]
console.log(colors)
deletedColors = colors.splice(1,3,"pink","white")//pink and white will be added at the postition from where the others are removed of the array. and yest there is one more thing that it also includes the element at the last index unlikely we see in slice method where last given index is not included in the method's operation.
console.log(deletedColors)
console.log(colors)
//Sort Method--->changes the original one.
console.log("Sort Method")

let sortedColors = colors.sort()
console.log(colors)
console.log(sortedColors)

//Constant Arrays--->can't redeclare array again but can apply methods and operations on the array.

console.log("constant Arrays")
const newColors = ["royalblue","aquamarine","yellowgreen","antiquewhite","blueviolet"]
console.log(newColors)
//// newColors = ["yellow","red"]
//// console.log(newColors)//willl give an error
newColors.push("aliceblue")//--->but this works, methods can be applied. Yippeee!!!
console.log(newColors)
//Nested Arrays.....array of arrays
console.log("Nested Array")
let num = [
    [2,4],
    [6,8],
    [10,12]
]
console.log(num)
console.log(num[0])
console.log(num[0][1])

//Reference in Arrays

console.log("Reference in Arrays")
let arr1 = [1]
let arr2 = [1]
console.log(arr1==arr2) //will give false
console.log(arr1===arr2) //will give false
//but in case of strings
let str1 = 'a'
let str2 = 'a'
console.log(str1==str2)
console.log(str1===str2)//both will be true
//lets see reference--->
let ref1 = [1]
let ref2 = ref1
console.log(ref1==ref2)
console.log(ref1===ref2)//both will be true.
//operation applied on ref1 or ref2 will affect both bcz we've referred ref1 to ref2.
ref2.push(2)
console.log(ref1)
console.log(ref2)

//***********LOOPS************** */
console.log("***********LOOOPS***********")
//Used to repeat a piece of code.
for(let i=5; i>0; i--){
    console.log(i)
}

for(let i = 10; i>0; i = i-3){
    console.log(i)
}

//Nested For Loops
console.log("Nested For Loops")
for(let i =1; i<=3; i++){
    for(let j=1; j<=3;j++){
        console.log(j)
    }
}

//While Loop
console.log("While Loop")

let i = 1
while(i<5){
   if(i==3){
    break;//use to break loops.
   }
   console.log(i)
   i++
}

//Loops with Arrays
console.log("Loops with Arrays")

let fruits = ["mango","banana","apple","orange","watermelon"]

for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i])
}
for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i])
}

//Loops with Nested Arrays
console.log("Loops with Nested Arrays")

let heroes = [["superman", "batman", "flashman"], ["ironman", "spiderman", "thor"]]

for(let i = 0; i<heroes.length; i++){
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j])
    }
}

//For OFF Loops
console.log("For OfF Loops")

for(list of heroes){
    for(hero of list){
        console.log(hero)
    }
    
}

//************OBJECTS*********** */
console.log("************OBJECTS***********")
let student = {
    name : "Noor Faiz Muhammad",
    Ag : "2023-ag-7772",
    CGPA: 3.6,
    Grade : 'A',
    Subjects: ["OOPS","DSA","Networking","DBMS"],
    5 : 6
}
console.log(student)
//here is how  to access values...
console.log(student["name"])
console.log(student["Subjects"])
console.log(student["subjects"])
//another way to access values...
console.log(student.Ag)
console.log(student.Grade)
console.log(typeof(student))
// console.log(student.5) this will give an error and js treat all keys as strings irespective of what they are.
console.log(student["5"])
let obj = {
    1:'a',
    2:'b',
    null:'c',
    undefined:'d',
    true:'e',
    false:'f'
}

console.log(obj[1])
console.log(obj.null)
console.log(obj.undefined)
console.log(obj.true)
console.log(obj[false])

//Add & Update Values in Objects:
console.log("Add and Update Values:")
const std = {
    name: "Haseeb",
    age: 20,
    grade: "A",
    city: "Okara"
}

std.city = "Lahore"
console.log(std.city)
console.log(std.gender)
std.gender = "Male"
console.log(std.gender)
console.log(std)
//delete a key value in object
delete std.age
console.log(std)

//Nested Objects

const classInfo = {
    faiz : {
        grade: "A",
        section: "B"
    },
    noor : {
        grade: "A",
        section: "A"
    },
    ali : {
        grade :"A+",
        section: "C"
    }
}