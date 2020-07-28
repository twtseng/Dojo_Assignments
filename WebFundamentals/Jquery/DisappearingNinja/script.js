$('img').click(function(){
    $(this).hide();
})
$('#resetButton').click(() => {
    $('img').show();
})