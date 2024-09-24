const mongoose = require("mongoose");
const connectDb = require("./db");
const express = require("express");
const app = express();
const PORT = 3000;
const abhiShek = new mongoose.Schema({ Name: String, Mobile: Number, Email: String, Address: String, Marks: Number });
const Abhi = new mongoose.model("user", abhiShek);
const createDoc = async () => {
    try {
        const doc = [
            { Name: "Abhishek", Mobile: 7488048437, Emial: "tiwary@gmail.com", Address: "Rampur", Marks: 10 },
            { Name: "Rahul", Mobile: 7488048437, Emial: "Rahul@gmail.com", Address: "Bhagwanpur", Marks: 20 },
            { Name: "Babloo", Mobile: 6203325636, Emial: "babloo@gmail.com", Address: "Rampur", Marks: 30 },
            { Name: "Goly", Mobile: 987654321, Emial: "gogu@gmail.com", Address: "Rampur", Marks: 40 },
            { Name: "Shivansh", Mobile: 6203325636, Emial: "shivansh@gmail.com", Address: "Gaura", Marks: 50 },
        ];
        const res = await Abhi.insertMany(doc);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}
const readDoc = async () => {
    // const res = await Abhi.find({ Address: { $in: ["Rampur","Gaura"] } });
    const res = await Abhi.find({ Marks: { $not: { $gt: 30 } } }).sort({ Name: -1 });
    // const res = await Abhi.find({ $nor: [{ Address: "Rampur" }, { Name: "Shivansh" }] });
    console.log(res);
}
// createDoc();
readDoc();
app.get("/", (req, res) => {
    res.send("Hello Abhishek");
})
connectDb().then(() => {
    app.listen(PORT, () => { console.log(`listening at port ${PORT}`) })
})