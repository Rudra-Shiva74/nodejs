const fs = require('fs');
const biodata = {
    name: "Abhishek",
    age: 23,
    vill: "Rampur"
}
console.log(biodata)
//object to json data
// const jsondata = JSON.stringify(biodata);
// console.log(jsondata);

//json to object
// const objdata=JSON.parse(jsondata);
// console.log(objdata);


// 1. convert object to JSON
// 2. send to another File
// 3. read File
// 4. agian convert to back to js obj

const json = JSON.stringify(biodata);
//make a file
// fs.writeFile("data.json", json, (err, data) => {
//     if (err)
//         console.log(err);
//     else console.log(data);
// })

//read json file
fs.readFile("data.json", (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
    const objdata = JSON.parse(data.toString());
    // const objdata1 = JSON.stringify(data.toString());
    console.log(objdata);
    // console.log(objdata1);
})