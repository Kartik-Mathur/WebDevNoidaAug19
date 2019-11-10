const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app) 
const io = socketio(server)

app.use('/',express.static(__dirname+'/public')) 

io.on('connection',(socket)=>{
    console.log('Connected '+socket.id) 
    socket.on('chat',(data)=>{
        console.log(socket.id+' says '+data.msg) 
        socket.emit('chat_recieved') 
    })
})

server.listen(4321,()=>{
    console.log('http://localhost:4321') 
}) 