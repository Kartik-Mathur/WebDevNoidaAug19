$(document.body)
    .append(
        $('<input>').attr('id','newtask')
    )
    .append(
        $('<button>')
            .attr('id','addtask')
            .text('ADD')
            .click(()=>{
                $('#tasklist').append(
                    $('<li>')
                        .text($('#newtask').val())
                        .append(
                            $('<button>').text('❌')
                        )
                        .append(
                            $('<button>').text('↑').attr('class','btn-up')
                        )
                        .append(
                            $('<button>').text('↓').attr('class','btn-down')
                        )
                )
                
            })
    )
    .append(
        $('<ul>').attr('id','tasklist')
    )

// $('#btn').click(function(){
//     console.log('Button is clicked');
// })
// $('#btn').unbind();
// $('#btn').click(()=>{
//     console.log('Button click');
// })

// $('#list').append(
//     $('<li>').text('kajbkjbas')
// );