const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

let read = util.promisify(fs.readFile) 
let write = util.promisify(fs.writeFile)  

async function sort(){
    let data1 = await read(F1) 
    console.log('Read data1')
    
    let data2 = await read(F2)
    console.log('Read data2')

    let nums = data1.toString().split('\n')
    nums = nums.concat(data2.toString().split('\n'))
    nums.sort((a,b)=>(a-b)) 

    await write(F3,nums.join('\n')) 
    console.log('Data written') 

}
console.log('Sorting begins')

sort()
console.log('Sorting ends')

