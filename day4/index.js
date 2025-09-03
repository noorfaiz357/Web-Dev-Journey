//**********ARRAY METHODS*********** */

console.log("ARRAY METHODS")
//--->They are higher order functions which uses callback functions.

//forEach--->it's like for of loop.

console.log("FOR EACH LOOP")
let arr = [1,2,3,4,5]
arr.forEach((each)=>{
    console.log("I am "+ each)
})
arr.forEach(function(item){
    console.log(`I'm ${item}`)
})
//To access each value we have to give an argument as forEach passes each element in form of parameters.
//that's why in func's argument we pass each and item to access value.
//we can access multiple objects in arrays and their values too.
let array = [
    "Okara",
    "Jaboka",
    {
        name: "Noor Faiz Muhammad",
        age : 19,
        student : true,
    }

]
array.forEach((property)=>{
    console.log(property)
    if(typeof(property) == 'object'){
        console.log(property.name)
    }
})

//MAP--->It will create an array and we can store returned value in array in a varialbe.

console.log("MAP")
let n = [2,4,6,8,9]

let square = n.map((num)=>{
    return num*num
})
console.log(square)//--->[4,16,36,64]
console.log(n)

//FILTER--->only return true values in array...

console.log("FILTER")
let small = n.filter((num)=>{
    return num<5
})
console.log(small)//--->[2,4]
console.log(n)

//Every--->returns true only if all values are true. Else return false.

console.log("Every")
let every = n.every(num=>num>1)
console.log(every)//--->will give true.
console.log(n)
//e.g:
let even = n.every((num)=>{
    return num%2==0
})
console.log(even)//--->will give false as 9 is not divisible by 2.

//Some--->returns true if any value is true, return false if all are false. it's like OR operator.

console.log("Some")
let some = n.some((num)=>{
    return num%2==0
})
console.log(some)//true as except 9 all values are divisible by 2.
let someFalse = n.some((num)=>{
    return num>10
})
console.log(someFalse)//--->false as 9 hi highest.

//Reduce---> reduce the array to a single value.

console.log("Reduce Method")
let reducedArray = n.reduce((result, element)=>{
    return result + element
})
console.log(reducedArray)//will give 29 as it adds up all num in n array and give a sinlge value which is 29.
//first the value of result is by default 0 and 2 will be passed as element and after summation the result will be in result and 4 will be passed as element and so on...!
let list = [2,3,5,"Noor","Faiz",true, null," hello"]
let reducedList = list.reduce((result, elem)=>{
        return result + elem
})
console.log(reducedList)//--->will give 10NoorFaiztruenull hello

//-------Default Parameters----------//

console.log("Default Parameters")
let numArray = [1,2,3,4,5,6]

//Spread Operator(...array)--->expands an iterable into multiple values.

console.log("Spread Operator")
console.log(Math.max(1,2,3,4,5,6))//--->will give 7
console.log(Math.max(numArray))//--->will give NaN
//to apply such things we use spread operator
console.log(Math.min(...numArray))
console.log(Math.max(...numArray))
let oddNum = [1,3,5,7,9]
let evenNum = [2,4,6,8,10]
let nums = [...oddNum,...evenNum]
console.log(nums)
console.log(..."hello")//=--> h e l l o
let chars = [..."Noor"]
console.log(chars)//--->['N','o','o','r']
//Spread with Object Literals:
const data = {
    email: "meowbilli@gmail.com",
    pass : "meow@12345"
}
let updatedData = {
    ...data,
    id : "meowbilli357"
}
console.log(data)
console.log(updatedData)
//we can spread an array within an object too:
let spreadedArrayInObject = {
    ...oddNum
}
console.log(spreadedArrayInObject)//--->{0: 1, 1: 3, 2: 5, 3: 7, 4: 9}
//with objects:
let newStdt ={
    name : "faiz",
    age : 18,
    course : "BSCS"
}
let updatedStdt ={
    ...newStdt,
    age : 19,
}
console.log(newStdt)
console.log(updatedStdt)

//Rest--->Allows a function to take indefinite number of arguments and bundle them in an array.

//it comes in ES6 else there was arguments. ja ke net pe search mar aur pata karle.
console.log("Rest")
function sum(...arg){//this is rest operator...
    console.log(arg)
    return arg.reduce((res,elem)=>{
        return res+elem;
    })
}
console.log(sum(...evenNum))//this is spread operator
console.log("Rest")
function add(...arg){
  return arg.reduce((res,elem)=>{
      return res+elem;
  })
}
console.log(add(1,2,3,4,5,6,7))
//with objects:
let stdt = {
    name : "faiz",
    age : 19,
    course : "BSCS"
}
let stdtName = stdt.name
let {name,...rest} = stdt//using rest
console.log(stdtName)
console.log(name)

//Destructuring in JS--->Store values in variables from objects or arrays.

console.log("Destructuring")
//Array Destructuring
let players = ["noor", "faiz", "ali","hasan","hussain"]
let [winner, runnerUp, ...restPlayers] = players
console.log(winner)
console.log(runnerUp)
console.log(restPlayers)
//Object Destructuring
let info = {
    name : "faiz",
    age : 19,
    course : "BSCS"
}
console.log(info)
let {name : nam,city:place="okara", ...others} = info//we can change variable names like this.
console.log(nam)
console.log(place)
console.log(others)
console.log(info)

