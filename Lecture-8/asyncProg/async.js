// setTimeout(function(){
//     console.log('Funtion is running')
// },2000);

let id = setInterval(function(){
    console.log('Running');
},1000);

setTimeout(function(){
    clearInterval(id);
},5000);


// console.log(id);