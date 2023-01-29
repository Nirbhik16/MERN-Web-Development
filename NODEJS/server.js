const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/",function(req,res){
    res.send("Hi welcome to my webpage!");
});
app.get("/about",function(req,res){
    res.send("Hi My name is Rahul Jain and I love to code.");
});
app.get("/service",function(req,res){
    res.send("Web development, UI Design and App development");
});
app.listen(3000,function(){
    console.log("Server started");
});