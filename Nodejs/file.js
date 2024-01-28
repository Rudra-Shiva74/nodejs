const fs = require('fs');
// create the new file 
// fs.writeFileSync("read.txt", "Welcome to Abhishek TIwari vs code");
// fs.writeFileSync("read.txt", "Welcome to Abhishek TIwari vs code");

//append data in file
// fs.appendFileSync("read.txt", "Abhishek Raja"); 

//read data from file
// const buf_data = fs.readFileSync("read.txt")
// console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);

//rename the file
fs.renameSync("read.txt", "Abhi.txt");
