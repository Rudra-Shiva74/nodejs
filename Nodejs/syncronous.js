const fs = require('fs');

//create file
// fs.writeFileSync("tiwari.txt","Hello Word");

//update file
// fs.writeFileSync("tiwari.txt","Hello Tiwari baba");
// fs.appendFileSync("tiwari.txt", " My name is Abhisehk barba");

//read file
// const org = fs.readFileSync("tiwari.txt").toString();
// console.log(org);

//delete file
// const del=fs.unlinkSync("tiwari.txt");


//second challenge
// fs.mkdirSync("Abhishek");
// fs.writeFileSync("Abhishek/bio.txt", "Hello Abhishek Tiwari ji");
// fs.appendFileSync("Abhishek/bio.txt", " hello Tiwari ji");
// console.log(fs.readFileSync("Abhishek/bio.txt").toString());
// fs.renameSync("Abhishek/bio.txt", "Abhishek/Abhi.txt");
// fs.unlinkSync("Abhishek/Abhi.txt");
fs.rmdirSync("Abhishek");
