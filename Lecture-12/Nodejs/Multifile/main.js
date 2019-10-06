let lib;
if(typeof window == 'undefined'){
    lib = require('./lib.js') 
}
else{  
    lib = window;
}

console.log(lib.add(10,20));
console.log(lib.add(10,30));
console.log(lib.add(10,40));