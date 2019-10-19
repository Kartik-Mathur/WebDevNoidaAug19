const express = require('express')
const app = express()

const routes={
    teachers:require('./routes/teachers'),
    courses:require('./routes/courses')
}

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.use('/mentors',routes.teachers)
app.use('/courses',routes.courses)


app.listen(4321,()=>{
    console.log('Starting server at http://localhost:4321')
})