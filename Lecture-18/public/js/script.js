$(()=>{
    function refreshTodoList(tasklist){
        $('#list').empty()

        for(let item of tasklist){
            $('#list').append(
                $('<li>').text(item.task) 
            )
        }
    }
    
    
    $('#btn').click((ev)=>{
        ev.preventDefault()
        // console.log($('#inp').val()) 
        $.post(
            '/tasks?mode=json',
            {
                task:$('#inp').val()
            },
            (data)=>{
                refreshTodoList(data)
            }
        )
    })
})