const fs = require('fs')
const path = require('path')

let file = path.join(__dirname,'/Helo.txt');

console.log(__dirname);

fs.readFile(
    file,
    (err,data)=>{
        if(err) throw new Error('Could not read')
        console.log(data.toString())
    }
)


// fs.writeFile(
//     file,
//     'Hello World!',
//     {
//         encoding:'utf8',
//         flag:'a'
//     },
//     (err)=>{
//         if(err) throw err
//         console.log('File Written successfully')
//     }
// )

console.log('Code is getting executed');