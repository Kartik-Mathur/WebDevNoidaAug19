function outerFun(){
    let x = 0;
    function innerFun(){
        x++;
        function innerMostFun(){
            x++; 
            return x;
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun = outerFun();
let funx = outerFun();

let fun1 = fun();
let fun2 = fun();
let fun3 = fun();

let funx1 = funx();

console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun2());
console.log(fun2());
console.log(fun3());
console.log(fun3());
console.log(funx1());
console.log(funx1());
console.log(funx1());





// function outerFun(){
//     let x = 0;
//     function innerFun(){
//         x++;
//         return x;        
//     }
//     return innerFun;
// }

// let fun = outerFun();
// let fun1 = outerFun();
// let fun2 = outerFun();

// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun1());
// console.log(fun1());
// console.log(fun2());
// console.log(fun2());
// console.log(fun2());
