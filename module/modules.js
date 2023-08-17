// Node => to know whether node has installed or not .Node
// Modules
// run js code using node instead of browser

// browser: Document Object Model (DOM)
// node: module and package management system

// about browser the import is Document Object Model is more exceptional than simple browser.
//about node the import is Module & node package managment system is more exceptional than simple node

// Node module was developed before js module.
// Since node was developed, node has already module but js isn't the same in js, module wasn't developed togeher with js.
// Node module was developed before js module

// Called module to call js code file from another code file

let fruits = ["Guava", "Papaya", "Dragon Fruit", "Strawberry"]
for(x = 0; x < fruits.length; x ++ ) {
    console.log(fruits[x])
}   

module.exports = fruits[x]

let info = [
    {
        name :"yinnaingaung",
        age  : 21,
        Job : "Full Stack developer",
        Address: "Hopin",
        Gender: "M",
        ticket: null
    },
    {
        name : "yinaung",
        age:25,
        Job: "frontend dev",
        Address: "Yangon",
        Gender : "m",
        ticket : null
    },
    {
        name : "Ma zin",
        age:27,
        Job: "Teacher",
        Address: "Yangon",
        Gender : "F",
        ticket : null
    },
    {
        name : "Ma Htwe",
        age: 18,
        Job: "student",
        Address: "Hopin",
        Gender : null,
        ticket : null
    }

]

function detail(){
    let len =  info.length;
    let x = 0 ;
   while(x < len){
    let choose = info.filter(f=> f.age < 25);
    console.log(choose)
    x++
   }
   return x
}
detail()

function detail1(){
    let len =  info.length;
    let x = 2 ;
   while(x < len){
    let choose1 = info.map(f => {
        if(f.Gender === "M" || f.Gender === "m"){
            f.Gender = "Male"
        }else if (f.Gender === "F" || f.Gender === "f"){
            f.Gender = "Female"
        }
        else if(f.Gender === null) {
            f.Gender = "unknown"
        };
       
          return f
    });
    x++
    console.log(choose1)

   }
   return x
}
detail1()

function detail2(){
    let len =  info.length;
    let x = 2 ;
   while(x < len){
    let choose2 =info.filter(f => f.age>25). map(f => {
        if(f.Gender === "M" || f.Gender === "m"){
            f.Gender = "Male"
        }else if (f.Gender === "F" || f.Gender === "f"){
            f.Gender = "Female"
        }
        else if(f.Gender === null) {
            f.Gender = "unknown"
        };
        switch(f.ticket){
            default:
                f.ticket = true
        }
       
        return f
    });
    x++
    console.log(choose2)

   }
   return x
}
detail2()

module.export = {detail1,detail2} 
