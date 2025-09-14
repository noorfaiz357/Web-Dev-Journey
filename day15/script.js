/////////////this Keyword///////////

//its special keyword and its nature changes according to where it is uesd.

//global scope
console.log(this); //--->window

// function scope
function abcd() {
  console.log(this); //--->window
}
abcd();

//method me scope
let obj = {
  name: "faiz",
  sayName: function () {
    console.log(this); //-->obj
    console.log(this.name); //-->obj-->name
  }, //aise function(not arrow) jo object ke andar ho usko method kehte hain!!!
};
obj.sayName();

//EVENT HANDLER
//jis per event laga hoga wahi "this" hoga!!!
document.querySelector("h1").addEventListener("click", function () {
  console.log(this); //h1
});
//Arrow Function
let arrowFunc = () => {
  console.log(this); //window
};
arrowFunc();
//method me scope
let obj1 = {
  name: "faiz",
  sayName: () => {
    console.log(this); //-->window
  },
};
obj1.sayName();

let obj2 = {
  name: "faiz",
  sayName: function () {
    console.log(this); //-->object
    function dfd() {
      console.log(this); //-->window
    }
    dfd()
  },
};

obj2.sayName();

let obj3 = {
  name: "faiz",
  sayName: function () {
    console.log(this); //-->object
    let dfd = () => {
      console.log(this); //-->object
    };
    dfd()
  },
};

obj3.sayName();

//arrow functions take their this value as of theie parents this value.

///********Apply, Call, Bind***********////
//we can set this values of function when calling
console.log("call, apply, bind")
//Call--->when calling function, we can set its this value and for this we using Call

let object = {
    name : "billu",
    age : 26,
}

function zxcc(){
    console.log(this)
}
zxcc()//---> will give window object

zxcc.call(object)//--->object
zxcc.call(object.name)//--->billu 

//all three somehow do the same thing so let's differentiate them
//call - we can pass object and parameters too 

function h1(a,b,c){
    console.log(this, a,b,c)
}
h1.call(object,1,2,3)
//apply - it only takes two parameters, one is object what we want to pass and the second can be array of parameters.

function h2(a,b,c){
    console.log(this, a,b,c)
}
h1.apply(object, [1,2,3])
//bind - it like call but instead of running function, it create a new duplicate function wiht this value

function h3(a,b,c){
    console.log(this, a,b,c)
}
h3.bind(object,1,2,3)//as it wont gives a function so we can store in varibale and call that variable bcz wo ab fucntion hai.
let h = h3.bind(object, 1,2,3)
h()