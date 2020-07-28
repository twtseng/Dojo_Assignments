$('img').hover(function() {
    var image2 = $(this).attr('image2');
    $(this).attr('src', image2);
}, function() {
    var image1 = $(this).attr('image1');
    $(this).attr('src', image1);
});