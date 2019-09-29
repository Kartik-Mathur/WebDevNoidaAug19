// let arr = [5,3,2,1,4,6,11,112,121,123,132]

// console.log(arr);
// arr.sort(function(a,b){
//     console.log(a + ' '+b);
//     return a-b;
// });
// console.log(arr);

let arr = [1,2,3,4,5,6];

// let arr2 = arr.map(function(value,index,arr){
//     // console.log(arr);
//     return value;
// });

// let arr3 = arr.map((value)=>0);
// let arr4 = arr.map((value)=>{
//     if(value%2 ==0) return 'even';
//     else return 'odd';
// });

arr2 = arr.filter(function(value){
    if(value%2 != 0) return true;
    else return false;
})

arr3 = arr.reduce(function(accum,value,index,arr){
    return accum+value;
})

console.log(arr2);
// console.log(arr3);
// console.log(arr4);