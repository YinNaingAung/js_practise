// take out api using Node

// standard modules => fs, https
const fs = require("fs")
const https = require("https")

https.get("https://covid-api.com/api/docs/api-docs.json",res=>{
 let data = ""

 res.on("data" ,api =>{
    data += api
 })
 res.on("end", ()=>{
    fs.writeFile("file.json", data , ()=> {
        console.log("completed")
    })
 })

})



