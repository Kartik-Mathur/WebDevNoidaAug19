$(()=>{
    let newtodo = $('#newtodo')
    let addtodo = $('#addtodo')
    let tasklist = $('#tasklist')
    function refreshTodos(){
        tasklist.empty()
        $.get('/todos',(data)=>{
            for(let todo of data){
                tasklist.append(
                    $('<li>').text(todo)
                )
            }
        })
    } 
    refreshTodos()
    addtodo.click(()=>{
        let val = newtodo.val();
        $.get(`/addtodo?newtodo=${val}`,(data)=>{
            if(data == 'success') {
                refreshTodos();
            }
        })
    })
})