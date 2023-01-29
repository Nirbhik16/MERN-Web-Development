const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/data");

const fruitsSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true,'Enter name of fruit']
    },
    rating : {
        type:Number,
        min:1,
        max:10
    }
});

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    fav : fruitsSchema
});
const item = mongoose.model("First",fruitsSchema);
const per = mongoose.model("favperson",personSchema);

const grapes = new item({
    name:"Cherry",
    rating:9
});
grapes.save();
const person1 = new per({
    name:"amy",
    age:21,
    fav:grapes
});
person1.save();
// const element1 = new item({
//     name:"Apple",
//     rating:10
// });

// const element2 = new item({
//     name:"Mango",
//     rating:10
// });

// const element3 = new item({
//     name:"Banana",
//     rating:9
// });
// item.insertMany([element2,element3],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Inserted!");
//     }
// });
// item.find(function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         data.forEach(function(data){
//             console.log(data.name);
//         })
//     }
// })
