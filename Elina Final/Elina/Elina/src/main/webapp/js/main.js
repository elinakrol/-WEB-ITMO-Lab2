$('#submit_button').on('click', () => {
    if (!validate()) {
        return
    }
    requestData({
        clicked: false,
        x: $("label[for='" + $('[name="value_X"]:checked').attr('id') + "']").html(),
        y: $('#value_Y').val().replace(',', '.'),
        r: $("label[for='" + $('[name="value_R"]:checked').attr('id') + "']").html()
    })
})

function error(message) {
    Swal.fire({
        icon: 'error',
        title: 'Ошибка',
        text: message,
        heightAuto: false
    })
}


