const express = require('express')
const app = express()
const {calculateFare}=require('./fareutils')

app.use('/',express.static(__dirname+'/public'))
app.get('/hi',(req,res)=>{
    res.send('Hello')
})
app.get('/fare',(req,res)=>{
    let fare = calculateFare(req.query.km,req.query.min)
    res.send({fare})
})

module.exports = {
    app
}