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
                                .click((ev)=>{
                                   $(ev.target).parent().remove()
                                })
                        )
                        .append(
                            $('<button>').text('↑').attr('class','btn-up')
                                .click((ev)=>{
                                    // console.log($(ev.target).parent().prev())
                                    $(ev.target).parent().insertBefore(
                                        $(ev.target).parent().prev()
                                    )
                                })
                        )
                        .append(
                            $('<button>').text('↓').attr('class','btn-down')
                                .click((ev)=>{
                                    $(ev.target).parent().insertAfter(
                                        $(ev.target).parent().next()   
                                    )
                                })
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