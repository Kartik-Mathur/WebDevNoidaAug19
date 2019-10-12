const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send('Hello World!')
})

server.get('/greet',(req,res)=>{
    res.send(`Good-${req.query.day}! ${req.query.name}`)
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
server.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
server.get('/server.js',(req,res)=>{
    res.send(`console.log('Hello World!')`)
})
server.use('/staticfile',express.static(__dirname+'/static'))
server.listen(4444) 