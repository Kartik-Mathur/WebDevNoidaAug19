const express = require('express')
const {db,Tasks} = require('./db.js') 
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/todos',async (req,res)=>{
    let whereObj = {} 

    if(req.query.done){
        whereObj.done = req.query.done === 'true' 
    }

    let data = await Tasks.findAll({
        where: whereObj
    })
    res.send(data) 
})  

app.post('/todos',async (req,res)=>{
    let newItem = await Tasks.create({
        name:req.body.name,
        description:req.body.description,        
        done:req.body.done
    })
    res.send(newItem) 
})

db.sync().then(()=>{
    app.listen(4321,()=>{
        console.log('Server started') 
    })
})

