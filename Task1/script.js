'use strict';

////----Task1----
const btnClick =document.getElementById("btn");
const user = {
    name:"John",
    age:30,
    SayMyName(){
        alert("Hello dear :"+ this.name);
        //console.log(this)
    }
};

btnClick.addEventListener("click",()=>{user.SayMyName.call(user);
console.log("btn clicked")});
//user.SayMyName.call(user.name)

