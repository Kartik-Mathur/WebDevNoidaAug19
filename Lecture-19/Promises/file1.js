const fs = require('fs')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

function read(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) return reject(err)
            resolve(data)  
        })
    })
}

function write(filename,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,data,(err)=>{
            if(err) return reject(err) 
            console.log('Done') 
        })
    })
}
let nums = [] 
read(F1)
    .then((data)=>{
        nums = nums.concat(data.toString().split('\n'))
        return read(F2)
    })
    .then((data)=>{
        nums = nums.concat(data.toString().split('\n')) 
        nums.sort((a,b)=>(a-b)) 
        return write(F3,nums.join('\n'))        
    })
    .then(()=>{
        console.log('Done') 
    })
    .catch((err)=>{
        if(err) console.error(err) 
    })