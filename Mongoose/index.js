const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/data");

const fruitsSchema = new mongoose.Schema({
    name : String,
    rating : Number
});
const item = mongoose.model("First",fruitsSchema);
const element = new item({
    name:"Apple",
    rating:10
});
element.save();