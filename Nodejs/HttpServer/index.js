const http = require("http");
const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/userApi/data.json`, "utf-8",);
const server = http.createServer((req, resp) => {
    console.log(req.url);
    if (req.url == '/')
        resp.end("This is home page");
    else if (req.url == "/userapi") {
        resp.writeHead(200, { "content-type": "application/json" });
        resp.end(data);
    }
    else if (req.url == "/about") {
        resp.write("Hello this is about page");
        resp.end();
    }
    else {
        resp.writeHead(404, { "Content-type": "text/html" });
        resp.end("404");
    }
});
server.listen(8080, "127.0.0.1", () => {
    console.log("Listning 8080 port");
})