///**********localStorage, sessionStorage and Cookies in JS*********** */
console.log("localStorage, sessionStorage and Cookies in JavaScript")

//Local Storage

localStorage.setItem("name", "Noor Faiz Muhammad")//create or set values.

let nm = localStorage.getItem("name")//get or access values, jis name se set ki hai value.
// console.log(nm)
console.log(localStorage)//before updating the value

let updatedNm = localStorage.setItem("name","Faiz")//setItem will also update the original value of name key to "Faiz"
console.log(localStorage)//it is updated now.


localStorage.removeItem("name")//value ko remove karne ke liye
console.log(localStorage)//my name is remvoed....!

localStorage.clear()//sari properties clear hojaein gi...
//acha abhi to mene yahan se name aur baki sari properties clear kardi hain...but you're thinking that ke variable bhi to same hi kam karte hain...but remember if i try to declare a varibale from my browser console, it will be temporary but localStorage is like something pemanent kuen ke browser ko bhi close kardein tab bhi meri set ki hoi value stored hi rahe gi, is ko check karne ke liye me console me gaya browser se and maine udher dobara se name wali property/value/key set kardi and then me tab close kardia and then again open kia but still value wahan per get ho rhi thi....jub ke variable ya aur kuch bhi browser me declare karo ya do to wo refresh karne pe hi gayab hojata hai but isme aisa nai howa....!!!! chal agar idher tak aa hi gaya hai to mere sath bolo : Meow Meoww Meowww

//session Storage

sessionStorage.setItem('name',"Pinky")
sessionStorage.getItem("name")

//cookies

 //document.cookie = "username=John Doe" //set cookie
    document.cookie //get cookie
//Note: Cookies are limited to 4KB of data where as localStorage and sessionStorage are much more larger in size.

//local storage

localStorage.setItem("friend",["noor","haseeb","ali","malakkk"])
//local storage string ke ilawa koi bhi tarah ki value store ni karta 
//pr pr pr....
localStorage.clear()
localStorage.setItem("friends", JSON.stringify(["ali","haseeb","noor"]))

