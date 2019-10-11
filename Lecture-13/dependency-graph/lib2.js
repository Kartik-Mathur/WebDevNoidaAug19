// const lib1 = require('./lib1') 
console.log('running lib2')

let b = 20;

function add(a,b){
    return a+b;
}

global.add = add;

// module.exports.b = b;
// module.exports.lib1 = lib1;
// module.exports.add = add;
module.exports = {
    b,
    add
}