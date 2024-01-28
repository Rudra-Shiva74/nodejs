// Read file on server 
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, resp) => {

    // 1st way 
    // fs.readFile('index.txt', (err, data) => {
    //     if (err) return console.log(err);
    //     resp.end(data.toString());
    // });

    // 2nd way 
    // const rstream = fs.createReadStream("index.txt");
    // rstream.on("data", (data) => {
    //     resp.write(data);
    // });
    // rstream.on('end',()=>{
    //     resp.end();
    // });
    // rstream.on("error",(err)=>{
    //     resp.end("File not Found");
    //     console.log(err);
    // })

    // 3rd way 

    const rstream = fs.createReadStream("index.txt");
    rstream.pipe(resp, () => {
        console.log("object");
    });


});
server.listen(8080, "127.0.0.1", () => {
    console.log("Server Started");
});