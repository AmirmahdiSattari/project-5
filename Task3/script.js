'use strict';
let userInput = prompt("how many user do you want to add?",2);
let Data = [];
for (let i = 0; i < userInput; i++) {
    let newData = { name: prompt("name"), age: Number(prompt("age")) };

    //push new data to Data
    Data.push(newData);
}

//sorting the values
Data = Data.sort((a, b) => {
    if (a.age < b.age) {
        return-1;
    }
})
console.log(Data);
