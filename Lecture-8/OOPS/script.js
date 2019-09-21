let a = {
    k:1,
    l:'Hello',
    m:true,
    n:[1,2,3]
}

let b = Object.create(a);
let c = Object.create(b);

// b.n[2] = 30;
b.n = a.n.join(',').split(',');

console.log(a);
console.log(b);
b.k++;
if(b.hasOwnProperty('k')){
    console.log('B has K');
}
else{
    console.log('B doesnot has K');
}


function f(){
    console.log('Hello');
}

