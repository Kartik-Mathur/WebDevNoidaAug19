function normalFun(){
    console.log(this.x);
}
var x = 30;

let arrowFun = ()=>{
    console.log('Inside Arrow Fun');
    return this.x
};

let obj1 = {
    x : 10,
    y : arrowFun
}
let obj2 = {
    x : 20,
    y : arrowFun
}

console.log(obj1.y());
console.log(obj2.y());