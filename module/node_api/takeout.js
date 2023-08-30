const fs = require("fs")
const { json } = require("stream/consumers")

fs.readFile("file.json",(err,data)=>{

    // if(err){
    //     console.log(err)
    // }else{
    //     const result = JSON.parse(data)
    //     const global = result.Global
    //     const AllCountries  = result.countries
    //     const Myanmar = AllCountries.find(c=>c.country === "Myanmar")

    //     console.log("Global :", global, "Country :", Myanmar)
    // }

// 
    if(err){
        console.log(err)
    }else{
        const result = JSON.parse(data)
        const Components = result.components
        const Responses = Components.responses
        const num_422 = Responses[422]
        const Description = num_422.find(des => des.description === "HTTP 422 Unprocessable Entity")
        console.log(Description)









        
    }


})