// ///Synchronous and Asynchronous JS

// //js runs code line by line but in some cases some particular code waits for execution but the other code runs.

// console.log("hey1");
// console.log("hey2");
// setTimeout(() => {
//   console.log("hey3");//will run at last
// }, 2000);
// setTimeout(()=>{
//     console.log("hey4")//will run before hey3 but after hey5 even though it has 0ms delay.
// },0)
// console.log("hey5");

// //****CALLBACKS*******/

// //if we pass a function as parameter in other function, then the function sent as parameter is called callback funciton.
// function func(fun){//fun function is callback function.
//     setTimeout(fun,Math.floor(Math.random()*10)*1000)
// }

// func(function(){
//     console.log("I'm random timeout callback functions")
// })
//i commited above code to check if below code is working great or not....you can just uncommit the whole code by selecting all the code above and hitt ctrl + /

/////Callback Hell//////
//it's an old way before async await....!!!

function getProfile(username, cb) {
  console.log("fetching profile data");
  setTimeout(() => {
    // console.log(`profile fetched of ${username}`)
    //cb({username})//--->{username: 'faiz'}
    // cb(username)//--->faiz
    cb({ username, _id: 111222, age: 19, email: "faizn1423@gmail.com" }); //--->{username: 'faiz', age: 19, email: 'faizn1423@gmail.com'}
  }, 3000);
}

function getPosts(id, cb) {
  console.log("fetching all posts");
  setTimeout(() => {
    cb({ _id: id, posts: ["hello", "hi", "kaise", "ho"] });
  }, 2000);
}

function getSavedPost(id, cb){
    console.log("fetching saved posts")
  setTimeout(()=>{
      cb({
        // _id : id,
        _id : 783763,
        saved : [1,2,4,5,6,7,8]
    })
  },4000)
}
//calling the function with call backs
getProfile("faiz", function (profileData) {
    console.log(profileData);
    getPosts(profileData._id, function (posts) {
        console.log(posts);
        getSavedPost(posts._id, function(savedPost){
            console.log(savedPost)
        })
    });
});//this is what callback hell actually looks like !!!