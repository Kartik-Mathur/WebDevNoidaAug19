const express = require('express')
const app = express()
const {calculateFare}=require('./fareutils')

app.use('/',express.static(__dirname+'/public'))

app.get('/fare',(req,res)=>{
    let fare = calculateFare(req.query.km,req.query.min)
    res.send({fare})
})

app.listen(4343,()=>{
    console.log('http://localhost:4343')
})