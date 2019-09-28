// function outerFun(){
//     let x = 0;
//     function innerFun(){
//         x++;
//         return x;
//     }

//     return innerFun;
// }
// let a =outerFun()();

function add(val){
    // let ans = val;
    function helper(nextVal){
        if(typeof nextVal == 'undefined'){
            return val;
        }
        val += nextVal;
        return helper;
    }
    return helper;
}

console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(1)(2)(3)());
console.log(add(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)());
console.log(add(2)());
