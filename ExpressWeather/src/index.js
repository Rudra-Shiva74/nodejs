const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const staticpath = path.join(__dirname, '../public');
app.use(express.static(staticpath))
const views = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname, '../templates/partials');
app.set("view engine", "hbs");
app.set("views", views);
hbs.registerPartials(partialspath);
app.get("/", (req, res) => {
    res.render("index");
})

app.get("*", (req, res) => {
    res.render("404");
})
app.listen(3000, () => {
    console.log(`port number is ${3000}`)
})