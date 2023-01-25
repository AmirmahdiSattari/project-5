'use strict';

const body = document.querySelector("body");

const ShowData=(topInput, rightInput, textInput, classInput) =>{
    const DataValue = document.createElement(`div`);
    DataValue.innerHTML = textInput;
    DataValue.style.marginTop = topInput + "rem";
    DataValue.style.marginRight = rightInput + "rem";
    if (classInput) {
        DataValue.classList.add(classInput);
    }
    body.append(DataValue);
}

const topInput = prompt("Enter the top value as rem");
const rightInput = prompt("Enter the right value as rem");
const textInput = prompt("Enter the text value as rem");
const classInput = prompt("enter the optinal class as rem");

//call the showData function
ShowData(topInput, rightInput, textInput, classInput);
console.log(body)