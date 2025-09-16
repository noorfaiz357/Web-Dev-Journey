///Synchronous and Asynchronous JS

//js runs code line by line but in some cases some particular code waits for execution but the other code runs.

console.log("hey1");
console.log("hey2");
setTimeout(() => {
  console.log("hey3");//will run at last
}, 2000);
setTimeout(()=>{
    console.log("hey4")//will run before hey3 but after hey5 even though it has 0ms delay.
},0)
console.log("hey5");

