$(()=>{
    $('#calculate').click(()=>{
        let km = $('#km').val()
        let min = $('#min').val()

        $.get(`/fare?km=${km}&min=${min}`,(data)=>{
            $('#result').text(`₹ ${data.fare}`)
        })
    })
})