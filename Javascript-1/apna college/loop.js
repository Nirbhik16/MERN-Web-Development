// for(let i=0;i<10;i++)
// {
//     console.log("Namaste World!");
// }

//object
//FOR...In
let animal={
    name: "Zebra",
    leg: 4
}

for(let key in animal){
    console.log(key,animal[key]);
}

//Arrays
let names = ["Rahul","Aman","Neha","Rishabh"];
for(let index in names){
    console.log(index,names[index]);
}

for(let name of names){
    console.log(name);
}