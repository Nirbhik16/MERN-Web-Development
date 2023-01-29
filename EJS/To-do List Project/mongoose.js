const express=require("express");
const bodyParser = require('body-parser');
var app= express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

const mongoose =  require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");
const trySchema = new mongoose.Schema({
    name:String
});
const item =  mongoose.model("task",trySchema);
const todo = new item({
    name:"Create some videos"
});

const todo2 = new item({
    name:"Learn DS"
});

const todo3 = new item({
    name:"Learn REACT"
});

const todo4 = new item({
    name:"Take some rest"
});
// todo2.save();
// todo3.save();
// todo4.save();
app.get("/",function(req,res){
    item.find({},function(err,foundItems){
        if(err){
            console.log(err);
        }
        else{
            res.render("list",{ejes:foundItems});
        }
    });
});
app.listen("3000",function(){
    console.log("Server is running!");
});
