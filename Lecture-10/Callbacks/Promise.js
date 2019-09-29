let p = new Promise(function(resolve, reject) {
	console.log("Download starts")
	setTimeout(function() {
		resolve()
	}, 3000)
})

setTimeout(function() {
	p.then(function() {
		console.log("Finally done")
	})
}, 1000)

// -------------------------------------------------------------------
// function downloadFile(url){
//     return new Promise(function(resolve,reject){
//         if(!url.startsWith('http')) reject(new Error('Not a valid url'));
//         console.log('Download Starts');
//         setTimeout(function(){
//             let file_name = url.split('/').pop();
//             console.log('Download completed '+file_name);
//             resolve(file_name);
//         },3000)
//     });
// }

// function compressFile(file_name){
//     return new Promise(function(resolve,reject){
//         if(-1 == ['mp4','flv','webm'].indexOf(file_name.split('.').pop())) throw new Error('We can only compress video files');
//         console.log('Compression begins');
//         setTimeout(function(){
//             let compress_file_name=file_name.split('.')[0]+'.zip';
//             console.log('Compression completed '+compress_file_name);
//             resolve(compress_file_name);
//         },3000)
//     })
// }

// function uploadFile(compress_file_name){
//     return new Promise(function(resolve,reject){
//         console.log('Uploading starts');
//         setTimeout(function(){
//             let upload_path = 'http://abc.com/'+compress_file_name;
//             console.log('File uploaded at '+upload_path);
//             resolve(upload_path);
//         },3000)
//     })
// }

// downloadFile('http://example.com/file.mp4')
//     .then(compressFile)
//     .then(uploadFile)
//     .then(function(){
//         console.log('All done');
//     })
//     .catch(function(error){
//         console.log(error.message);
//     })

// downloadFile('http://example.com/file.mp4')
//     .then(function(file_name){
//         console.log('Download completed '+file_name);
//         compressFile(file_name)
//             .then(function(compress_file_name){
//                 console.log('Compression completed '+compress_file_name);
//                 uploadFile(compress_file_name)
//                     .then(function(upload_path){
//                         console.log('File uploaded at '+upload_path);
//                     })
//             })
//     })
// -------------------------------------------------------------------

// let p = new Promise(function(resolve,reject){
//     console.log('Execution starts');
//     throw new Error('There is an error');
//     setTimeout(function(){
//         let result = 'R';
//         resolve(result);
//     },3000)
// });

// p.then(function(result){
//     console.log('Execution completed '+result);
// })
// .catch(function(error){
//     console.log(error.message);
// })
