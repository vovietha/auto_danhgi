$('.questionTable').find('tbody tr').each(function(key, tr) {
    $(tr).find('td:last input').prop('checked', true).trigger('click')
    console.log(1)
});
