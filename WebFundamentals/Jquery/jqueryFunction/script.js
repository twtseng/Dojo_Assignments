/*
.hide
.show
.toggle
.slideDown	11
.slideUp	11
.slideToggle	11
.fadeIn	11
.fadeOut
.addClass
.before
.after
.append
.html
.attr
.val
.text
*/
$('#hide').click(() => {
    $('#slideTarget').hide();
});
$('#show').click(() => {
    $('#slideTarget').show();
});
$('#toggle').click(() => {
    $('#slideTarget').toggle();
});
$('#slideDown').click(() => {
    $('#slideTarget').slideDown("slow");
});
$('#slideUp').click(() => {
    $('#slideTarget').slideUp("slow");
});
$('#slideToggle').click(() => {
    $('#slideTarget').slideToggle("slow");
});
$('#fadeIn').click(() => {
    $('#slideTarget').fadeIn("slow");
});
$('#fadeOut').click(() => {
    $('#slideTarget').fadeOut("slow");
});

$('#addClass').click(() => {
    $('#originalContent').addClass("aqua");
});
$('#before').click(() => {
    var text = $('#textbox').val();
    $('#originalContent').before(text);
});
$('#after').click(() => {
    var text = $('#textbox').val();
    $('#originalContent').after(text);
});
$('#append').click(() => {
    var text = $('#textbox').val();
    $('#originalContent').append(text);
});
$('#html').click(() => {
    var text = $('#textbox').val();
    $('#originalContent').html(text);
});

