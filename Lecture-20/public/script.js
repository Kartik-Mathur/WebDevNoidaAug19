const socket = io()

setTimeout(()=>{
    console.log('Connected '+socket.id)
},1000) 

socket.on('chat_recieved',()=>{
    console.log('Chat successfully received by server')
})

$(()=>{
    $('#send').click(()=>{
        console.log('Sending chat') 
        socket.emit('chat',{
            msg:$('#msg').val() 
        })
    })
})