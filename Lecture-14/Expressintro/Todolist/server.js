const express =require('express')
const app = express()

let todos = []
app.get('/todos',(req,res)=>{
    res.send(todos)
})

app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo)
    res.redirect('/todos') // or res.send('success')
})


app.listen(4343,()=>{
    console.log('Server started at http://localhost:4343')
})