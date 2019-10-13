$(()=>{
    function refreshTodos(){
        $('#todolist').empty()
        $.get('/todos',(data)=>{
            for(let item of data){
                $('#todolist').append(
                    $('<li>').append(
                        `<b>${item.priority}</b>`,
                        item.name
                    ) 
                )
            }
        })
    }
    refreshTodos()

    $('#addtodo').click(()=>{
        $.post(
            '/todos',
            {
                name:$('#newtodo').val(),
                priority:+($('#priority').val())
            },
            (data)=>{
                refreshTodos();
            }
        )
    })
})