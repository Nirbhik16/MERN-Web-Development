const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
    var d = new Date();
    var day = d.getDay();
    if(day == 0)
        res.send("Day is Sunday");
    else if(day == 1)
        res.send("Day is Monday");
    else if(day == 2)
        res.send("Day is Tuesday");
    else if(day == 3)
        res.send("Day is Wednesday");
    else if(day == 4)
        res.send("Day is Thursday");
    else if(day == 5)
        res.send("Day is Friday");
    else
        res.send("Day is Saturday");
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