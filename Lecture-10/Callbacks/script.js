function f(f1){
    console.log('F starts to run');
    setTimeout(function(){
        let result = 'r';
        f1(result);
    },3000);
}

f(function(res){
    console.log('F has been completed and result is '+res);
});