const fs = require("fs");




//make Folder
// fs.mkdir("Abhishek", (err) => {
//     console.log(err);
// })

//Make and write file
// fs.writeFile("Abhi.txt", "Abhishek is good Boy", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// })

//read data
// fs.readFile("Rudra.txt", "Abhishek Is Good boy", (err, data) => {
//     console.log(data);

//append data
// fs.appendFile("Abhi.txt", "Abhishek Tiwari", (err,data) => {
//     console.log(err);
//     console.log(data);
// })

//delete data
// fs.unlink("Abhi.txt", (err, data) => {
//     console.log(err);
//     console.log(data);
// })


// Challenge make folder and write file Asyncrnous
//write in file
// fs.writeFile("Abhishek/Abhi.txt", "Abhishek is Good Boy", (err, data) => {
//     if (err) console.log(err);
// })

//append in file
// fs.appendFile("Abhishek/Abhi.txt", " Shivam is bad boy", (err, data) => {
//     if (err) console.log(err);
// })

//read the file
// fs.readFile("Abhishek/ABhi.txt", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data.toString());
// })

//delete file
// fs.unlink("Abhishek/Abhi.txt", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// })

//delete directory
// fs.rmdir("Abhishek", (err, data) => {
//     if (err) console.log(err); else console.log(data);
// })


//rename file
// fs.rename("Abhi.txt", "Abhishek.txt", (err, data) => {
//     console.log(data);
//     console.log(err);
// })