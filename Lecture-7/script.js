// alert('Hello World!');
// name = prompt('Enter your name');
// alert('Hello '+name);

// console.log(name);
// name = 10;
// console.log(name);

// const a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// var a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// let a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// if(true){
//     var x = 10;
//     console.log(x);
//     x = 20;
// }
// console.log(x);

// function fun(){
//     let x = 10;
//     if(true){
//         console.log(x);
//         let x = 30;
//         x = 20;
//     }
// }
// function fun(){
//     var x = 10;
//     if(true){
//         console.log(x);
//         var x = 30;
//         x = 20;
//     }
// }
// fun();
// console.log(x);
// 'use strict'

// let str = "Hello \"World\"";
// console.log(str);
// console.log(typeof str);
// str = 'H';
// console.log(str)
// console.log(typeof str);

// let obj={
//     a:10,
//     b:'Hello World',
//     c:10.11
// }
// let obj1={
//     'a':10,
//     'b':'Hello World',
//     'c':10.11,
//     '':'empty',
//     ' ':true,
// }


// let arr = ['hello',1,2,3,true,10.11];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let a = 10;
// let b = 10.11;
// let c = 'Hello';
// let d = 'h';
// let e = true;
// let obj = {a:10,b:20};
// let arr = [10,20,30];
// let f;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof obj);
// console.log(typeof arr);

// let a = '10'+1;
// console.log(a);

// let b = '10' - 1;
// console.log(b);

// let c = '10' + 1 + 1;
// console.log(c)

// let arr = [10,20,30];
// let b = arr;
// console.log(arr == b);

// let obj = {a:10,b:20};
// let c = obj;

// let a =10;
// let b =20;

// function swap(a,b){
//     temp = a;
//     a= b;
//     b= temp;
// }
// console.log(a,b);
// swap(a,b);
// console.log(a,b);    

// let arr =[10,20];
// function swap1(arr){
//     temp = arr[0];
//     arr[0]= arr[1];
//     arr[1]=temp;
// }
// console.log(arr[0],arr[1]);
// swap1(arr);
// console.log(arr[0],arr[1]);  

// let a =parseFloat('11.11');
// console.log(a);

function add(a=0,b=0,c=0){
    return a+b+c;
}

console.log(add())
console.log(add(10))
console.log(add(10,20))
console.log(add(10,20,30))
