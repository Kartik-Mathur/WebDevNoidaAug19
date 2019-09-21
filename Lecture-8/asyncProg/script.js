console.log(new Date().getTime());

function waitASec(){
    let startTime = new Date().getTime();
    while(new Date().getTime()<startTime+1000){}
}

function myFun(){
    console.log('Function is running');
}

function runAfterNSec(fun,N){
    for(let i = 0 ;i < N; i++){
        waitASec();
    }
    fun();
}

runAfterNSec(myFun,5);