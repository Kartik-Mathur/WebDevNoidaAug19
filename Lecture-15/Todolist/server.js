const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))

let todolist = [] // {name:abcd,priority:3}

app.get('/todos',(req,res)=>{
    res.send(todolist)
})

app.post('/todos',(req,res)=>{
    todolist.push({
        name: req.body.name, 
        priority: +(req.body.priority||1) 
    })
    res.send({
        todoId:todolist.length,
        success:"true"
    })
})

app.listen(4343,()=>{
    console.log('Server started at http://localhost:4343')
})