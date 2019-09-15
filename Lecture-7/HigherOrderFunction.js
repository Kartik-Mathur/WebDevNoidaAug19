// function outerFun(anotherFun){
//     console.log('This is outer fun '+anotherFun());
// }

// function innerFun(){
//     console.log('This is inner fun');
// }

// outerFun(innerFun);
function outerFun(){
    console.log('This is outerFun');
    function newFun(){
        console.log('This is new fun');
    }
    return newFun;
}

let fun=outerFun();
fun();

