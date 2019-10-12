const express =require('express')
const app = express()

app.use('/',express.static(__dirname+'/public'))

let todos = []
app.get('/todos',(req,res)=>{
    res.send(todos)
})

app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newtodo)
    // res.redirect('/todos') // or res.send('success')
    res.send('success')
})

app.listen(4343,()=>{
    console.log('Server started at http://localhost:4343')
})