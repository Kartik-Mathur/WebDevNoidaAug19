(function(name){
    console.log(`Hello ${name}`);
})('Harry');

function math(){
    console.log('3^4 = '+Math.pow(3,4));
    console.log('4^3 = '+Math.pow(4,3));
    console.log('root(4) = '+Math.sqrt(4));
    console.log('sin(40) = '+Math.sin(40));
}

// math();
(function(l,p,r,s){
    l('3^4 = '+p(3,4));
    l('4^3 = '+p(4,3));
    l('root(4) = '+r(4));
    l('sin(40) = '+s(40));
})(console.log,Math.pow,Math.sqrt,Math.sin);