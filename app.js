const express = require("express")

const app = express()

app.get("/get",(req,res)=>{
    res.send("jdbkjsb")
})

app.listen(3000,()=>{
    console.log("30000")
})