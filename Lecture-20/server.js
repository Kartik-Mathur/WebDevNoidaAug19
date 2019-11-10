const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app) 
const io = socketio(server)

app.use('/',express.static(__dirname+'/public')) 

let idUserMap = {}

io.on('connection',(socket)=>{
    console.log('Connected '+socket.id) 
    socket.on('chat',(data)=>{
        console.log(socket.id+' says '+data.msg) 
        io.emit('chat_recieved',{
            username:idUserMap[socket.id],
            msg:data.msg 
        }) 
    })

    socket.on('login',(data)=>{
        idUserMap[socket.id] = data.username
        socket.emit('loggedin') 
    })
})

server.listen(4321,()=>{
    console.log('http://localhost:4321') 
}) 