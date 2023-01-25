'use strict';
////---------Task2
const increaseBtn = document.getElementById("IncreaseBtn");
const decreaseBtn = document.getElementById("DecreaseBtn");
const resetBtn = document.getElementById("ResetBtn");
const readBtn = document.getElementById("ReadBtn");
const allConfigsBtn =document.getElementById("AllConfigs");
let defaultValue=0;
const walk={

    //default value 
    step: defaultValue,
    increase(){
        this.step+=1
        console.log(`increased By 1 the step value is : ${this.step}`)
    },
    decrease(){

        this.step > 0 ? this.step-=1 : console.log("Cant do that");
        console.log(`decreased By 1 the step value is : ${this.step}`)
    },
    reset(){
        this.step=defaultValue;
        console.log(`Step rested by the default value : ${this.step}`)
    },
    read(){
        console.log(`Step value is: ${this.step}`)
    }
}

increaseBtn.addEventListener("click",()=>{
    walk.increase.call(walk);
});
decreaseBtn.addEventListener("click",()=>{
    walk.decrease.call(walk);
});
resetBtn.addEventListener("click",()=>{
    walk.reset.call(walk);
});
readBtn.addEventListener("click",()=>{
    walk.read.call(walk);
});
allConfigsBtn.addEventListener("click",()=>{
    walk.increase.call(walk);
    walk.decrease.call(walk);
    walk.reset.call(walk);
    walk.read.call(walk);
});
