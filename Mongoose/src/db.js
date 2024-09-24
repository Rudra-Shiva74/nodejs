const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/abhishek";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDb;