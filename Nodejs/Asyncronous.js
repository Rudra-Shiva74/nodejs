const fs = require("fs");
fs.writeFileSync("Abhi.txt", "Hello My name is Abhishek Tiwari");
// fs.appendFileSync("Abhi.txt", "Hii");
// fs.unlinkSync("Abhi.txt");
// console.log(fs.readFileSync("Abhi.txt", "utf-8"));
console.log(fs.readFile("Abhi.txt", "utf-8", (err, data) => {
    console.log(data);
}));
console.log("After the data");
