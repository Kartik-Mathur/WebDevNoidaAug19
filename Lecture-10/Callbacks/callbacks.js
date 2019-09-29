function downloadFile(url,download,f){
    console.log('Download Starts');
    setTimeout(function(){
        let file_name = url.split('/').pop();
        download(file_name);
    },3000) 
}

function compressFile(file_name,compress){
    console.log('Compression starts');
    setTimeout(function(){
        let compress_file_name = file_name.split('.')[0] +'.zip';
        compress(compress_file_name);
    },3000)
}

function uploadFile(compress_file_name,upload){
    console.log('Uploading started');
    setTimeout(function(){
        let upload_path = 'http://abc.com/'+compress_file_name;
        upload(upload_path);
    },3000)
}

downloadFile('http://example.com/file.mp4',function(file_name){
    console.log('Download completed '+file_name);
    compressFile(file_name,function(compress_file_name){
        console.log('Compression completed '+compress_file_name);
        uploadFile(compress_file_name,function(upload_path){
            console.log('File uploaded at '+upload_path);
        })
    })
})

// downloadFile('http://example.com/file.mp4',function(){
//     console.log('Download Completed');
//     compressFile('xyz',function(){
//         console.log('Comnpression completed');
//     });
// });

