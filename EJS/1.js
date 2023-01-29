const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set("view engine","ejs");
var daytext = "";
app.get("/",function(req,res){
    var d = new Date();
    var day = d.getDay();
    if(day==6 || day==0){
        daytext="weekend";
    }
    else{
        daytext="weekday";
    }
    res.render("list",{dayej: daytext});
});
app.post("/",function(req,res){
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    var result=n1+n2;
    console.log(result);
});
app.listen(4000,function(){
    console.log("server started");
})