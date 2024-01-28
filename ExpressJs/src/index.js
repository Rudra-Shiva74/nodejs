const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
// console.log(path.join(__dirname, '../public'));
const staticpath = path.join(__dirname, '../public');
app.use(express.static(staticpath))
// app.get("/", (req, resp) => {
//     // resp.write("data");
//     // resp.json("data");
// })
// app.get("/about", (Req, resp) => {
//     resp.send({
//         id: "1",
//         name: "Abhishek Tiwari"
//     })
// })

const partials = path.join(__dirname, '../templates/partials');
const views = path.join(__dirname, '../templates/views');
app.set("view engine", "hbs");
app.set("views", views);
hbs.registerPartials(partials);
app.get("/", (req, res) => {
    res.render("index", {
        name: "Abhishek"
    });
})
app.get("/about", (req, resp) => {
    resp.render("about");
    console.log(req.query.name);
})

app.get("*", (req, res) => {
    res.render("error");
})

app.listen(3000, () => {
    console.log(`listing at port number : ${3000}`);
})