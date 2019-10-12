const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('Hello World!')
})

server.get('/greet',(req,res)=>{
    res.send('How are you?')
})

server.get('/greet/:name',(req,res)=>{
    res.send('How are you? '+ req.params.name)
})

server.get('/greet/:name/night',(req,res)=>{
    res.send('Good Night '+ req.params.name)
})

server.get('/greet/:name/:day',(req,res)=>{
    res.send('Good Night '+ req.params.name)
})

server.listen(4444) 