const express = require("express")
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended:true})) 

function m1(req, res,next) {
    console.log("Running m1")
    if(req.query.m == 1){
        return res.send('Welcome here!!')
    }
    next()
}

function m2(req, res,next) {
    console.log("Running m2")
    next()
}

function m3(req, res,next) {
    console.log("Running m3")
    next()
}

app.use(m1)
app.use(m2) 
app.use('/bye',m3)  // /bye or /bye/... ,,, /byexyz -X

app.get('/',(req,res)=>{
    res.send('Hello')
}) 

app.get('/bye',(req,res)=>{
    res.send('Good Bye!')
}) 

app.post('/bye',(req,res)=>{
    console.log(req.body) 
    res.send('We will meet again!') 
})

app.listen(4444, () => {
	console.log("Server started at http://localhost:4444")
})
